import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Career() {
    return (
        <Box padding={{ xs:3, sm:3, md:5, lg:5, xl:5}}>
            <Grid container spacing={0} sx={{ borderRadius:3, borderWidth: '1px', borderStyle: 'solid', borderColor: 'text.secondary' }}>
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 3 }}>
                        <Typography variant="h3" sx={{ marginRight: 1 }}>5+</Typography>
                        <Typography variant="body1">years of experience</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 3 }}>
                        <Typography variant="h3" sx={{ marginRight: 1 }}>10+</Typography>
                        <Typography variant="body1">Github Repositories</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 3 }}>
                        <Typography variant="h3" sx={{ marginRight: 1 }}>50+</Typography>
                        <Typography variant="body1">Github Contributions</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 3 }}>
                        <Typography variant="h3" sx={{ marginRight: 1 }}>30+</Typography>
                        <Typography variant="body1">Fiverr Projects</Typography>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Career
