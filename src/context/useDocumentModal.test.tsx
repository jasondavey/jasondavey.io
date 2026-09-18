import { describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { DocumentModalProvider } from "./DocumentModalContext";
import { useDocumentModal } from "./useDocumentModal";

describe("useDocumentModal", () => {
  it("throws when used outside a DocumentModalProvider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useDocumentModal())).toThrow(
      "useDocumentModal must be used within a DocumentModalProvider"
    );
    consoleError.mockRestore();
  });

  it("exposes showDocumentModal when inside the provider", () => {
    const { result } = renderHook(() => useDocumentModal(), { wrapper: DocumentModalProvider });
    expect(typeof result.current.showDocumentModal).toBe("function");
  });
});
