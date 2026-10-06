import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import GitHubIcon from "@mui/icons-material/GitHub";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const careerStats = [
  {
    number: "5+",
    label: "Years of Experience",
    icon: <WorkHistoryIcon />,
  },
  {
    number: "5+",
    label: "GitHub Repositories",
    icon: <GitHubIcon />,
  },
  {
    number: "50+",
    label: "GitHub Contributions",
    icon: <TrendingUpIcon />,
  },
  {
    number: "30+",
    label: "Fiverr Projects",
    icon: <DesignServicesIcon />,
  },
];

const Career = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 5, lg: 7 },
        py: { xs: 1 },
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: 1200,
          mx: "auto",
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        {careerStats.map((stat, index) => (
          <Grid
            key={stat.label}
            size={{ xs: 6, md: 3 }}
            sx={{
              borderRight: {
                xs: index % 2 === 0 ? "1px solid" : "none",
                md:
                  index !== careerStats.length - 1
                    ? "1px solid"
                    : "none",
              },
              borderBottom: {
                xs: index < 2 ? "1px solid" : "none",
                md: "none",
              },
              borderColor: "divider",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  minHeight: { xs: 125, sm: 140, md: 155 },
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 3, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  transition: "background-color 0.25s ease",

                  "&:hover": {
                    backgroundColor: "action.hover",

                    "& .career-icon": {
                      color: "primary.main",
                      transform: "translateY(-3px)",
                    },
                  },
                }}
              >
                {/* Icon */}
                <Box
                  className="career-icon"
                  sx={{
                    mb: 1.5,
                    color: "text.secondary",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition:
                      "color 0.25s ease, transform 0.25s ease",

                    "& svg": {
                      fontSize: { xs: 22, md: 25 },
                    },
                  }}
                >
                  {stat.icon}
                </Box>

                {/* Number */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.25rem",
                      md: "2.6rem",
                    },
                    lineHeight: 1,
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    mb: 1,
                  }}
                >
                  {stat.number}
                </Typography>

                {/* Label */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: {
                      xs: "0.75rem",
                      sm: "0.85rem",
                    },
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Career;