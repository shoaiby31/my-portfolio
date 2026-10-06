import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import { useSelector, useDispatch } from "react-redux";
import { changeThemeMode } from "../redux/slices/theme/index";

import Logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const drawerWidth = 260;

const pages = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "Skills",
    to: "#skills",
  },
  {
    id: 3,
    name: "Experience",
    to: "#experience",
  },
  {
    id: 4,
    name: "Projects",
    to: "/projects",
  },
  {
    id: 5,
    name: "Services",
    to: "#services",
  },
  {
    id: 6,
    name: "About",
    to: "#about",
  },
  {
    id: 7,
    name: "Contact",
    to: "#contact",
  },
];

export default function Appbar(props) {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const themeMode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const isActive = (item) => {
    if (item.to === "/") {
      return location.pathname === "/";
    }

    if (item.to === "/projects") {
      return location.pathname === "/projects";
    }

    return false;
  };

  /* ================= MOBILE DRAWER ================= */

  const drawer = (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "background.paper",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 3,
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Shoaib Yousaf"
          sx={{
            width: 85,
          }}
        />
      </Box>

      <Divider />

      {/* Navigation */}
      <List sx={{ px: 2, py: 2 }}>
        {pages.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{ mb: 0.5 }}
          >
            <ListItemButton
              component="a"
              href={item.to}
              selected={isActive(item)}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 2,
                px: 2,

                "& .MuiListItemText-primary": {
                  fontSize: "0.95rem",
                  fontWeight: 500,
                },

                "&.Mui-selected": {
                  backgroundColor: "action.selected",
                },

                "&.Mui-selected .MuiListItemText-primary": {
                  color: "primary.main",
                  fontWeight: 700,
                },

                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined
      ? () => window().document.body
      : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        color="inherit"
        sx={{
          backgroundColor: "background.paper",

          borderBottom: (theme) =>
            `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{
            minHeight: {
              xs: 64,
              md: 72,
            },

            px: {
              xs: 2,
              sm: 3,
              md: 5,
              lg: 7,
            },
          }}
        >
          {/* ================= MOBILE MENU ================= */}

          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
            aria-label="menu"
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },

              borderRadius: 2,
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* ================= LOGO ================= */}

          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",

              ml: {
                xs: 1,
                md: 0,
              },
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Shoaib Yousaf"
              sx={{
                width: {
                  xs: 70,
                  md: 82,
                },

                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            />

            {/* Mobile logo */}
            <Box
              component="img"
              src={Logo}
              alt="Shoaib Yousaf"
              sx={{
                width: 65,

                display: {
                  xs: "block",
                  md: "none",
                },

                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </Box>

          {/* ================= SPACER ================= */}

          <Box sx={{ flexGrow: 1 }} />

          {/* ================= DESKTOP NAV ================= */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              alignItems: "center",

              px: 1,

              borderRadius: 3,

              backgroundColor: "action.hover",
            }}
          >
            {pages.map((item) => {
              const active = isActive(item);

              return (
                <Button
                  key={item.id}
                  component="a"
                  href={item.to}
                  sx={{
                    minWidth: "auto",

                    px: {
                      md: 1.4,
                      lg: 1.7,
                    },

                    py: 0.9,

                    borderRadius: 2,

                    color: active
                      ? "primary.main"
                      : "text.secondary",

                    fontSize: "0.9rem",

                    fontWeight: active ? 700 : 500,

                    textTransform: "none",

                    transition: "all 0.2s ease",

                    "&:hover": {
                      color: "primary.main",
                      backgroundColor:
                        "background.paper",
                    },
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
          </Box>

          {/* ================= THEME BUTTON ================= */}

          <IconButton
            edge="end"
            color="inherit"
            onClick={() =>
              dispatch(changeThemeMode())
            }
            aria-label="toggle theme"
            sx={{
              ml: {
                xs: "auto",
                md: 1.5,
              },

              width: 42,
              height: 42,

              borderRadius: 2,

              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            {themeMode ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}