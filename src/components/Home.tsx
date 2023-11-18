import { Box, Container, Grid, Paper } from '@mui/material'
import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        return (
            <Container>
                <Grid container spacing={5}>
                    <Grid item md={12}>
                        <Paper elevation={2}>test</Paper>
                    </Grid >
                    <Grid item md={6}>
                        <Paper elevation={2}>test</Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Paper elevation={2}>test</Paper>
                    </Grid>
                </Grid >
            </ Container >
        )
    }
}
