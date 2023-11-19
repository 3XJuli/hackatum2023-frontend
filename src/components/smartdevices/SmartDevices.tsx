import { Button, Card, Grid } from '@mui/material'


export default function SmartDevices() {
    return (
        <Grid container spacing={5}>
            <Grid item md={4}>
                <Card className="smart-device">
                    <svg
                        className=" h-6 w-6 text-zinc-900 dark:text-zinc-50"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                    </svg>
                    <h3 className="font-medium text-lg">Smart Lightbulb</h3>
                    <p className="text-sm text-green-500">Online</p>
                    <Button size={"medium"}>Activate</Button>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card className="smart-device">
                    <svg
                        className=" h-6 w-6 text-zinc-900 dark:text-zinc-50"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
                    </svg>
                    <h3>Thermostat</h3>
                    <p>Offline</p>
                    <Button size="medium">Activate</Button>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card className="smart-device">
                    <svg
                        className=" h-6 w-6 text-zinc-900 dark:text-zinc-50"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                    <h3 className="font-medium text-lg">Solar Panel</h3>
                    <p>Online</p>
                    <Button size="medium">Activate</Button>
                </Card>
            </Grid>
        </Grid >
    )
}