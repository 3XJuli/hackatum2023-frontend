import React, { useState, useEffect } from 'react';
import { Config } from '../../config';

interface EnergyData {
    consumption: number;
    production: number;
}

const EnergyDataComponent: React.FC = () => {
    const [energyData, setEnergyData] = useState<EnergyData | null>(null);





    const apiEndpoint = Config.API_URL + 'energy/overall?';

    useEffect(() => {
        const fetchData = async () => {
            try {

                const currentTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

                console.log(currentTimestamp)

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

    return (
        <div>
            <h2>Energy Data</h2>
            {energyData ? (
                <div>
                    <p>Consumption: {energyData.consumption}</p>
                    <p>Production: {energyData.production}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EnergyDataComponent;