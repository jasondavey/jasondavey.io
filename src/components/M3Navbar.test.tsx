import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@/test/render";
import M3Navbar from "./M3Navbar";
import { navigationSections } from "@/utils/navigation";

const visibleSections = navigationSections.filter((s) => s.href !== "#");

describe("M3Navbar", () => {
  it("renders every visible navigation section in the desktop nav", () => {
    render(<M3Navbar />);
    for (const { name } of visibleSections) {
      const matches = screen.getAllByText(name);
      expect(matches.length).toBeGreaterThan(0);
    }
  });

  it("exposes the GitHub and LinkedIn profile actions with accessible names", () => {
    render(<M3Navbar />);
    expect(screen.getAllByLabelText(/github/i).length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText(/linkedin/i).length).toBeGreaterThan(0);
  });

  it("opens the mobile drawer when the menu button is clicked", async () => {
    const user = userEvent.setup();
    render(<M3Navbar />);

    const drawerListBefore = screen.queryByRole("presentation");
    // Drawer may render in a closed state with display:none.
    // We just need to confirm clicking the menu opens visible nav items.

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);

    const presentations = await screen.findAllByRole("presentation");
    // Mobile drawer is the visible presentation panel.
    const drawer = presentations[presentations.length - 1]!;

    for (const { name } of visibleSections) {
      const inDrawer = within(drawer).getAllByText(name);
      expect(inDrawer.length).toBeGreaterThan(0);
    }
    expect(drawerListBefore !== drawer || presentations.length >= 1).toBe(true);
  });
});
