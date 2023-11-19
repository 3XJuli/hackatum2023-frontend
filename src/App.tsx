import './App.css'
import SideBar from './components/SideBar'
import Page from './interfaces/Page'
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import Dashboard from './components/dashboard/Dashboard';
import Sustainability from './components/sustainability/Sustainability';
import SmartDevices from './components/smartdevices/SmartDevices';
import SmartCards from './components/smartcards/SmartCards';
import { ThemeProvider } from '@emotion/react';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ProjectTheme from './theme';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import { Security } from '@mui/icons-material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  const pages: Array<Page> = [
    {
      "name": "Home",
      "icon": <HomeIcon />,
      "content": <SmartCards />,
      "route": "/"
    },
    {
      "name": "Dashboard",
      "icon": <SpaceDashboardIcon />,
      "content": <Dashboard />,
      "route": "/dashboard"
    },
    {
      "name": "Sustainability Tips",
      "icon": <NaturePeopleIcon />,
      "content": <Sustainability />,
      "route": "/sustainability",
    },
    {
      "name": "Smart Grid Devices",
      "icon": <DevicesIcon />,
      "content": <SmartDevices />,
      "route": "/smartdevices"
    },
    {
      "name": "Infrastructure",
      "icon": <EditRoadIcon />,
      "content": <SmartDevices />,
      "route": "/infrastructure"
    },
    {
      "name": "Security",
      "icon": <Security />,
      "content": <SmartDevices />,
      "route": "/security"
    },
    {
      "name": "Data Transfer",
      "icon": <CloudUploadIcon />,
      "content": <SmartDevices />,
      "route": "/datatransfer"
    }
  ]

  return (

    <>
      <Router>
        <ThemeProvider theme={ProjectTheme}>
          <SideBar pages={pages}></SideBar>
        </ThemeProvider>
      </Router>;

    </>
  )


}

export default App
