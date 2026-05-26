import { test, expect } from "./fixtures";

test.describe("smoke", () => {
  test("renders the hero, all sections, and footer", async ({ page }) => {
    await page.goto("/");

    // Hero: "Jason D" headline is the most stable above-the-fold element
    await expect(page.getByRole("heading", { name: /jason d/i })).toBeVisible();

    // Every navigation anchor must have its target section in the DOM
    const sectionIds = ["about", "experience", "projects", "leadership", "skills", "contact"];
    for (const id of sectionIds) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }

    // Footer renders
    await expect(page.getByRole("contentinfo").first()).toBeAttached();
  });

  test("loads without console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto("/");
    // Wait for the lazy-loaded above-the-fold content to settle
    await page.waitForLoadState("networkidle");

    // Allow framework / third-party noise; fail only on application errors.
    const realErrors = errors.filter(
      (e) =>
        !/Download the React DevTools/.test(e) &&
        !/Vercel.*Speed Insights/i.test(e) &&
        !/source map/i.test(e) &&
        // WebKit logs every non-200 fetch as a console error; Vercel Speed
        // Insights and similar telemetry endpoints return 403 in test envs.
        // These are not application bugs.
        !/Failed to load resource.*\b40[0-9]\b/i.test(e) &&
        !/Failed to load resource.*\b50[0-9]\b/i.test(e)
    );

    expect(realErrors, `Page console errors:\n${realErrors.join("\n")}`).toHaveLength(0);
  });

  test("has page title and viewport meta tag", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/jason davey/i);
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute("content", /width=device-width/);
  });
});
