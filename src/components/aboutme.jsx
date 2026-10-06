import React from "react";
import skills from "../assets/skills.gif";

import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Chip,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";

const Aboutme = () => {
  const education = [
    {
      title: "Business Intelligence and Analytics (Power BI)",
      institution:
        "Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology",
      result: "Percentage: 92%",
    },
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Hazara University Dhodial, Mansehra",
      result: "CGPA: 3.67/4.00",
    },
    {
      title: "Diploma of Associate Engineering (DAE) in Computer Information Technology",
      institution: "Government College of Technology, Attock",
      result: "Percentage: 80%",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        px: { xs: 2, sm: 3, md: 5, lg: 7 },
        py: { xs: 7, md: 5 },
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
          variant="h4"
          component="h4"
          sx={{
            fontWeight: 800,
            fontSize: {
              xs: "2.2rem",
              md: "2.9rem",
            },
            lineHeight: 1.15,
            mb: 2,
          }}
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          A creative technology professional passionate about building
          digital products, designing experiences, working with data, and
          exploring the possibilities of artificial intelligence.
        </Typography>
      </Box>

      {/* Main About Section */}
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
      >
        {/* Image */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            elevation={0}
            sx={{
              maxWidth: 500,
              mx: "auto",
              borderRadius: 5,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
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

        {/* About Content */}
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
                  mb: 3,
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
                  mb: 3,
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
              <Box>
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
            </CardContent>
          </Card>
        </Grid>

        {/* Education - Full Width */}
        <Grid size={{ xs: 12 }}>
          <Box sx={{ mt: { xs: 2, md: 1 } }}>

            {/* Education Heading */}
            <Box sx={{ mb: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  mb: 1,
                }}
              >
                <SchoolIcon color="primary" sx={{ fontSize: 30 }} />

                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: {
                      xs: "1.8rem",
                      md: "2.2rem",
                    },
                  }}
                >
                  Education
                </Typography>
              </Box>

              <Typography
                color="text.secondary"
                sx={{
                  lineHeight: 1.7,
                }}
              >
                My academic background combines computer science with
                business intelligence and information technology.
              </Typography>
            </Box>

            {/* Education Cards */}
            <Grid container spacing={3}>
              {education.map((item, index) => (
                <Grid
                  key={item.title}
                  size={{
                    xs: 12,
                    md: 4,
                  }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      p: { xs: 2.5, md: 3 },
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: "divider",
                      backgroundColor: "background.paper",
                      transition:
                        "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                        backgroundColor: "action.hover",
                        color: "primary.main",
                        fontWeight: 700,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        lineHeight: 1.4,
                        mb: 1.5,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
                        mb: 2,
                      }}
                    >
                      {item.institution}
                    </Typography>

                    <Chip
                      label={item.result}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aboutme;