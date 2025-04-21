import React from 'react';
import { Box, Typography, Divider, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import gif from '../assets/abc.gif'
const MotionBox = motion.create(Box);
const experiences = [
  {
    number: 1,
    title: 'Front-End Developer (Student)',
    place: 'New-IOP, Mansehra, Pakistan',
    duration: 'Sep 2016 - Jun 2020',
    description:
      'Worked as a student developer focusing on front-end technologies, developing small-scale web interfaces, and learning industry practices.'
  },
  {
    number: 2,
    title: 'Full-Stack Web & Mobile App Developer',
    place: 'New-IOP, Mansehra, Pakistan',
    duration: 'Jul 2020 - Present',
    description:
      'Developed scalable web and mobile applications using React.js, React Native, Firebase, Node.js, and other modern technologies for various clients.'
  }
];

const Experience = () => {
  return (
    <Box id='experience'>
      <MotionBox initial={{ opacity: 0, rotateX: -90 }} whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true }} sx={{ mt: 6, perspective: 1000 }}>
        <Box paddingX={{ xs: 3, md: 5 }} paddingBottom={{xs: 1, md: 2}}>
          <Divider />
        </Box>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
            <Card elevation={0}>
              <CardContent sx={{ paddingX: { xs: 3, sm: 3, md: 5, lg: 5, xl: 5 } }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>My Experience 💼</Typography>

              </CardContent>
              {experiences.map((item, key) => (
                <CardContent key={key} sx={{ paddingX: { xs: 3, sm: 3, md: 5, lg: 5, xl: 5 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {item.number}. {item.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                    {item.place}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
                    {item.duration}
                  </Typography>
                  <Typography variant="body1">
                    {item.description}
                  </Typography>
                  <Divider sx={{ mt: 3 }} />
                </CardContent>

              ))}

            </Card>

          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} display="flex" justifyContent="center" alignItems="center">
            <Card elevation={0}>
              <CardMedia component="img"
                sx={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: { sm: '100%', md: '90%' }, borderRadius: 3 }}
                image={gif} alt="Programming Gif">
              </CardMedia>
            </Card>
          </Grid>
        </Grid>
      </MotionBox>
    </Box>
  );
};

export default Experience;