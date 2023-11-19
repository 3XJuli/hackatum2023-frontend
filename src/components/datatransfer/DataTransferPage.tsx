// DataTransferPage.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DataTransferPage: React.FC = () => {
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
                    Smart Grids Data Transfer
                </Typography>
                <Typography variant="body1" paragraph>
                    Efficient and secure data transfer is a fundamental aspect of Smart
                    Grids, enabling the seamless exchange of information for optimal
                    grid management and energy distribution.
                </Typography>
                <Typography variant="body1" paragraph>
                    Data transfer in Smart Grids involves the transmission of data from
                    smart meters, sensors, and other devices to control centers. Advanced
                    communication protocols and encryption techniques are employed to
                    safeguard data integrity and confidentiality.
                </Typography>
                <Typography variant="body1">
                    Learn more about the data transfer protocols and technologies that
                    underpin the reliability and security of Smart Grids.
                </Typography>
            </div>
        </Box>
    );
};

export default DataTransferPage;
