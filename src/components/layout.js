import { createContext } from "react";
import useTheme from "./useTheme";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./Navbar"), {
  ssr: false,
});

export const ThemeContext = createContext();
export default function Layout(props) {
  const { children } = props;

  return (
    <ThemeContext.Provider value={useTheme()}>
      <NavBar />
      <main>{children}</main>
    </ThemeContext.Provider>
  );
}
