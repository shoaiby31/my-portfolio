import React from "react";
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Project Screenshot */}
      <Box
        component="img"
        src={project.image}
        alt={`${project.title} screenshot`}
        sx={{
          width: "100%",
          height: 220,
          objectFit: "cover",
          display: "block",
        }}
      />

      <CardContent
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* Project Type & Status */}
        <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
          <Chip
            label={project.type}
            size="small"
            variant="outlined"
          />

          <Chip
            label={project.status}
            size="small"
            color={project.status === "In Development" ? "warning" : "success"}
          />
        </Stack>

        {/* Title */}
        <Typography
          variant="h5"
          component="h2"
          fontWeight={700}
          sx={{ mb: 1.5 }}
        >
          {project.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            mb: 2.5,
          }}
        >
          {project.description}
        </Typography>

        {/* Technologies */}
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          sx={{ mb: 3 }}
        >
          {project.technologies.map((technology) => (
            <Chip
              key={technology}
              label={technology}
              size="small"
            />
          ))}
        </Stack>

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={1.5}
          sx={{ mt: "auto" }}
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
              GitHub
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;