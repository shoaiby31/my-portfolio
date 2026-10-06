import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import BarChartIcon from "@mui/icons-material/BarChart";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import gif from "../assets/abc.gif";

const MotionBox = motion.create(Box);

const experiences = [
  {
    number: 1,
    icon: <SchoolIcon />,
    title: "Front-End Developer (Student)",
    place: "New-IOP, Mansehra, Pakistan",
    duration: "Sep 2016 - Jun 2020",
    description:
      "Worked as a student developer focusing on front-end technologies, developing small-scale web interfaces, improving programming skills, and gaining practical experience with software development and industry practices.",
  },
  {
    number: 2,
    icon: <CodeIcon />,
    title: "Full-Stack Web & Mobile App Developer",
    place: "New-IOP, Mansehra, Pakistan",
    duration: "Jul 2021 - Present",
    description:
      "Developed web and mobile applications using React, React Native, Firebase, Firestore, Node.js, and modern UI technologies. Worked on practical client projects and explored areas including cloud integration, business intelligence, Power BI, and AI-powered content creation.",
  },
];

const ExperienceCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -25 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    viewport={{ once: true }}
  >
    <Box
      sx={{
        position: "relative",
        pl: { xs: 6, md: 7 },
        pb: index === experiences.length - 1 ? 0 : 4,
      }}
    >
      {/* Timeline Line */}
      {index !== experiences.length - 1 && (
        <Box
          sx={{
            position: "absolute",
            left: { xs: 19, md: 23 },
            top: 48,
            bottom: 0,
            width: "2px",
            backgroundColor: "divider",
          }}
        />
      )}

      {/* Timeline Icon */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 },
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #a729ff, #3b82f6)",
          color: "#fff",
          zIndex: 1,
          boxShadow: "0 5px 18px rgba(59,130,246,0.2)",
          "& svg": {
            fontSize: { xs: 20, md: 24 },
          },
        }}
      >
        {item.icon}
      </Box>

      {/* Experience Content */}
      <Card
        elevation={0}
        sx={{
          borderRadius: 4,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
          transition: "all 0.3s ease",
          overflow: "hidden",
          position: "relative",

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "3px",
            height: "100%",
            background:
              "linear-gradient(180deg, #a729ff, #3b82f6)",
            transform: "scaleY(0)",
            transformOrigin: "top",
            transition: "transform 0.3s ease",
          },

          "&:hover": {
            transform: "translateX(5px)",
            borderColor: "primary.main",
            boxShadow: (theme) =>
              `0 12px 35px ${theme.palette.primary.main}15`,

            "&::before": {
              transform: "scaleY(1)",
            },
          },
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 1,
              mb: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {item.title}
            </Typography>

            {index === experiences.length - 1 && (
              <Chip
                label="Current"
                size="small"
                color="primary"
                sx={{
                  fontWeight: 600,
                }}
              />
            )}
          </Box>

          <Typography
            variant="body2"
            color="primary.main"
            sx={{
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            {item.place}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontStyle: "italic",
              mb: 2,
            }}
          >
            {item.duration}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.75,
            }}
          >
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </motion.div>
);

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        px: { xs: 2, sm: 3, md: 5, lg: 7 },
        py: { xs: 1, md: 1 },
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
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
            MY JOURNEY
          </Typography>

          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "2.2rem",
                md: "2.8rem",
              },
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            Experience
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            My professional journey from learning software development to
            building web and mobile applications and exploring data,
            artificial intelligence, and modern digital technologies.
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={{ xs: 5, md: 7 }} alignItems="center">
          {/* Experience Timeline */}
          <Grid size={{ xs: 12, md: 8 }}>
            {experiences.map((item, index) => (
              <ExperienceCard
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </Grid>

          {/* Visual */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              elevation={0}
              sx={{
                width: "100%",
                maxWidth: 400,
                borderRadius: 5,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
                p: 2,
              }}
            >
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, rgba(167,41,255,0.08), rgba(59,130,246,0.08))",
                }}
              >
                <CardMedia
                  component="img"
                  image={gif}
                  alt="Programming and development"
                  sx={{
                    width: "100%",
                    display: "block",
                    borderRadius: 4,
                  }}
                />
              </Box>

              {/* Technology Areas */}
              <Box sx={{ p: { xs: 1, md: 2 }, pt: 3 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Areas of Experience
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
                    label="Development"
                    size="small"
                    variant="outlined"
                  />

                  <Chip
                    icon={<BarChartIcon />}
                    label="Power BI"
                    size="small"
                    variant="outlined"
                  />

                  <Chip
                    icon={<AutoAwesomeIcon />}
                    label="AI"
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </MotionBox>
    </Box>
  );
};

export default Experience;