import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router';
import './Navbar.css'

function Navbar() {
    return (
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon/> */}
            </IconButton>
            <Link className='Link' to ={"/"}>Home</Link>
            <Link to ={"/login"}>Login</Link>
            <Link to ={"/splash"}>Splash</Link>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography> */}
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

export default Navbar
