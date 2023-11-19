import { Box, CircularProgress } from '@mui/material';
import { useRef, useState } from 'react'


function GrafanaDashboard() {
    const [isMounted, setIsMounted] = useState(false);

    const iframeRef = useRef(null);

    const handleIframeLoad = () => {
        setIsMounted(true);
    };

    return (
        <>
            <iframe src="http://158.160.14.120:3000/d-solo/f78930ed-1f5a-4475-a4e5-522fcb70e1f4/electricity-usage?orgId=1&from=1697746729858&to=1700342329858&panelId=4&theme=light"
                className='grafana'
                ref={iframeRef}
                onLoad={handleIframeLoad}
                hidden={!isMounted} />
            {!isMounted && <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"} className='grafana'>
                <CircularProgress />
            </Box>}
        </>


    )




}
export default GrafanaDashboard