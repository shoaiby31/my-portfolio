import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  Chip,
  Stack,
  Button,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/CloudDownload";

import pic from "../assets/pic.png";
import LinkedInButton from "./linkedinibutton";
import GitHubButton from "./githubbutton";

function Header() {
  const skills = [
    "Shoaib Yousaf",
    "Web Developer",
    "Mobile Apps Developer",
    "Apps Designer",
    "Graphic Designer",
    "Business Analyst",

  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex(
        (prevIndex) => (prevIndex + 1) % skills.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  const projectTypes = [
    "Web Development",
    "SaaS",
    "Mobile Apps",
    "Business Intelligence",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: { xs: 4, md: 6 },
        px: { xs: 3, sm: 5, md: 7 },
        py: { xs: 5, md: 10 },
        mb: { xs: 7, md: 10 },

        background: (theme) =>
          `linear-gradient(
            135deg,
            ${theme.palette.primary.main} 0%,
            ${theme.palette.primary.dark} 55%,
            #111827 100%
          )`,

        color: "common.white",
        boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
      }}
    >
      {/* ================= DECORATIVE CIRCLES ================= */}

      <Box
        sx={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          right: -180,
          top: -180,
          border: "1px solid rgba(255,255,255,0.10)",
          background: "rgba(255,255,255,0.04)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          right: 40,
          bottom: -160,
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />

      {/* ================= MAIN CONTENT ================= */}

      <Grid
        container
        spacing={{ xs: 4, md: 2 }}
        alignItems="center"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ================= LEFT SIDE ================= */}

        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ maxWidth: 760 }}>
            {/* Label */}

            <Chip
              label="SHOAIB YOUSAF • DEVELOPER & DESIGNER"
              sx={{
                mb: 2.5,
                px: 1,
                color: "common.white",
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            />

            {/* Main Heading */}

            <Typography
              component="h5"
              fontWeight={800}
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.0rem",
                  md: "2.8rem",
                },
                lineHeight: 1.05,
                mb: 2.5,
                letterSpacing: "-0.03em",
              }}
            >
              Hi there 👋 I'm{" "}
              <Box
                component="span"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {skills[currentSkillIndex]}
              </Box>
            </Typography>

            {/* Description */}

            <Typography
              sx={{
                maxWidth: 700,
                fontSize: {
                  xs: "1rem",
                  md: "1.18rem",
                },
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Building a successful product is a challenge. I bring
              expertise in user experience design, interfaces, web
              development, mobile applications, and AgriTech to create
              practical and user-focused digital solutions.
            </Typography>

            {/* Project / Skill Types */}

            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 4,
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {projectTypes.map((type) => (
                <Chip
                  key={type}
                  label={type}
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "rgba(255,255,255,0.3)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                  }}
                />
              ))}
            </Stack>

            {/* ================= ACTION BUTTONS ================= */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1.5,
                mt: 4,
              }}
            >
              <a
                href="https://raw.githubusercontent.com/shoaiby31/my-portfolio/main/public/shoaib-resume.pdf"
                download
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={
                    <DownloadIcon sx={{ color: "white" }} />
                  }
                  sx={{
                    borderRadius: 20,
                    px: 3,
                    color: "white",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    border:
                      "1px solid rgba(255,255,255,0.25)",
                    textTransform: "none",

                    "&:hover": {
                      backgroundColor:
                        "rgba(255,255,255,0.22)",
                    },
                  }}
                >
                  Resume
                </Button>
              </a>

              <LinkedInButton />
              <GitHubButton />
            </Box>
          </Box>
        </Grid>

        {/* ================= RIGHT SIDE - PROFILE ================= */}

        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              md: "flex-end",
            },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: {
                xs: 230,
                sm: 260,
                md: 285,
              },
              height: {
                xs: 230,
                sm: 260,
                md: 285,
              },

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* ================= OUTER RING ================= */}

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.25)",
                transform: "rotate(15deg)",
              }}
            />

            {/* ================= DASHED RING ================= */}

            <Box
              sx={{
                position: "absolute",
                inset: 12,
                borderRadius: "50%",
                border: "1px dashed rgba(255,255,255,0.22)",
              }}
            />

            {/* ================= GLOW ================= */}

            <Box
              sx={{
                position: "absolute",
                width: "85%",
                height: "85%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)",
                filter: "blur(10px)",
              }}
            />

            {/* ================= PROFILE IMAGE ================= */}

            <Box
              sx={{
                position: "relative",
                width: "78%",
                height: "78%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "5px solid rgba(255,255,255,0.9)",
                backgroundColor: "rgba(255,255,255,0.1)",
                boxShadow:
                  "0 15px 45px rgba(0,0,0,0.3)",
              }}
            >
              <CardMedia
                component="img"
                image={pic}
                alt="Shoaib Yousaf"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;