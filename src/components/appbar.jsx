import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { changeThemeMode } from '../redux/slices/theme/index'
import Drawer from '@mui/material/Drawer';
import Logo from "../assets/logo.png";
import { useLocation } from 'react-router-dom';
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun
import Brightness4Icon from '@mui/icons-material/Brightness4';
const drawerWidth = 240;
const pages = [{
  id: 1,
  name: 'Home',
  to: '/'
},
{
  id: 2,
  name: 'Skills',
  to: '#skills'

},
{
  id: 3,
  name: 'Experience',
  to: '#experience'

},
{
  id: 4,
  name: 'Services',
  to: '#services'

},
{
  id: 5,
  name: 'About',
  to: '#about'

},
{
  id: 6,
  name: 'Contact',
  to: '#contact'

},];

export default function Appbar(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box component="img" src={Logo} alt="Logo"  sx={{ height: 20, margin: 2 }} />
      <Divider />
      <List sx={{ width: 250 }}>
        {pages.map((item, k) => (
          <ListItem key={k} disablePadding>
            <ListItemButton to={item.to} selected={location.pathname === item.to} onClick={handleDrawerToggle}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;



  const themeMode = useSelector((state) => state.mode.value)
  const dispatch = useDispatch()




  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' color='inherit' elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
        <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} onClick={handleDrawerToggle} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        <a href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box component="img" src={Logo} sx={{ padding: 0, width: 80, display: { xs: 'none', md: 'flex' } }} alt="Your logo." />
          </a>
          <Typography sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Typography>


          

          <Box component="img" src={Logo} alt="Logo" sx={{ height: 40, position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: { xs: 'flex', md: 'none' } }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((item, key) => (
              <a href={item.to} key={key} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button sx={{ my: 2, color: 'inherit', display: 'block' }}>{item.name}</Button>
              </a>
            ))}
          </Box>
          <IconButton edge="end" color="inherit" onClick={() => dispatch(changeThemeMode())}>
            {themeMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
          sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}