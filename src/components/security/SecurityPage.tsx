// SecurityPage.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SecurityPage: React.FC = () => {
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
                    Smart Grids Security
                </Typography>
                <Typography variant="body1" paragraph>
                    Smart Grids are advanced electrical grids that leverage modern
                    communication and information technology to improve efficiency,
                    reliability, and sustainability. Ensuring the security of Smart Grids
                    is crucial to safeguard against potential threats and vulnerabilities.
                </Typography>
                <Typography variant="body1" paragraph>
                    Key aspects of Smart Grids security include encryption, authentication,
                    and continuous monitoring. Robust cybersecurity measures are essential
                    to protect against unauthorized access, data breaches, and
                    cyber-attacks.
                </Typography>
                <Typography variant="body1">
                    Stay tuned for more updates and in-depth information on Smart Grids
                    security best practices and technologies.
                </Typography>
            </div>
        </Box>
    );
};

export default SecurityPage;
