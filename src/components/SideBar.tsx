import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Page from '../interfaces/Page'
import { IconButton } from '@mui/material';
import { Route, Routes, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';

const drawerWidth = 240;



interface Props {
  pages: Array<Page>,
}




export default function SideBar({ pages }: Props) {
  const { pathname } = useLocation();


  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = <>
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton selected={page.route === pathname} component={Link} to={page.route} sx={
              {
                '&.Mui-selected': {
                  backgroundColor: '#F4F4F4',
                  color: '#000000'
                },
                '&:hover': {
                  backgroundColor: '#F4F4F4',
                  color: '#8accdd'
                }
              }
            }>
              <ListItemIcon>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  </>;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box component={"img"} src={logo} sx={{ width: 50, height: 50, marginRight: 2 }}></Box>
          <Typography variant="h6" noWrap component="div">
            EcoCis Connect
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="Folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawerContent}
      </Drawer >
      <Box
        component="main" flex={1} justifyContent={'flex-end'} className='page' sx={{ flexGrow: 1 }} height={"100vh"}>
        <Routes>
          {
            pages.map((page) =>
              <Route key={page.name} path={page.route} element={page.content} />)
            /*(page.name === selectedPageName && page.content))
            </Route>*/
          }
        </Routes>
      </Box >
    </Box >
  );
}
