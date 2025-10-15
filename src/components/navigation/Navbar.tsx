import { useState } from "react";
import { Typography, Box, IconButton, Drawer, ListItem, List, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import CustomButton from "../common/CustomButton";
import CloseIcon from "@mui/icons-material/Close";
import useAuthStore from "../../store/auth-store";
import { useLogout } from "../../hooks/auth-hook";

import backCalcIcon from "../../assets/icons/back-calculator-icon.png";

import homeIcon from "../../assets/icons/home-icon.png";
import redirectIcon from "../../assets/icons/redirect-icon.png";

import profilePlaceholder from "../../assets/images/profile-picture-placeholder.webp";
import Logo from "../common/Logo";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const { mutate: logoutUser, isPending } = useLogout();

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  const navItemsAuthenticated = [
    { icon: homeIcon, label: "Home", path: "/" },
    { icon: backCalcIcon, label: "Back Calculator", path: "/calculator" },
  ];
  const navItemsLoggedOut = [{ icon: homeIcon, label: "Home", path: "/" }];
  const navItems = isAuthenticated ? navItemsAuthenticated : navItemsLoggedOut;

  const handleLogout = () => {
    logoutUser();
    clearAuth();
    navigate("/login");
  };

  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor: (theme) => theme.palette.background.default,
          justifyContent: "center",
          borderBottom: `2px solid ${theme.palette.black.dark}`,
          height: "80px",
          px: { xs: 2.5, md: 6, lg: 12 },
          position: "fixed",
          width: "100%",
          zIndex: 1300,
        })}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <Logo />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              gap: 4,

              "@media (max-width: 1200px)": {
                display: "none",
              },
            }}
          >
            <CustomButton
              component={Link}
              to="/"
              variant="default"
              sx={(theme) => ({
                textTransform: "none",
                px: 3,
                fontWeight: 700,
                fontSize: "16px",
                color: alpha(theme.palette.common.white, 0.8),
              })}
            >
              Home
            </CustomButton>
            {isAuthenticated && (
              <CustomButton
                component={Link}
                to="/calculator"
                variant="default"
                sx={(theme) => ({
                  textTransform: "none",
                  px: 3,
                  fontWeight: 700,
                  fontSize: "16px",
                  color: alpha(theme.palette.common.white, 0.8),
                })}
              >
                Back&nbsp;Calculator
              </CustomButton>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flex: 1,
              "@media (max-width: 1200px)": {
                display: "none",
              },
            }}
          >
            {isAuthenticated ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <CustomButton
                  onClick={handleLogout}
                  disabled={isPending}
                  variant="default"
                  sx={(theme) => ({
                    color: "common.white",
                    border: `2px solid ${theme.palette.black.medium}`,
                    textTransform: "none",
                    width: "114px",
                  })}
                >
                  {isPending ? "Logging out..." : "Logout"}
                </CustomButton>

                {/* TODO: add real user picture if exists */}
                <Box
                  onClick={() => navigate("/account")}
                  component="img"
                  src={profilePlaceholder}
                  alt="Profile Picture"
                  sx={{
                    width: "52px",
                    height: "52px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
              </Box>
            ) : (
              <>
                <CustomButton
                  component={Link}
                  to="/login"
                  variant="default"
                  sx={(theme) => ({
                    color: "common.white",
                    border: `2px solid ${theme.palette.black.medium}`,
                    textTransform: "none",
                    width: "114px",
                  })}
                >
                  Log in
                </CustomButton>
                <CustomButton
                  component={Link}
                  to="/register"
                  variant="primary"
                  sx={{ ml: 2, textTransform: "none", width: "114px" }}
                >
                  Register
                </CustomButton>
              </>
            )}
          </Box>

          <Box
            sx={{
              display: {
                xs: "flex",
                lg: "none",
                alignItems: "center",
                height: "100%",
              },
            }}
          >
            <IconButton
              onClick={toggleDrawer}
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              {mobileOpen ? (
                <CloseIcon sx={{ fontSize: 28 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 28, transform: "scaleY(1.2)" }} />
              )}
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        hideBackdrop
        slotProps={{
          paper: {
            sx: {
              width: "100%",
              backgroundColor: "#111",
              color: "white",
              py: 2,
              px: 2,
              mt: "80px",
            },
          },
        }}
      >
        <List>
          {navItems.map(({ label, path }) => (
            <ListItem key={label} disablePadding>
              <ListItemText
                primary={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #333",
                      width: "100%",
                    }}
                  >
                    <Typography
                      onClick={() => {
                        navigate(path);
                        setMobileOpen(false);
                      }}
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        pl: 1,
                        py: 1.5,
                        cursor: "pointer",
                      }}
                    >
                      {label}
                    </Typography>
                    <Box
                      width={16}
                      height={16}
                      component={"img"}
                      src={redirectIcon}
                      alt="redirect-icon"
                    />
                  </Box>
                }
              />
            </ListItem>
          ))}

          {isAuthenticated ? (
            <>
              <ListItem disablePadding>
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        onClick={() => {
                          navigate("/account");
                          setMobileOpen(false);
                        }}
                        sx={{
                          fontSize: "18px",
                          fontWeight: 500,
                          pl: 1,
                          py: 1.5,
                          cursor: "pointer",
                        }}
                      >
                        Account
                      </Typography>
                      <Box
                        width={16}
                        height={16}
                        component={"img"}
                        src={redirectIcon}
                        alt="redirect-icon"
                      />
                    </Box>
                  }
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        onClick={() => {
                          handleLogout();
                          setMobileOpen(false);
                        }}
                        sx={{
                          fontSize: "18px",
                          fontWeight: 500,
                          pl: 1,
                          py: 1.5,
                          cursor: "pointer",
                          borderBottom: "1px solid #333",
                        }}
                      >
                        Logout
                      </Typography>
                      <Box
                        width={16}
                        height={16}
                        component={"img"}
                        src={redirectIcon}
                        alt="redirect-icon"
                      />
                    </Box>
                  }
                />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #333",
                        width: "100%",
                      }}
                    >
                      <Typography
                        onClick={() => {
                          navigate("/login");
                          setMobileOpen(false);
                        }}
                        sx={{
                          fontSize: "18px",
                          fontWeight: 500,
                          pl: 1,
                          py: 1.5,
                          cursor: "pointer",
                        }}
                      >
                        Login
                      </Typography>
                      <Box
                        width={16}
                        height={16}
                        component={"img"}
                        src={redirectIcon}
                        alt="redirect-icon"
                      />
                    </Box>
                  }
                />
              </ListItem>

              <ListItem disablePadding>
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        borderBottom: "1px solid #333",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        onClick={() => {
                          navigate("/register");
                          setMobileOpen(false);
                        }}
                        sx={{
                          fontSize: "18px",
                          fontWeight: 500,
                          pl: 1,
                          py: 1.5,
                          cursor: "pointer",
                          borderBottom: "1px solid #333",
                        }}
                      >
                        Register
                      </Typography>
                      <Box
                        width={16}
                        height={16}
                        component={"img"}
                        src={redirectIcon}
                        alt="redirect-icon"
                      />
                    </Box>
                  }
                />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
