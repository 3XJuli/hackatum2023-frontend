import { ReactNode } from "react";

interface Page {
    name: string,
    icon: ReactNode,
    content: ReactNode
    route: string
    cardImage: string | null
    cardTitle: string | null
    cardDescription: string | null
}

export default Page