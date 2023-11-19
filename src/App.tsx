import './App.css'
import SideBar from './components/SideBar'
import Page from './interfaces/Page'
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import Dashboard from './components/dashboard/Dashboard';
import Sustainability from './components/sustainability/Sustainability';
import SmartDevices from './components/smartdevices/SmartDevices';
import Notification from './components/Notification';
import SmartCards from './components/smartcards/SmartCards';
import { ThemeProvider } from '@emotion/react';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

import ProjectTheme from './theme';


function App() {

  const pages: Array<Page> = [
    {
      "name": "Home",
      "icon": <HomeIcon />,
      "content": <SmartCards />
    },
    {
      "name": "Dashboard",
      "icon": <SpaceDashboardIcon />,
      "content": <Dashboard />
    },
    {
      "name": "Sustainability Tips",
      "icon": <NaturePeopleIcon />,
      "content": <Sustainability />
    },
    {
      "name": "Smart Grid Devices",
      "icon": <DevicesIcon />,
      "content": <SmartDevices />
    }
  ]


  return (
    <>
      <ThemeProvider theme={ProjectTheme}>
        <SideBar pages={pages}></SideBar>
      </ThemeProvider>
    </>
  )


}

export default App
