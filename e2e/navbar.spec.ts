import { test, expect } from "./fixtures";

const NAV_SECTIONS = ["About", "Career", "Projects", "Leadership", "Skills", "Contact"];

test.describe("navbar - desktop", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("renders every primary nav section", async ({ page }) => {
    await page.goto("/");
    for (const name of NAV_SECTIONS) {
      // Desktop nav buttons use the label text directly.
      await expect(page.getByRole("button", { name: new RegExp(`^${name}$`, "i") }).first()).toBeVisible();
    }
  });

  test("exposes GitHub and LinkedIn profile links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByLabel(/^github$/i).first()).toBeVisible();
    await expect(page.getByLabel(/^linkedin$/i).first()).toBeVisible();
  });

  test("smooth-scrolls to a section when a nav button is clicked", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /^contact$/i }).first().click();

    // The browser scrolls; verify the URL hash updates AND #contact is in view.
    await expect(page).toHaveURL(/#contact$/);
    const contact = page.locator("#contact");
    await expect(contact).toBeInViewport({ ratio: 0.2 });
  });
});

test.describe("navbar - mobile drawer", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("opens via the menu button and shows all nav sections", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel(/open menu/i).click();

    // The drawer surfaces as a presentation role. Wait for it to be visible.
    const drawer = page.getByRole("presentation").last();
    await expect(drawer).toBeVisible();

    for (const name of NAV_SECTIONS) {
      await expect(drawer.getByText(new RegExp(`^${name}$`, "i")).first()).toBeVisible();
    }
  });

  test("closes when the close button is clicked", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel(/open menu/i).click();
    const drawer = page.getByRole("presentation").last();
    await expect(drawer).toBeVisible();

    await page.getByLabel(/close menu/i).click();
    // Drawer fades out. Wait for it to leave the viewport.
    await expect(drawer).toBeHidden();
  });

  test("clicking a nav link inside the drawer scrolls and closes", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel(/open menu/i).click();
    const drawer = page.getByRole("presentation").last();

    await drawer.getByText(/^projects$/i).first().click();

    await expect(page).toHaveURL(/#projects$/);
    await expect(drawer).toBeHidden();
  });
});
