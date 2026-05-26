import { useEffect, useState, Suspense, lazy } from "react";
import { Fade, useScrollTrigger } from "@mui/material";

import DesktopNav from "./navbar/DesktopNav";
import MobileDrawer from "./navbar/MobileDrawer";

const ReadmeModal = lazy(() => import("./ReadmeModal"));

// Top-level navbar. Owns the mobile-drawer open state, the lazy ReadmeModal
// trigger, and the scroll trigger used to adjust the AppBar's appearance.
// The actual UI is composed from focused siblings under `./navbar/`.
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [readmeOpen, setReadmeOpen] = useState(false);

  // Detect scroll for navbar styling changes
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  // Fix for iOS viewport height issues
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  // Handle body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDrawerOpen = () => setMobileOpen(true);
  const handleDrawerClose = () => setMobileOpen(false);
  const handleReadmeOpen = () => setReadmeOpen(true);

  return (
    <>
      <Fade in={true}>
        <div>
          <DesktopNav
            scrolled={scrollTrigger}
            onMobileMenuOpen={handleDrawerOpen}
            onReadmeOpen={handleReadmeOpen}
          />
        </div>
      </Fade>

      <MobileDrawer
        open={mobileOpen}
        onClose={handleDrawerClose}
        onReadmeOpen={handleReadmeOpen}
      />

      {/* Technical Documentation Modal */}
      {readmeOpen && (
        <Suspense fallback={null}>
          <ReadmeModal open={readmeOpen} onOpenChange={setReadmeOpen} />
        </Suspense>
      )}
    </>
  );
};

export default Navbar;
