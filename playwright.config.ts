import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;

const baseURL = process.env.PW_BASE_URL ?? "http://localhost:8080";

const webServer = process.env.PW_BASE_URL
  ? undefined
  : {
      command: "npm run build && npm run preview -- --port 8080 --strictPort",
      url: "http://localhost:8080",
      reuseExistingServer: !isCI,
      timeout: 120_000,
      stdout: "pipe" as const,
      stderr: "pipe" as const,
    };

export default defineConfig({
  testDir: "./e2e",
  testMatch: /.*\.spec\.ts$/,
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 2 : undefined,
  reporter: isCI ? [["html", { open: "never" }], ["github"]] : "html",
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  webServer,
  projects: [
    // Desktop browsers run the full suite.
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    // Mobile profiles run only smoke + responsive layout checks. They use a
    // touch emulation and a different viewport, so feature-flow specs are
    // best validated on the desktop projects.
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
  ],
});
