// InfrastructurePage.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const InfrastructurePage: React.FC = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            textAlign="center"
            padding={4}
        >
            <div>
                <Typography variant="h4" gutterBottom>
                    Smart Grids Infrastructure
                </Typography>
                <Typography variant="body1" paragraph>
                    The infrastructure of Smart Grids is a critical component that
                    integrates advanced technologies to enhance the efficiency and
                    reliability of electrical grids.
                </Typography>
                <Typography variant="body1" paragraph>
                    Key elements of Smart Grids infrastructure include smart meters,
                    sensors, communication networks, and control systems. These components
                    work together to enable real-time monitoring, automation, and
                    optimization of energy distribution.
                </Typography>
                <Typography variant="body1">
                    Explore the latest advancements in Smart Grids infrastructure to
                    ensure a resilient and sustainable energy future.
                </Typography>
            </div>
        </Box>
    );
};

export default InfrastructurePage;
