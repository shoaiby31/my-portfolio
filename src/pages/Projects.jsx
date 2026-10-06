import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Stack,
  Paper,
  CardMedia,
} from "@mui/material";

import {
  CodeRounded,
  WebRounded,
  BarChartRounded,
  AppsRounded,
  ArrowDownwardRounded,
} from "@mui/icons-material";

import pic from "../assets/pic.png";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FeaturedProject from "../components/FeaturedProject";

const Projects = () => {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const projectTypes = [
    ...new Set(projects.map((project) => project.type)),
  ];

  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        minHeight: "100vh",
        background: (theme) =>
          `linear-gradient(
            180deg,
            ${theme.palette.background.default} 0%,
            ${theme.palette.background.paper} 45%,
            ${theme.palette.background.default} 100%
          )`,
      }}
    >
      <Container maxWidth="xl">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: { xs: 4, md: 6 },
            px: { xs: 3, sm: 5, md: 7 },
            py: { xs: 5, md: 7 },
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
          {/* Decorative background circle */}
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

          {/* Second decorative circle */}
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

                <Chip
                  label="PORTFOLIO • SELECTED WORK"
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

                <Typography
                  component="h1"
                  fontWeight={800}
                  sx={{
                    fontSize: {
                      xs: "2.5rem",
                      sm: "3.3rem",
                      md: "4.4rem",
                    },
                    lineHeight: 1.05,
                    mb: 2.5,
                    letterSpacing: "-0.03em",
                  }}
                >
                  My Projects
                </Typography>

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
                  A collection of digital products, web applications,
                  SaaS solutions, and business intelligence projects
                  built to solve practical problems through technology
                  and data.
                </Typography>

                {/* Project Types */}
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

                {/* Outer Ring */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.25)",
                    transform: "rotate(15deg)",
                  }}
                />

                {/* Dashed Ring */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 12,
                    borderRadius: "50%",
                    border: "1px dashed rgba(255,255,255,0.22)",
                  }}
                />

                {/* Glow */}
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

                {/* Profile Image */}
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

        {/* =====================================================
            PROJECT STATISTICS
        ===================================================== */}
        <Grid
          container
          spacing={2}
          sx={{
            mb: {
              xs: 7,
              md: 10,
            },
          }}
        >

          {/* Projects */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    "0 12px 30px rgba(0,0,0,0.08)",
                },
              }}
            >
              <CodeRounded
                sx={{
                  fontSize: 32,
                  color: "primary.main",
                  mb: 1,
                }}
              />

              <Typography variant="h4" fontWeight={800}>
                {projects.length}
              </Typography>

              <Typography color="text.secondary">
                Projects
              </Typography>
            </Paper>
          </Grid>

          {/* SaaS */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    "0 12px 30px rgba(0,0,0,0.08)",
                },
              }}
            >
              <AppsRounded
                sx={{
                  fontSize: 32,
                  color: "primary.main",
                  mb: 1,
                }}
              />

              <Typography variant="h4" fontWeight={800}>
                {
                  projects.filter(
                    (project) =>
                      project.type === "SaaS"
                  ).length
                }
              </Typography>

              <Typography color="text.secondary">
                SaaS Products
              </Typography>
            </Paper>
          </Grid>

          {/* Web Apps */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    "0 12px 30px rgba(0,0,0,0.08)",
                },
              }}
            >
              <WebRounded
                sx={{
                  fontSize: 32,
                  color: "primary.main",
                  mb: 1,
                }}
              />

              <Typography variant="h4" fontWeight={800}>
                {
                  projects.filter(
                    (project) =>
                      project.type === "Web App"
                  ).length
                }
              </Typography>

              <Typography color="text.secondary">
                Web Applications
              </Typography>
            </Paper>
          </Grid>

          {/* BI */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    "0 12px 30px rgba(0,0,0,0.08)",
                },
              }}
            >
              <BarChartRounded
                sx={{
                  fontSize: 32,
                  color: "primary.main",
                  mb: 1,
                }}
              />

              <Typography variant="h4" fontWeight={800}>
                {
                  projects.filter(
                    (project) =>
                      project.type ===
                      "Business Intelligence"
                  ).length
                }
              </Typography>

              <Typography color="text.secondary">
                BI Projects
              </Typography>
            </Paper>
          </Grid>

        </Grid>

        {/* =====================================================
            WHAT I BUILD
        ===================================================== */}
        <Box
          sx={{
            mb: {
              xs: 7,
              md: 10,
            },
          }}
        >
          <Box
            sx={{
              maxWidth: 720,
              mb: 4,
            }}
          >
            <Typography
              variant="overline"
              color="primary"
              fontWeight={700}
              letterSpacing="0.12em"
            >
              WHAT I BUILD
            </Typography>

            <Typography
              variant="h4"
              component="h2"
              fontWeight={800}
              sx={{
                mt: 0.5,
                mb: 1.5,
              }}
            >
              From ideas to practical solutions
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
              }}
            >
              My projects combine software development,
              product thinking, and data-driven problem
              solving. Each project focuses on building
              something useful, understandable, and scalable.
            </Typography>
          </Box>

          <Grid container spacing={3}>

            {/* Software Development */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow:
                      "0 12px 30px rgba(0,0,0,0.07)",
                  },
                }}
              >
                <CodeRounded
                  sx={{
                    fontSize: 34,
                    color: "primary.main",
                    mb: 2,
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={700}
                  mb={1}
                >
                  Software Development
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
                  }}
                >
                  Building modern web applications
                  with clean interfaces, reusable
                  components, and scalable architecture.
                </Typography>
              </Paper>
            </Grid>

            {/* Product Development */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow:
                      "0 12px 30px rgba(0,0,0,0.07)",
                  },
                }}
              >
                <AppsRounded
                  sx={{
                    fontSize: 34,
                    color: "primary.main",
                    mb: 2,
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={700}
                  mb={1}
                >
                  Product Development
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
                  }}
                >
                  Turning ideas into usable products by
                  focusing on real-world requirements,
                  user experience, and functionality.
                </Typography>
              </Paper>
            </Grid>

            {/* Data & BI */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow:
                      "0 12px 30px rgba(0,0,0,0.07)",
                  },
                }}
              >
                <BarChartRounded
                  sx={{
                    fontSize: 34,
                    color: "primary.main",
                    mb: 2,
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={700}
                  mb={1}
                >
                  Data & Business Intelligence
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
                  }}
                >
                  Transforming complex datasets into
                  dashboards and insights that can support
                  better business and operational decisions.
                </Typography>
              </Paper>
            </Grid>

          </Grid>
        </Box>

        {/* =====================================================
            FEATURED PROJECT
        ===================================================== */}
        {featuredProject && (
          <Box
            sx={{
              mb: {
                xs: 8,
                md: 11,
              },
            }}
          >
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              justifyContent="space-between"
              alignItems={{
                xs: "flex-start",
                sm: "flex-end",
              }}
              sx={{
                mb: 3,
              }}
            >
              <Box>
                <Typography
                  variant="overline"
                  color="primary"
                  fontWeight={700}
                  letterSpacing="0.12em"
                >
                  HIGHLIGHTED WORK
                </Typography>

                <Typography
                  variant="h4"
                  component="h2"
                  fontWeight={800}
                >
                  Featured Project
                </Typography>
              </Box>

              <ArrowDownwardRounded
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                  color: "text.secondary",
                  transform: "rotate(-45deg)",
                }}
              />
            </Stack>

            <FeaturedProject project={featuredProject} />
          </Box>
        )}

        {/* =====================================================
            OTHER PROJECTS
        ===================================================== */}
        {otherProjects.length > 0 && (
          <Box>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="overline"
                color="primary"
                fontWeight={700}
                letterSpacing="0.12em"
              >
                MORE WORK
              </Typography>

              <Typography
                variant="h4"
                component="h2"
                fontWeight={800}
                sx={{ mb: 1 }}
              >
                Other Projects
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  maxWidth: 650,
                  lineHeight: 1.7,
                }}
              >
                Explore more applications and experiments
                covering web development, utilities, and
                business intelligence.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {otherProjects.map((project) => (
                <Grid
                  key={project.id}
                  size={{ xs: 12, md: 6 }}
                >
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

      </Container>
    </Box>
  );
};

export default Projects;