
import Chart from 'react-google-charts';
import { useState, useEffect } from 'react';
import { Config } from '../../config';
import { Box, CircularProgress, Container, Typography } from '@mui/material';

interface EnergyData {
    consumption: number;
    production: number;
}

const energyConsumptionGoal = 100_000;

export default function DonutChart() {


    const options = {
        pieHole: 0.5,
        is3D: false,
        pieSliceText: "none",
        slices: {
            0: { color: "red" },
            1: { color: "lightgrey" },
        },
    };



    const [energyData, setEnergyData] = useState<EnergyData | null>(null);


    const apiEndpoint = Config.API_URL + 'energy/overall?';

    useEffect(() => {
        const fetchData = async () => {
            try {

                const currentTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

                const response = await fetch(apiEndpoint + new URLSearchParams({ timestamp: currentTimestamp }), {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data: EnergyData = await response.json();
                setEnergyData(data);
            } catch (error: any) {
                if (error instanceof TypeError && error.message.includes('NetworkError')) {
                    console.error('Network error:', error.message);
                } else {
                    console.error('Error fetching energy data:', error.message);
                }
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures that this effect runs once when the component mounts

    if (!energyData) {
        return (
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"}>
                <CircularProgress />
            </Box>
        );
    }

    const mockAdditionalConsumption = 100_000

    const consumedEnergy = Math.max(energyData?.consumption - energyData?.production + mockAdditionalConsumption, 0);
    const remainingGoalEnergy = Math.max(energyConsumptionGoal - consumedEnergy, 0);

    const data = [
        ["Task", "Energy Consumption"],
        ["Consumed", consumedEnergy],
        ["Remaining", remainingGoalEnergy]
    ];

    console.log(energyData)
    return (
        <Container>
            <Typography variant="h6" component="div" gutterBottom>
                Energy Consumption (Weekly Goal)
            </Typography>
            <Chart width={"100%"}
                chartType="PieChart"
                data={data}
                options={options}
            />
        </Container>
    )
}



