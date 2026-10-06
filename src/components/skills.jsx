import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import BarChartIcon from "@mui/icons-material/BarChart";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const skills = [
  {
    icon: <CodeIcon />,
    title: "Web App Development",
    description:
      "Responsive and scalable web applications using React, JavaScript, HTML, CSS, Firebase, and modern UI frameworks.",
  },
  {
    icon: <PhoneIphoneIcon />,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using React Native and Firebase with a focus on usability and performance.",
  },
  {
    icon: <DesignServicesIcon />,
    title: "UI/UX Designing",
    description:
      "Clean, user-focused interfaces and experiences using Figma, modern design principles, and responsive layouts.",
  },
  {
    icon: <CloudQueueIcon />,
    title: "Cloud Integration",
    description:
      "Cloud-based application development and backend integration using Firebase, Firestore, authentication, and cloud services.",
  },
  {
    icon: <BarChartIcon />,
    title: "Business Intelligence & Power BI",
    description:
      "Interactive Power BI dashboards that transform data into meaningful insights for reporting, analysis, and data-driven decision-making.",
  },
  {
    icon: <AutoAwesomeIcon />,
    title: "AI Video Production",
    description:
      "AI-powered video creation using generative AI tools for storytelling, image generation, video generation, voice cloning, and cinematic visual content.",
  },
];

const SkillCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    viewport={{ once: true }}
    style={{ height: "100%" }}
  >
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        p: { xs: 3, md: 3.5 },
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "3px",
          background:
            "linear-gradient(90deg, #a729ff, #3b82f6)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease",
        },

        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "primary.main",
          boxShadow: (theme) =>
            `0 12px 35px ${theme.palette.primary.main}18`,

          "&::before": {
            transform: "scaleX(1)",
          },

          "& .skill-icon": {
            transform: "scale(1.08) rotate(-3deg)",
          },
        },
      }}
    >
      <Box
        sx={{
          width: 58,
          height: 58,
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(167,41,255,0.12), rgba(59,130,246,0.12))",
          color: "primary.main",
          mb: 2.5,
        }}
      >
        <Box
          className="skill-icon"
          sx={{
            display: "flex",
            transition: "transform 0.3s ease",
            "& svg": {
              fontSize: 30,
            },
          }}
        >
          {icon}
        </Box>
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 1.2,
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          lineHeight: 1.7,
        }}
      >
        {description}
      </Typography>
    </Paper>
  </motion.div>
);

const Skills = () => {
  return (
    <Box
      id="skills"
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
          MY EXPERTISE
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
          Skills & Expertise
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          A combination of software development, design, cloud technologies,
          artificial intelligence, and business intelligence that I use to
          build practical digital solutions.
        </Typography>
      </Box>

      {/* Skills */}
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid
            key={skill.title}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <SkillCard {...skill} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;