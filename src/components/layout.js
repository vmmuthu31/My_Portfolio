import React, { createContext, Suspense } from "react";
import useTheme from "./useTheme";

const NavBar = React.lazy(() => import("./Navbar"));

export const ThemeContext = createContext();
export default function Layout(props) {
  const { children } = props;

  return (
    <ThemeContext.Provider value={useTheme()}>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
      </Suspense>
      <main>{children}</main>
    </ThemeContext.Provider>
  );
}
