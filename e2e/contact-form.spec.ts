import { test, expect, stubEmailJS } from "./fixtures";

test.describe("contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/#contact");
    await page.locator("#contact").scrollIntoViewIfNeeded();
    // Wait for the form to be interactive before the test types into it.
    await page.getByLabel("Your Name").waitFor({ state: "visible" });
  });

  test("renders the three required fields", async ({ page }) => {
    await expect(page.getByLabel("Your Name")).toBeVisible();
    await expect(page.getByLabel("Your Email")).toBeVisible();
    await expect(page.getByLabel("Your Message")).toBeVisible();
  });

  test("submit button is disabled until all fields are valid", async ({ page }) => {
    const submit = page.getByRole("button", { name: /send message/i });
    await expect(submit).toBeDisabled();

    await page.getByLabel("Your Name").fill("Test User");
    await page.getByLabel("Your Email").fill("test@example.com");
    await page.getByLabel("Your Message").fill("This is a long enough test message.");

    await expect(submit).toBeEnabled();
  });

  test("flags invalid email inline", async ({ page }) => {
    await page.getByLabel("Your Email").fill("not-an-email");
    await page.getByLabel("Your Email").blur();
    await expect(page.getByText(/please enter a valid email address/i)).toBeVisible();
  });

  test("flags too-short messages inline", async ({ page }) => {
    await page.getByLabel("Your Message").fill("short");
    await expect(page.getByText(/message must be at least 10 characters/i)).toBeVisible();
  });

  test("successful submission sends via EmailJS and shows success toast", async ({ page }) => {
    const calls = await stubEmailJS(page);

    await page.getByLabel("Your Name").fill("Playwright Tester");
    await page.getByLabel("Your Email").fill("tester@example.com");
    await page.getByLabel("Your Message").fill("Comprehensive test message that is plenty long.");

    const submit = page.getByRole("button", { name: /send message/i });
    // Ensure the form considers itself valid before we click.
    await expect(submit).toBeEnabled({ timeout: 10_000 });
    // WebKit + framer-motion's whileTap wrapper can intercept the pointer
    // event; force the click to dispatch the submit handler directly.
    await submit.click({ force: true });

    // WebKit is slower to flush the success state after the mocked fetch.
    await expect(page.getByText(/thank you.*sent successfully/i)).toBeVisible({
      timeout: 15_000,
    });
    expect(calls.length).toBeGreaterThan(0);

    // Verify the form was reset after success.
    await expect(page.getByLabel("Your Name")).toHaveValue("");
    await expect(page.getByLabel("Your Email")).toHaveValue("");
    await expect(page.getByLabel("Your Message")).toHaveValue("");
  });

  test("surfaces the allow-list error when EmailJS returns 412", async ({ page }) => {
    await page.route("**/api.emailjs.com/**", (route) =>
      route.fulfill({ status: 412, contentType: "text/plain", body: "Origin not allowed" })
    );

    await page.getByLabel("Your Name").fill("Playwright Tester");
    await page.getByLabel("Your Email").fill("tester@example.com");
    await page.getByLabel("Your Message").fill("Triggering a 412 from the EmailJS stub.");

    const submit = page.getByRole("button", { name: /send message/i });
    await expect(submit).toBeEnabled({ timeout: 10_000 });
    // WebKit + framer-motion's whileTap wrapper can intercept the pointer
    // event; force the click to dispatch the submit handler directly.
    await submit.click({ force: true });

    await expect(page.getByText(/email service rejected this origin/i)).toBeVisible({
      timeout: 15_000,
    });
  });
});
