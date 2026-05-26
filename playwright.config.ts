import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;

// Opt-in: PW_ALL=1 runs every browser project locally. By default a local
// `npm run test:e2e` runs Chromium only to keep your CPU/fan happy.
// CI always runs the full matrix.
const runAllBrowsers = isCI || process.env.PW_ALL === "1";

const baseURL = process.env.PW_BASE_URL ?? "http://localhost:8080";

const webServer = process.env.PW_BASE_URL
  ? undefined
  : {
      // Use the dev server locally for fast feedback; CI overrides with
      // PW_BASE_URL pointing at the Vercel preview so we don't double-build.
      command: isCI
        ? "npm run build && npm run preview -- --port 8080 --strictPort"
        : "npm run dev -- --port 8080 --strictPort",
      url: "http://localhost:8080",
      reuseExistingServer: !isCI,
      timeout: 120_000,
      stdout: "pipe" as const,
      stderr: "pipe" as const,
    };

const desktopProjects = [
  {
    name: "chromium",
    use: { ...devices["Desktop Chrome"] },
  },
  ...(runAllBrowsers
    ? [
        {
          name: "firefox",
          use: { ...devices["Desktop Firefox"] },
        },
        {
          name: "webkit",
          use: { ...devices["Desktop Safari"] },
        },
      ]
    : []),
];

const mobileProjects = runAllBrowsers
  ? [
      {
        name: "mobile-chrome",
        use: { ...devices["Pixel 7"] },
        testMatch: /(smoke|responsive)\.spec\.ts$/,
      },
      {
        name: "mobile-safari",
        use: { ...devices["iPhone 15"] },
        testMatch: /(smoke|responsive)\.spec\.ts$/,
      },
    ]
  : [];

export default defineConfig({
  testDir: "./e2e",
  testMatch: /.*\.spec\.ts$/,
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  // Local: 1 worker by default - fewer parallel browsers = quieter laptop.
  // CI: 2 workers, ample headroom on the runner.
  workers: isCI ? 2 : 1,
  reporter: isCI
    ? [
        ["html", { open: "never" }],
        ["github"],
        // JSON summary consumed by the PR-comment step in CI.
        ["json", { outputFile: "playwright-results.json" }],
      ]
    : "html",
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    // Video recording is heavy on disk + CPU; only collect it in CI where
    // we want the artifact for failure analysis.
    video: isCI ? "retain-on-failure" : "off",
  },
  webServer,
  projects: [...desktopProjects, ...mobileProjects],
});
