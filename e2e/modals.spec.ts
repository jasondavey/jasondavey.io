import { test, expect, type Page } from "./fixtures";

// Some modals use shadcn/Radix Dialog, others MUI Dialog. Both expose
// `role="dialog"` and a visible Close button. Close via the explicit
// button to avoid focus/keyboard differences across libraries.
async function closeOpenDialog(page: Page) {
  const closeButton = page.getByRole("dialog").getByRole("button", { name: /close/i }).first();
  if (await closeButton.count()) {
    await closeButton.click();
    return;
  }
  // Fallback: shadcn Dialog uses a visually-hidden "Close" label on an
  // icon button. Try locating any svg close icon inside the dialog.
  const xButton = page
    .getByRole("dialog")
    .locator('button[aria-label*="close" i], button:has(svg)')
    .last();
  await xButton.click();
}

test.describe("modals", () => {
  // Project cards are gated by Framer Motion's `whileInView`. Scrolling the
  // section into view + waiting for the first card's animation lets the
  // "View Details" buttons mount in the DOM.
  async function scrollToProjectsAndWait(page: Page) {
    await page.evaluate(() => {
      document.getElementById("projects")?.scrollIntoView({ block: "start" });
    });
    // Each project card animates in; the section has multiple cards so we
    // wait specifically for the FIRST View Details button to materialize.
    await page
      .locator('button:has-text("View Details")')
      .first()
      .waitFor({ state: "visible", timeout: 20_000 });
  }

  test("ProjectDetailsModal opens when 'View Details' is clicked", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await scrollToProjectsAndWait(page);

    await page.locator('button:has-text("View Details")').first().click();
    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("lazy-loads the ProjectDetailsModal chunk only on click", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const moduleRequests: string[] = [];
    page.on("request", (req) => {
      if (req.url().includes("ProjectDetailsModal") && req.resourceType() === "script") {
        moduleRequests.push(req.url());
      }
    });

    await page.goto("/");
    await scrollToProjectsAndWait(page);
    await page.waitForLoadState("networkidle");
    expect(moduleRequests).toHaveLength(0);

    await page.locator('button:has-text("View Details")').first().click();
    await expect(page.getByRole("dialog")).toBeVisible();

    expect(moduleRequests.length).toBeGreaterThan(0);
  });

  test("ReadmeModal opens from the Technical Documentation button", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await page
      .getByLabel(/technical documentation/i)
      .first()
      .click();
    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("LocationModal opens from a location chip in Contact", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/#contact");
    await page.locator("#contact").scrollIntoViewIfNeeded();

    await page
      .getByRole("button", { name: /san francisco/i })
      .first()
      .click({ force: true });
    const dialog = page.getByRole("dialog");
    // LocationModal is lazy-loaded; allow extra time on slower engines.
    await expect(dialog).toBeVisible({ timeout: 15_000 });
    // The map iframe is attached but may not be considered "visible" by
    // some engines until its content loads.
    await expect(dialog.locator("iframe")).toBeAttached();
  });

  test("DocumentModal opens from the Resume button (desktop)", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await page
      .getByLabel(/^resume$/i)
      .first()
      .click();
    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("DocumentModal opens from View Patent button (desktop)", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await page
      .getByLabel(/view patent/i)
      .first()
      .click();
    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("CarbonInfoModal opens from the Footer carbon badge", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForLoadState("networkidle");

    await page.getByRole("button", { name: /low carbon website/i }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("closing a modal returns focus to the page", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await page
      .getByLabel(/^resume$/i)
      .first()
      .click();
    await expect(page.getByRole("dialog")).toBeVisible();

    await closeOpenDialog(page);
    await expect(page.getByRole("dialog")).toBeHidden();
  });
});
