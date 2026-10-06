import React from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const FeaturedProject = ({ project }) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.15fr 1fr",
          },
        }}
      >
        {/* Project Screenshot */}
        <Box
          sx={{
            minHeight: {
              xs: 260,
              md: 500,
            },
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={`${project.title} screenshot`}
            sx={{
              width: "100%",
              height: "100%",
              minHeight: {
                xs: 260,
                md: 500,
              },
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>

        {/* Project Information */}
        <Box
          sx={{
            p: {
              xs: 3,
              sm: 4,
              md: 5,
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Badges */}
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Chip
              label={project.type}
              color="primary"
              size="small"
            />

            <Chip
              label={project.status}
              color="warning"
              size="small"
            />
          </Stack>

          {/* Title */}
          <Typography
            variant="h3"
            component="h2"
            fontWeight={800}
            sx={{
              fontSize: {
                xs: "2rem",
                md: "2.7rem",
              },
              mb: 2,
            }}
          >
            {project.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            {project.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Technologies */}
          <Typography
            variant="subtitle2"
            fontWeight={700}
            sx={{ mb: 1.5 }}
          >
            Technologies
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            sx={{ mb: 4 }}
          >
            {project.technologies.map((technology) => (
              <Chip
                key={technology}
                label={technology}
                size="small"
                variant="outlined"
              />
            ))}
          </Stack>

          {/* Actions */}
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={1.5}
          >
            {project.liveUrl !== "#" && (
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            )}

            {project.githubUrl !== "#" && (
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </Button>
            )}
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};

export default FeaturedProject;