import { describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { ExternalLinkProvider } from "./ExternalLinkContext";
import { useExternalLink } from "./useExternalLink";

describe("useExternalLink", () => {
  it("throws when used outside an ExternalLinkProvider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useExternalLink())).toThrow(
      "useExternalLink must be used within an ExternalLinkProvider"
    );
    consoleError.mockRestore();
  });

  it("exposes openExternalLink when inside the provider", () => {
    const { result } = renderHook(() => useExternalLink(), { wrapper: ExternalLinkProvider });
    expect(typeof result.current.openExternalLink).toBe("function");
  });
});
