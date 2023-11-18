import { Box, Container, Grid, Paper } from '@mui/material'
import React, { Component } from 'react'
import GrafanaDashboard from './GrafanaDashboard'
import DonutChart from './DonutChart'


export default class Home extends Component {
    render() {
        return (
            <Container>
                <Grid container spacing={5}>
                    <Grid item md={12}>
                        <Paper elevation={2}> <GrafanaDashboard></GrafanaDashboard> </Paper>
                    </Grid >
                    <Grid item md={6}>
                        <Paper elevation={2}><DonutChart /></Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Paper elevation={2}>Placeholder</Paper>
                    </Grid>
                </Grid >
            </ Container >
        )
    }
}
