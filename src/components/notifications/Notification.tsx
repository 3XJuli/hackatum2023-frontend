/*import React, { useState, useEffect, useRef } from "react";
import NotificationDisplay from "./NotificationDisplay";



function useInterval(callback: (response: Response) => void, delay: number) {
    const savedCallback: any = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default function Request() {
    const [response, setResponse] = useState<Response | null>(null);

    console.log(response)

    const [fired, setFired] = useState(false);

    // Run every 5 minutes
    //const delay = 5 * 60 * 1000;
    const delay = 15 * 1000;

    useInterval((response: Response) => {
        // Make the request here
        setResponse(response);
    }, delay);

    return (
        <>
            <NotificationDisplay callback={setFired}></NotificationDisplay>
        </>
    );

}
*/