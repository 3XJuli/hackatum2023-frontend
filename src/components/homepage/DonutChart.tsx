import { Container, Typography } from '@mui/material';
import React, { Component } from 'react'
import Chart from 'react-google-charts';


export const data = [
    ["Task", "Energy Consumption"],
    ["Consumed", 300 / 2000],
    ["Remaining", 1600 / 2000]
];

export const options = {
    pieHole: 0.5,
    is3D: false,
    pieSliceText: "none",
    legend: "none",
    slices: {
        0: { color: "red" },
        1: { color: "lightgrey" },
    },
};

export default class DonutChart extends Component {
    render() {
        return (
            <Container>
                <Typography variant="h6" component="div" gutterBottom>
                    Energy Consumption (Weekly Goal)
                </Typography>
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                />
            </Container>
        )
    }
}



