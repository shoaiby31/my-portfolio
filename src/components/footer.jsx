import React from "react";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/CloudDownload";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (to) => {
    if (to === "/") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      return;
    }

    if (to.startsWith("/#")) {
      const sectionId = to.substring(2);

      if (location.pathname !== "/") {
        navigate(to);
      } else {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
      return;
    }

    navigate(to);
  };

  const footerLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/#about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer */}
        <Box
          sx={{
            py: { xs: 5, md: 6 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 4,
          }}
        >
          {/* Brand */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                mb: 1,
              }}
            >
              Shoaib Yousaf
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                maxWidth: 420,
                lineHeight: 1.7,
              }}
            >
              Building digital products, analyzing data, designing
              experiences, and exploring AI-powered technologies.
            </Typography>
          </Box>

          {/* Navigation */}
          <Stack
            direction="row"
            spacing={{ xs: 2, sm: 3 }}
            flexWrap="wrap"
            useFlexGap
          >
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                component="button"
                onClick={() => handleNavigation(item.to)}
                underline="none"
                color="text.secondary"
                sx={{
                  fontSize: "0.9rem",
                  fontFamily: "inherit",
                  border: 0,
                  background: "none",
                  padding: 0,
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          {/* Social Links */}
          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://github.com/shoaiby31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{
                border: "1px solid",
                borderColor: "divider",
                "&:hover": {
                  color: "primary.main",
                  borderColor: "primary.main",
                },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href="#"
              aria-label="LinkedIn"
              sx={{
                border: "1px solid",
                borderColor: "divider",
                "&:hover": {
                  color: "primary.main",
                  borderColor: "primary.main",
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href="https://raw.githubusercontent.com/shoaiby31/my-portfolio/main/public/shoaib-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
              sx={{
                border: "1px solid",
                borderColor: "divider",
                "&:hover": {
                  color: "primary.main",
                  borderColor: "primary.main",
                },
              }}
            >
              <DownloadIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={() => handleNavigation("/")}
              aria-label="Back to top"
              sx={{
                border: "1px solid",
                borderColor: "divider",
                "&:hover": {
                  color: "primary.main",
                  borderColor: "primary.main",
                },
              }}
            >
              <KeyboardArrowUpIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        <Divider />

        {/* Copyright */}
        <Box
          sx={{
            py: 2.5,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Shoaib Yousaf. All rights reserved.
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Designed & built with React and Material UI.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;