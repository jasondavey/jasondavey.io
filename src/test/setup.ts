import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, vi } from "vitest";

// Provide stub values for VITE_* env vars consumed by the app so tests don't
// depend on a local .env file. The EmailJS form has a guard that returns
// early if any of these are missing; without stubs the test "sends the
// message via emailjs when all fields are valid" never reaches send().
beforeAll(() => {
  vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "test_service");
  vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "test_template");
  vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "test_public_key");
  vi.stubEnv("VITE_EMAIL_ADDRESS_HELLO", "test@example.com");
  vi.stubEnv("VITE_PHONE_NUMBER", "+1-555-0100");
});

afterEach(() => {
  cleanup();
});

// jsdom doesn't implement matchMedia; MUI and framer-motion both probe it.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// IntersectionObserver is used by framer-motion's useInView and our scroll
// animation hooks; jsdom does not implement it.
class IntersectionObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
  root = null;
  rootMargin = "";
  thresholds: number[] = [];
}
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});

class ResizeObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: ResizeObserverMock,
});
