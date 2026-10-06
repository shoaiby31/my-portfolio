import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

import webpic from "../assets/webdevelopment.png";
import mobilepic from "../assets/mobiledevelopment.svg";
import figmapic from "../assets/figmadesign.png";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BarChartIcon from "@mui/icons-material/BarChart";

const serviceItems = [
  {
    id: 1,
    pic: webpic,
    title: "Web App Development",
    description:
      "I design and develop responsive, user-friendly web applications using modern technologies such as React, JavaScript, HTML, CSS, and Firebase. I focus on clean interfaces, performance, scalability, and maintainable code.",
  },
  {
    id: 2,
    pic: mobilepic,
    title: "Mobile App Development",
    description:
      "I build cross-platform mobile applications using React Native with clean interfaces and smooth performance. Firebase provides authentication, database, storage, and other backend services.",
  },
  {
    id: 3,
    pic: figmapic,
    title: "UI/UX Designing",
    description:
      "I create intuitive and user-focused interfaces using Figma, combining clean layouts, modern design principles, responsive experiences, and usability across web and mobile platforms.",
  },
  {
    id: 4,
    icon: <AutoAwesomeIcon />,
    title: "AI Video Production",
    description:
      "I create cinematic AI-generated videos using modern AI tools, combining storytelling, image generation, video generation, voice cloning, and carefully crafted prompts to produce engaging visual content.",
  },
  {
    id: 5,
    icon: <BarChartIcon />,
    title: "Business Intelligence & Power BI",
    description:
      "I transform complex data into interactive Power BI dashboards and meaningful insights, helping organizations understand performance, identify trends, and support data-driven decision-making.",
  },
];

const ServiceCard = ({ pic, icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    style={{ height: "100%" }}
  >
    <Card
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s ease",

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
          transform: "translateY(-8px)",
          borderColor: "primary.main",
          boxShadow: (theme) =>
            `0 15px 40px ${theme.palette.primary.main}18`,

          "&::before": {
            transform: "scaleX(1)",
          },

          "& .service-image": {
            transform: "scale(1.05)",
          },

          "& .service-icon": {
            transform: "scale(1.08) rotate(-3deg)",
          },
        },
      }}
    >
      {/* Visual Area */}
      <Box
        sx={{
          height: { xs: 210, md: 230 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(167,41,255,0.06), rgba(59,130,246,0.06))",
          overflow: "hidden",
        }}
      >
        {pic ? (
          <CardMedia
            component="img"
            image={pic}
            alt={title}
            className="service-image"
            sx={{
              width: "auto",
              maxWidth: "75%",
              height: "170px",
              objectFit: "contain",
              transition: "transform 0.3s ease",
            }}
          />
        ) : (
          <Box
            className="service-icon"
            sx={{
              width: 90,
              height: 90,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, rgba(167,41,255,0.15), rgba(59,130,246,0.15))",
              color: "primary.main",
              transition: "transform 0.3s ease",
              "& svg": {
                fontSize: 50,
              },
            }}
          >
            {icon}
          </Box>
        )}
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          p: { xs: 3, md: 3.5 },
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1.5,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.75,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

function Services() {
  return (
    <Box
      id="services"
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
          WHAT I DO
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
          My Services
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          I help turn ideas into practical digital products through
          development, design, artificial intelligence, and data-driven
          solutions.
        </Typography>
      </Box>

      {/* Service Cards */}
      <Grid container spacing={3}>
        {serviceItems.map((item, index) => (
          <Grid
            key={item.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            sx={{ display: "flex" }}
          >
            <ServiceCard {...item} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;