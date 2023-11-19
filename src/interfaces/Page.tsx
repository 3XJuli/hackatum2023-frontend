import { ReactNode } from "react";

interface Page {
    name: string,
    icon: ReactNode,
    content: ReactNode
    route: string
}

export default Page