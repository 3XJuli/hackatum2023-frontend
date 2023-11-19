import Page from './interfaces/Page'
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import Dashboard from './components/dashboard/Dashboard';
import Sustainability from './components/sustainability/Sustainability';
import SmartDevices from './components/smartdevices/SmartDevices';
import SmartCards from './components/smartcards/SmartCards';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import { Security } from '@mui/icons-material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SecurityPage from './components/security/SecurityPage';
import DataTransferPage from './components/datatransfer/DataTransferPage';
import InfrastructurePage from './components/infrastructure/InfrastructurePage';

const pages: Array<Page> = [
    {
        "name": "Home",
        "icon": <HomeIcon />,
        "content": <SmartCards />,
        "route": "/",
        "cardImage": null,
        "cardTitle": null,
        "cardDescription": null
    },
    {
        "name": "Dashboard",
        "icon": <SpaceDashboardIcon />,
        "content": <Dashboard />,
        "route": "/dashboard",
        "cardImage": "https://ugc.futurelearn.com/uploads/images/18/65/header_18652929-9128-4e40-8793-81a37b29b279.jpg",
        "cardTitle": "Energy Dashboard",
        "cardDescription": "Keep track of your energy consumption goals."
    },
    {
        "name": "Sustainability Tips",
        "icon": <NaturePeopleIcon />,
        "content": <Sustainability />,
        "route": "/sustainability",
        "cardImage": "https://static.wixstatic.com/media/e5d7b2_0f1c8dfce9bd47f7b026c06438c3fc57~mv2.png/v1/fill/w_1128,h_770,al_c,q_90,enc_auto/e5d7b2_0f1c8dfce9bd47f7b026c06438c3fc57~mv2.png",
        "cardTitle": "Sustainability Tips",
        "cardDescription": "Reduce your carbon footprint."
    },
    {
        "name": "Smart Grid Devices",
        "icon": <DevicesIcon />,
        "content": <SmartDevices />,
        "route": "/smartdevices",
        "cardImage": "https://assets.bizclikmedia.net/1800/df939f5d2a2a1c5ebe57d77599d1298f:58ce784c0141c9e48c376e59e38ae392/gettyimages-1029186020-jpg.webp",
        "cardTitle": "Smart Grid",
        "cardDescription": "Stay in control of all your devices."
    },
    {
        "name": "Infrastructure",
        "icon": <EditRoadIcon />,
        "content": <InfrastructurePage />,
        "route": "/infrastructure",
        "cardImage": "https://video.cgtn.com/news/7855544e35497a4e33517a4e7a4d444d3051444f31457a6333566d54/video/75f78a15a30b408587aeb25db67434b0/75f78a15a30b408587aeb25db67434b0.jpg",
        "cardTitle": "Infrastructure",
        "cardDescription": "Extend your Smart Grid infrastructure."
    },
    {
        "name": "Security",
        "icon": <Security />,
        "content": <SecurityPage />,
        "route": "/security",
        "cardImage": "https://media.istockphoto.com/id/1289956604/photo/digital-security-concept.jpg?s=612x612&w=0&k=20&c=DDHKGonX7oLV52cssLx9Ptber1JC6VIOwalvbBPmgOU=",
        "cardTitle": "Security",
        "cardDescription": "Finish setting up your security measures."
    },
    {
        "name": "Data Transfer",
        "icon": <CloudUploadIcon />,
        "content": <DataTransferPage />,
        "route": "/datatransfer",
        "cardImage": "https://media.istockphoto.com/id/1216520813/photo/digital-cyberspace-with-particles-and-digital-data-network-connections-future-technology.jpg?s=612x612&w=0&k=20&c=7wvYGyA5twhPnfsN1snLk3zB-uSrTMCFI_y0uSoN6E4=",
        "cardTitle": "Data Transfer",
        "cardDescription": "Save time and money with our data transfer."
    }
]

export default pages;