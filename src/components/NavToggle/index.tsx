import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import TopBarMobile from "../MobileNav";

const NavToggler = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, []);
  return <>{screenSize > 992 ? <NavBar /> : <TopBarMobile />}</>;
};

export default NavToggler;
