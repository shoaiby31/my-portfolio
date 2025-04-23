import React from 'react';
import { Box, Typography, Grid, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const skills = [
    {
        icon: <CodeIcon fontSize="large" color="primary" />,
        title: 'Web App Development',
        description: 'Responsive web apps using React, HTML, CSS, JavaScript, & Firebase.',
    },
    {
        icon: <PhoneIphoneIcon fontSize="large" color="secondary" />,
        title: 'Mobile App Development',
        description: 'Cross-platform mobile apps with React Native and Firebase.',
    },
    {
        icon: <DesignServicesIcon fontSize="large" color="success" />,
        title: 'UI/UX Designing',
        description: 'User-focused UI/UX designs with Figma and modern design techniques.',
    },
    {
        icon: <CloudQueueIcon fontSize="large" color="error" />,
        title: 'Cloud Integration',
        description: 'Seamless backend integration with Firebase and cloud technologies.',
    },
];

const SkillCard = ({ icon, title, description }) => (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <Paper elevation={0} sx={{ p: 3, borderRadius: 4, height: '100%', textAlign: 'center', border: '1px solid' }}>
            <Box display="flex" flexDirection="column" alignItems="center">{icon}
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>{title}</Typography>
                <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>{description}</Typography>
            </Box>
        </Paper>
    </motion.div>
);

const Skills = () => {
    return (
        <Box id="skills" paddingX={{ xs: 2, sm: 2, md: 5, lg: 5, xl: 5 }}>
            <Divider />
            <Typography variant="h4" sx={{ fontWeight: 'bold', paddingY: 2 }}>My Skills</Typography>
            <Typography variant="subtitle1" mb={3}>
                Technologies I use to build and design beautiful apps
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                {skills.map((skill, index) => (
                    <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }} key={index}>
                        <SkillCard {...skill} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;