import { Box, CircularProgress, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useRef, useState } from 'react'

import { Config } from '../../config';


interface timeFrame {
    name: string,
    days: number
}

const timeFrames: Array<timeFrame> = [
    {
        "name": "1 Day",
        "days": 1
    },
    {
        "name": "1 Week",
        "days": 7
    },
    {
        "name": "1 Month",
        "days": 30
    }
]

function GrafanaDashboard() {
    const [isMounted, setIsMounted] = useState(false);

    const [selectedTimeFrame, setSelectedTimeFrame] = useState<timeFrame>(timeFrames[0]);

    const iframeRef = useRef(null);

    const handleIframeLoad = () => {
        setIsMounted(true);
    };

    const dateTo = new Date(2023, 10, 9, 10, 26, 0);
    console.log(dateTo)
    const dateFrom = new Date(dateTo.getTime() - selectedTimeFrame.days * 24 * 60 * 60 * 1000);

    const unixDateTo = Math.floor(dateTo.getTime() / 1000);
    const unixDateFrom = Math.floor(dateFrom.getTime() / 1000);

    const urlParams = {
        from: unixDateFrom.toString() + "000",
        to: unixDateTo.toString() + "000",
        orgId: "1",
        theme: "light",
        panelId: "4"
    }

    const url = Config.GRAFANA_ENDPOINT_ELECTRICITY + new URLSearchParams(urlParams);

    console.log(url);




    return (
        <>
            <Grid container direction={"column"} display={"flex"} justifyContent={"center"} alignItems={"left"} height={"100%"} spacing={0}>
                {isMounted &&
                    <Grid item>
                        <ToggleButtonGroup aria-label="outlined primary button group" >
                            {timeFrames.map((timeFrame) => (
                                <ToggleButton value={timeFrame} onClick={() => setSelectedTimeFrame(timeFrame)} selected={
                                    selectedTimeFrame === timeFrame
                                }>
                                    {timeFrame.name}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    </Grid>
                }
                <Grid item height={"auto"}>
                    <iframe src={url}
                        width="100%"
                        ref={iframeRef}
                        onLoad={handleIframeLoad}
                        hidden={!isMounted}
                    />
                    {!isMounted && <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"}>
                        <CircularProgress />
                    </Box>}
                </Grid>

            </Grid >
        </>


    )




}
export default GrafanaDashboard