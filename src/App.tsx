import './App.css'
import ResponsiveDrawer from './components/ResponsiveDrawer'
import Page from './interfaces/Page'
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import Home from './components/Home';
import Sustainability from './components/Sustainability';
import SmartDevices from './components/SmartDevices';



function App() {

  const pages: Array<Page> = [
    {
      "name": "Home",
      "icon": <HomeIcon />,
      "content": <Home />
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
      <ResponsiveDrawer pages={pages}></ResponsiveDrawer>
    </>
  )


}

export default App
