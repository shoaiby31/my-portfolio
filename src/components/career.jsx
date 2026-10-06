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
        py: { xs: 3, md: 5 },
      }}
    >
      <Box
        sx={{
          borderRadius: { xs: 4, md: 5 },
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Gradient Accent */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "3px",
            background:
              "linear-gradient(90deg, #a729ff, #3b82f6)",
          }}
        />

        <Grid container>
          {careerStats.map((stat, index) => (
            <Grid
              key={stat.label}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                borderRight: {
                  xs: "none",
                  sm: index % 2 === 0 ? "1px solid" : "none",
                  md: index !== careerStats.length - 1 ? "1px solid" : "none",
                },
                borderBottom: {
                  xs: index !== careerStats.length - 1 ? "1px solid" : "none",
                  sm: index < 2 ? "1px solid" : "none",
                  md: "none",
                },
                borderColor: "divider",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    minHeight: { xs: 125, md: 145 },
                    p: { xs: 2.5, md: 3 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    transition: "all 0.3s ease",

                    "&:hover": {
                      backgroundColor: "action.hover",

                      "& .stat-icon": {
                        transform: "scale(1.08)",
                      },
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    className="stat-icon"
                    sx={{
                      width: 48,
                      height: 48,
                      minWidth: 48,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg, rgba(167,41,255,0.12), rgba(59,130,246,0.12))",
                      color: "primary.main",
                      transition: "transform 0.3s ease",

                      "& svg": {
                        fontSize: 25,
                      },
                    }}
                  >
                    {stat.icon}
                  </Box>

                  {/* Number & Label */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "2rem",
                          md: "2.3rem",
                        },
                        lineHeight: 1,
                        fontWeight: 800,
                        background:
                          "linear-gradient(90deg, #a729ff, #3b82f6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 0.8,
                      }}
                    >
                      {stat.number}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Career;