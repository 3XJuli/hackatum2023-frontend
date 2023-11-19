import { Grid, Typography } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";



export default function BarChart() {
    const data = [
        ["Device", "Consumption", "Production"],
        ["Smart Washing Machine", 32, 0],
        ["Tesla Car", 15, 0],
        ["Smart Lighting", .2, 0],
        ["Solar Panel", .3, 3.5],
    ];

    const options = {
        chartArea: { width: "70%" },
        hAxis: {
            title: "KWH",
            minValue: 0,
        },
        legend: "none",
        colors: ["#ff6969", "#8ACCDD"],
    };

    return (
        <Grid container direction={"column"} display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"} spacing={0}>
            <Grid item marginTop={2}>
                <Typography variant="h6" component="div" gutterBottom>
                    Consumption/Production per Device
                </Typography>
            </Grid>
            <Grid item>
                <Chart
                    chartType="BarChart"
                    width="100%"
                    height={"100%"}
                    data={data}
                    style={{ fontFamily: "Roboto" }}
                    options={options}
                />
            </Grid>
        </Grid >
    )
}
