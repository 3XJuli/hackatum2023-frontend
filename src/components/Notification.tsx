import { Alert, Button } from "@mui/material";

export default function Component() {
    return (
        <Alert className="flex items-center justify-between p-4 bg-blue-200 rounded">
            <div className="flex items-center">
                <svg
                    className=" h-6 w-6 text-blue-600 mr-2"
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
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                You have a new notification
            </div>
            <Button className="p-2">
                <svg
                    className=" h-4 w-4 text-blue-600"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            </Button>
        </Alert>
    )
}

