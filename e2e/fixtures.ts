import { test as base, expect, Page } from "@playwright/test";

type Fixtures = {
  cleanPage: Page;
};

/**
 * `cleanPage` is a Page that has localStorage cleared before the test,
 * so theme preferences from a previous test don't leak in.
 */
export const test = base.extend<Fixtures>({
  cleanPage: async ({ page }, use) => {
    await page.addInitScript(() => {
      window.localStorage.clear();
    });
    await use(page);
  },
});

export { expect };

/**
 * Stub the EmailJS network endpoint so Contact form submits don't hit a
 * real service. Returns the count of intercepted requests for assertions.
 */
export async function stubEmailJS(page: Page) {
  const calls: Array<{ url: string; body: string }> = [];
  await page.route("**/api.emailjs.com/**", async (route) => {
    const request = route.request();
    calls.push({ url: request.url(), body: request.postData() ?? "" });
    await route.fulfill({
      status: 200,
      contentType: "text/plain",
      body: "OK",
    });
  });
  return calls;
}

/**
 * Standard viewport sizes used across responsive tests.
 */
export const VIEWPORTS = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  laptop: { width: 1280, height: 800 },
  desktop: { width: 1920, height: 1080 },
} as const;
