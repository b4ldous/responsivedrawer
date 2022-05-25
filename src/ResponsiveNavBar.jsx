import React from "react";
import DesktopComponent from "./DesktopComponent";
import MobileComponent from "./MobileComponent";

const ResponsiveNavBar = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default ResponsiveNavBar;
