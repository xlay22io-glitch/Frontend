import type { ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "../navigation/Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          minHeight: "calc(100vh - 90px)",
          paddingTop: "80px",
          color: "white",
          overflowX: "hidden",
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
