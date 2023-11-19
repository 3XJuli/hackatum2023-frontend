import './App.css'
import SideBar from './components/SideBar'
import { ThemeProvider } from '@emotion/react';
import ProjectTheme from './theme';

import { BrowserRouter as Router } from 'react-router-dom';
import pages from './pages';

function App() {

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
