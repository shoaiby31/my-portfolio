import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A modern portfolio to showcase skills and projects built with ReactJS and Material UI.',
        image: 'https://via.placeholder.com/400x200.png?text=Portfolio',
        link: '#'
    },
    {
        title: 'E-commerce App',
        description: 'Full-stack e-commerce app with React, Firebase, and Node.js. Includes authentication and payment gateway.',
        image: 'https://via.placeholder.com/400x200.png?text=E-commerce',
        link: '#'
    },
    {
        title: 'Mobile Task Manager',
        description: 'Cross-platform mobile app built with React Native and Firebase for managing tasks efficiently.',
        image: 'https://via.placeholder.com/400x200.png?text=Task+Manager',
        link: '#'
    },
    {
        title: 'UI/UX Design Dashboard',
        description: 'A clean, interactive dashboard interface designed in Figma with attention to usability and aesthetics.',
        image: 'https://via.placeholder.com/400x200.png?text=Dashboard+Design',
        link: '#'
    },
    {
        title: 'UI/UX Design Dashboard',
        description: 'A clean, interactive dashboard interface designed in Figma with attention to usability and aesthetics.',
        image: 'https://via.placeholder.com/400x200.png?text=Dashboard+Design',
        link: '#'
    },
    {
        title: 'UI/UX Design Dashboard',
        description: 'A clean, interactive dashboard interface designed in Figma with attention to usability and aesthetics.',
        image: 'https://via.placeholder.com/400x200.png?text=Dashboard+Design',
        link: '#'
    }
];

const ProjectCard = ({ title, description, image, link }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
    >
        <Card elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border:'1px solid', }}>
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>{title}</Typography>
                <Typography variant="body2" color="text.secondary" paragraph>{description}</Typography>
                <Button variant="contained" size="small" href={link} target="_blank">
                    View Project
                </Button>
            </CardContent>
        </Card>
    </motion.div>
);

const Projects = () => {
    return (
        <Box id="projects" sx={{ py: 3, px: { sm: 3, md: 5 } }}>
            <Divider />
            <Typography variant="h4" sx={{ fontWeight: 'bold', paddingTop: 3 }}>My Projects</Typography>
            <Typography variant="subtitle1" color="text.secondary" mb={3}>
                A collection of my latest work, from web to mobile applications
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid size={{ xs: 12, sm: 12, md: 3 }} key={index}>
                        <ProjectCard {...project} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;