import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import webpic from '../assets/webdevelopment.png'
import mobilepic from '../assets/mobiledevelopment.svg'
import figmapic from '../assets/figmadesign.png'



const serviceItems = [
    {
        id: 1,
        pic: webpic,
        title: 'Web Apps Development',
        description: "I design and develop responsive, user-friendly web apps using modern tools like HTML, CSS, JavaScript, and React. Focused on clean UI/UX, performance, and scalability."
    },
    {
        id: 2,
        pic: mobilepic,
        title: 'Mobile Apps Development',
        description: "I build cross-platform mobile apps with smooth performance and clean UI using React Native and React Native Paper, backed by Firebase for authentication, database, and storage."
    },
    {
        id: 3,
        pic: figmapic,
        title: 'UI/UX Designing',
        description: "I design intuitive and user-friendly interfaces using Figma, focusing on clean layouts, smooth experiences, modern design trends, and cross-platform compatibility for both web and mobile apps."
    },
]
function Services() {
    return (
        <Box id='services' sx={{ paddingX: { xs: 2, sm: 2, md: 5, lg: 5, xl: 5 } }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', paddingY: 2 }}>My Services</Typography>
            <Grid container spacing={3} >
                {serviceItems.map((item, key) => (
                    <Grid key={key} size={{ sm: 12, md: 4 }} sx={{ display: 'flex', }}>
                        <Card sx={{ borderWidth: 1, borderColor: 'inherit', borderStyle: 'solid', borderRadius: 3, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <CardMedia component="img" image={item.pic} sx={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '300px', borderRadius: 3, padding: 5 }} alt='web development'></CardMedia>
                            <CardContent>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                                <Typography variant='subtitle2' sx={{ pt: 1, }}>{item.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Services
