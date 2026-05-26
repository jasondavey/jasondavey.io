import { test, expect, VIEWPORTS } from "./fixtures";

test.describe("responsive layout", () => {
  test("mobile (375x812) shows the hamburger menu, not desktop nav links", async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await page.goto("/");

    // The "open menu" button is visible on mobile.
    await expect(page.getByLabel(/open menu/i)).toBeVisible();

    // Desktop nav buttons ("About", "Projects", etc.) are NOT visible at
    // this width - MUI hides them via display: { xs: 'none', md: 'flex' }.
    // Verify by checking the visibility of the first nav button.
    const aboutButton = page.getByRole("button", { name: /^about$/i }).first();
    if (await aboutButton.count()) {
      await expect(aboutButton).toBeHidden();
    }
  });

  test("laptop (1280x800) shows desktop nav, hides the hamburger", async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.laptop);
    await page.goto("/");

    await expect(page.getByRole("button", { name: /^about$/i }).first()).toBeVisible();
    await expect(page.getByLabel(/open menu/i)).toBeHidden();
  });

  test("tablet (768x1024) renders without horizontal scroll", async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.tablet);
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Compare scrollWidth to viewport width - they should match (no overflow).
    const overflow = await page.evaluate(() => {
      const html = document.documentElement;
      return html.scrollWidth - html.clientWidth;
    });
    expect(overflow).toBeLessThanOrEqual(1); // allow 1px sub-pixel rounding
  });

  test("desktop (1920x1080) renders without horizontal scroll", async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });
});

test.describe("lazy chunk graph", () => {
  test("initial paint does not fetch any modal chunks", async ({ page }) => {
    const chunks: string[] = [];
    page.on("request", (req) => {
      const url = req.url();
      // Modal chunks have predictable names from the bundle splitter.
      if (
        /\/(ProjectDetailsModal|ReadmeModal|LocationModal|DocumentModal|ExternalLinkModal|CarbonInfoModal|markdown-vendor)-[A-Za-z0-9_-]+\.js/.test(
          url
        )
      ) {
        chunks.push(url);
      }
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    expect(chunks, `Unexpected modal chunk fetch:\n${chunks.join("\n")}`).toHaveLength(0);
  });
});
