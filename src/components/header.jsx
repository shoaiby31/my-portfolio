import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material'
import DownloadIcon from '@mui/icons-material/CloudDownload';
import pic from '../assets/pic.png';
import LinkedInButton from './linkedinibutton';
import GitHubButton from './githubbutton';
function Header() {
    const skills = ['Shoaib Yousaf', 'Web Developer', 'Mobile Apps Developer', 'Apps Designer', 'Graphic Designer']; // Replace with your array of skills
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 3000); // Change skill every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    },);

    return (
        <Box paddingTop={10}>
            <Grid container spacing={1}>
                <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }} display={{ xs: "block", sm: 'block', md: 'none', lg: "none", xl: 'none' }}>
                    <Card sx={{ display: 'flex', justifyContent: 'center', paddingTop: 3 }} elevation={0}>
                        <Box sx={{ width: 290, height: 290, borderRadius: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, background: 'linear-gradient(50deg, #a729ff, #3b82f6) padding-box, linear-gradient(50deg, #a729ff, #3b82f6) border-box' }}>
                            <CardMedia component="img" image={pic} alt="Profile Picture"
                                sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>
                    </Card>

                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }} >
                    <Card elevation={0}>
                        <CardContent sx={{ paddingTop: 5, paddingX: { xs: 3, sm: 3, md: 5, lg: 5, xl: 5 } }}>
                            <Typography sx={{ fontWeight: 'bold', typography: { xs: 'h4', sm: 'h3', md: 'h3', lg: 'h3', xl: 'h1' }, color: 'text.secondary' }}>Hi there <span>👋</span> I'm {skills[currentSkillIndex]} </Typography>
                            <Typography textAlign={'justify'} variant="body1" sx={{ typography: { xs: 'body1', sm: 'button', md: 'caption', lg: 'body2', xl: 'h6' }, paddingTop: 3 }}>Building a successful product is a challenge. I bring expertise in user experience design, interfaces, web development, and AgriTech.</Typography>
                        </CardContent>
                        <CardActions sx={{ paddingX: 5, paddingTop: 2 }}>
                            <Button variant='contained' endIcon={<DownloadIcon sx={{ color: 'white' }} />} color='info' sx={{
                                borderRadius: 20, color:'white',
                                backgroundImage: 'linear-gradient(to top left,hsl(315, 93.80%, 44.30%),rgb(104, 70, 253))', textTransform: 'none'
                            }} size="large">Resume</Button>
                            <LinkedInButton />
                            <GitHubButton />
                        </CardActions>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} display={{ xs: "none", sm: 'none', md: 'block', lg: "block", xl: 'block' }}>
                    <Card sx={{ width: 290, height: 290, borderRadius: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, background: 'linear-gradient(50deg, #a729ff, #3b82f6) padding-box, linear-gradient(50deg, #a729ff, #3b82f6) border-box' }}>
                        <CardMedia component="img" image={pic} alt="Profile Picture"
                            sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header
