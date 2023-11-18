import { Box } from '@mui/material'
import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        return (
            <Box
                display="flex"
                width="100%" height={80}
                bgcolor="lightgreen"
                alignItems="center"
                justifyContent="center"
            >
                Home
            </ Box>
        )
    }
}
