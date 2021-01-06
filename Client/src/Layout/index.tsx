import React from "react";
import Header from "./Header";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Theme";
import SideBar from "./SideDrawer";
import Tab from "./Tab";

type Nav = {
  children: JSX.Element[] | JSX.Element;
};

const index: React.FC<Nav> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <SideBar />
        <Tab />
      </ThemeProvider>
    </>
  );
};

export default index;
