import React from "react";
import skills from "../assets/skills.gif";

import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Divider,
  Chip,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";

const Aboutme = () => {
  return (
    <Box
      id="about"
      sx={{
        px: { xs: 2, sm: 3, md: 5, lg: 7 },
        py: { xs: 7, md: 10 },
      }}
    >
      {/* Section Header */}
      <Box sx={{ mb: { xs: 5, md: 7 } }}>
        <Typography
          component="p"
          sx={{
            display: "inline-flex",
            px: 2,
            py: 0.8,
            mb: 2,
            borderRadius: 10,
            backgroundColor: "action.hover",
            color: "primary.main",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          GET TO KNOW ME
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: {
              xs: "2.2rem",
              md: "3.2rem",
            },
            lineHeight: 1.15,
            mb: 2,
          }}
        >
          About Me
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: 760,
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          A creative technology professional passionate about building
          digital products, designing experiences, working with data, and
          exploring the possibilities of artificial intelligence.
        </Typography>
      </Box>

      {/* Main About Content */}
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        {/* Image */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            elevation={0}
            sx={{
              maxWidth: 450,
              mx: "auto",
              borderRadius: 5,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              position: "relative",
            }}
          >
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                background:
                  "linear-gradient(135deg, rgba(167,41,255,0.08), rgba(59,130,246,0.08))",
              }}
            >
              <CardMedia
                component="img"
                image={skills}
                alt="Shoaib Yousaf skills"
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  display: "block",
                }}
              />
            </Box>
          </Card>
        </Grid>

        {/* Content */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Card
            elevation={0}
            sx={{
              backgroundColor: "transparent",
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.9,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  mb: 4,
                }}
              >
                Hi, I’m <strong>Shoaib Yousaf</strong>, a dedicated and
                creative technology professional with a strong interest in
                building practical digital solutions. My experience spans
                web development, mobile application development, UI/UX
                design, cloud technologies, business intelligence, and
                AI-powered content creation.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.9,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  mb: 4,
                }}
              >
                I work with technologies such as React, React Native,
                JavaScript, Firebase, Firestore, and Figma to create
                responsive and user-friendly applications. I also work with
                Power BI to transform data into interactive dashboards and
                actionable insights, while exploring generative AI tools to
                create engaging visual and video content.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.9,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  mb: 4,
                }}
              >
                I enjoy learning new technologies and combining different
                areas of technology to solve real-world problems. Whether
                I’m developing an application, designing an interface,
                analyzing data, or creating AI-generated content, I focus on
                delivering useful, clean, and meaningful results.
              </Typography>

              {/* Areas of Expertise */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Areas I Work In
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Chip
                    icon={<CodeIcon />}
                    label="Web Development"
                    variant="outlined"
                  />

                  <Chip
                    icon={<PhoneIphoneIcon />}
                    label="Mobile Development"
                    variant="outlined"
                  />

                  <Chip
                    icon={<DesignServicesIcon />}
                    label="UI/UX Design"
                    variant="outlined"
                  />

                  <Chip
                    icon={<BarChartIcon />}
                    label="Power BI"
                    variant="outlined"
                  />

                  <Chip
                    icon={<AutoAwesomeIcon />}
                    label="AI Video Production"
                    variant="outlined"
                  />
                </Box>
              </Box>

              {/* Education */}
              <Divider sx={{ mb: 3 }} />

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <SchoolIcon color="primary" />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Education
                  </Typography>
                </Box>

                <Box sx={{ mb: 2.5 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    Bachelor of Science in Computer Science
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    Hazara University Dhodial, Mansehra
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic", mt: 0.3 }}
                  >
                    Year of Passing: 2020
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    Diploma of Associate Engineering (DAE) in Computer
                    Information Technology
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    Government College of Technology, Attock
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic", mt: 0.3 }}
                  >
                    Year of Passing: 2016
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aboutme;