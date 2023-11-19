import { Box, Container, Grid, Paper, useMediaQuery, useTheme } from '@mui/material'

import GrafanaDashboard from './GrafanaDashboard'
import DonutChart from './DonutChart'
import BarChart from './BarChart';

export default function Dashboard() {

    const theme = useTheme();

    const matchDownMd = useMediaQuery(theme.breakpoints.up('md'));


    return (
        <Container>
            <Grid container spacing={5} direction={matchDownMd ? "row" : "column"} width={"100%"} height="auto" alignItems="center" justifyContent="center" >
                <Grid item md={12} width={"80vw"}>
                    <Paper elevation={2}>
                        <Box>
                            <GrafanaDashboard></GrafanaDashboard>
                        </Box>
                    </Paper>
                </Grid >
                <Grid item md={6} xs={12} width={"100%"} height={'500'}>
                    <Paper elevation={2}><DonutChart /></Paper>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Paper elevation={2}><BarChart /></Paper>
                </Grid>
            </Grid >
        </ Container >
    )
}
