import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // This hook gives us the current location (URL)
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the pathname changes, scroll to the top left of the screen
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render any UI
};

export default ScrollToTop;
