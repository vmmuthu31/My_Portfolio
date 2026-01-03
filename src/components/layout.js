import { createContext } from "react";
import useTheme from "./useTheme";
import NavBar from "./Navbar";

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
