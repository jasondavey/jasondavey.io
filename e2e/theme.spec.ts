import { test, expect } from "./fixtures";

// Helper: scope to the visible toggle. There are two in the DOM at any time
// (one in the desktop AppBar, one in the mobile drawer's content tree); only
// one is visible at a given viewport / drawer state.
const visibleToggle = (page: import("@playwright/test").Page, label: RegExp | string) =>
  page.locator(`[aria-label="${typeof label === "string" ? label : ""}"]:visible`).first();

test.describe("theme toggle", () => {
  test("defaults to dark on a fresh visit", async ({ cleanPage: page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    // In dark mode the toggle offers to switch to light.
    await expect(visibleToggle(page, "Switch to light mode")).toBeVisible();
    const saved = await page.evaluate(() => window.localStorage.getItem("theme"));
    expect(saved).toBeNull();
  });

  test("clicking the toggle flips the mode and persists it", async ({ cleanPage: page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await visibleToggle(page, "Switch to light mode").click();

    await expect(visibleToggle(page, "Switch to dark mode")).toBeVisible();
    expect(await page.evaluate(() => window.localStorage.getItem("theme"))).toBe("light");

    await visibleToggle(page, "Switch to dark mode").click();
    await expect(visibleToggle(page, "Switch to light mode")).toBeVisible();
    expect(await page.evaluate(() => window.localStorage.getItem("theme"))).toBe("dark");
  });

  test("persists across reload", async ({ page }) => {
    // Note: uses plain `page` (not `cleanPage`) so localStorage isn't wiped
    // on reload. We pre-seed below to start from a known state.
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await page.evaluate(() => window.localStorage.removeItem("theme"));
    await page.reload();

    await visibleToggle(page, "Switch to light mode").click();
    await expect(visibleToggle(page, "Switch to dark mode")).toBeVisible();
    expect(await page.evaluate(() => window.localStorage.getItem("theme"))).toBe("light");

    await page.reload();
    await expect(visibleToggle(page, "Switch to dark mode")).toBeVisible();
  });

  test("no dark-to-light flash when the saved preference is light", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    // Pre-seed localStorage before any app code runs.
    await page.addInitScript(() => {
      window.localStorage.setItem("theme", "light");
    });
    await page.goto("/");

    // First render must already be in light mode (toggle offers "Switch to dark").
    await expect(visibleToggle(page, "Switch to dark mode")).toBeVisible();

    // No visible "Switch to light mode" toggle anywhere during this session.
    await expect(page.locator(`[aria-label="Switch to light mode"]:visible`)).toHaveCount(0);
  });
});
