import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';


export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GamaHarbor
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Button color="inherit" onClick={toggleDrawer(true)}>Login</Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            acildi
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
