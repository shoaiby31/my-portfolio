import React from 'react';
import skills from '../assets/skills.gif'
import { Box, Typography, Card, CardMedia, CardContent, Grid, Divider } from '@mui/material';

const Aboutme = () => {
  return (
    <Box id='about'>
      <Box paddingX={{xs: 2, md:5}}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>About Me</Typography>
      </Box>
      <Grid container spacing={0} sx={{ paddingX: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} >
          <Card sx={{ maxWidth: 400, margin: 'auto' }} elevation={0}>
            <CardMedia component="img" height="100%" sx={{ borderRadius: 3 }} image={skills} alt="Animated GIF" />
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }} >
          <Card elevation={0}>
            <CardContent sx={{ paddingX: { xs: 0, sm: 0, md: 2, lg: 2, xl: 2 }, paddingY: { xs: 2, sm: 2, md: 0, lg: 0, xl: 0 } }}>
              <Typography variant="body1" textAlign={'justify'} component="div" align="center">
                Hi, I’m Shoaib Yousaf, a dedicated and creative tech professional with a strong background in web development, Android app development, application security, and graphic design.
                My technical expertise includes React.js, React Native, Firebase, and Figma for UI/UX design. I also have hands-on experience with Node.js and enjoy working on full-stack projects that bring ideas to life.
                I’m passionate about building responsive, user-friendly applications and always stay curious about new technologies and design trends. Whether it’s crafting seamless front-end experiences or integrating powerful back-end services, I approach every project with focus and enthusiasm.
                Let’s turn ideas into impactful digital solutions!
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Divider />
                <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>🎓 Education</Typography>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    Bachelor of Science in Computer Science
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    Hazara University Dhodial, Mansehra
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    Year of Passing: 2020
                  </Typography>
                </Box>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    Diploma of Associate Engineering (DAE) in Computer Information Technology
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    Government College of Technology, Attock
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    Year of Passing: 2016
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aboutme;