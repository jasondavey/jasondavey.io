import { test, expect } from "./fixtures";

test.describe("diary", () => {
  test("home page teaser links to the latest entry", async ({ page }) => {
    await page.goto("/");
    const teaser = page.getByText("Ink Still Drying");
    await expect(teaser).toBeVisible();

    // The teaser titles each entry as a link to its detail page, and closes
    // with a single "Visit the diary" link to the index.
    const entryLink = page.locator('a[href^="/diary/"]').first();
    await expect(entryLink).toBeVisible();
    expect(await entryLink.getAttribute("href")).toMatch(/^\/diary\/.+/);

    await expect(page.getByRole("link", { name: /visit the diary/i })).toHaveAttribute(
      "href",
      "/diary"
    );
  });

  test("lists entries and navigates to an entry's detail page", async ({ page }) => {
    await page.goto("/diary");
    await expect(page.getByRole("heading", { name: "Diary", exact: true })).toBeVisible();

    const firstEntryLink = page.getByRole("link", { name: /read more/i }).first();
    await expect(firstEntryLink).toBeVisible();
    await firstEntryLink.click();

    await expect(page).toHaveURL(/\/diary\/.+/);
    await expect(page.getByRole("link", { name: /back to diary/i })).toBeVisible();
  });

  test("shows a not-found message for an unknown slug", async ({ page }) => {
    await page.goto("/diary/this-entry-does-not-exist");
    await expect(page.getByText(/doesn't exist/i)).toBeVisible();
  });

  test("header section links navigate home and scroll to the section", async ({ page }) => {
    await page.goto("/diary");
    await page.getByRole("link", { name: "About", exact: true }).click();
    await expect(page).toHaveURL(/\/#about$/);
    await expect(page.locator("#about")).toBeInViewport();
  });
});
