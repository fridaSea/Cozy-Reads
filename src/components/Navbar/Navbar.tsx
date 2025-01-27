import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu'; 

const pages = ['Home', 'Splash', 'Login'];

function Navbar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar 
            sx={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#5fe9e0', 
            // backgroundColor: '#d7ffd9'
            color: '#000000',
            textDecoration: 'none',}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon/>
            </IconButton>
          
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link className='Link' to ={"/"}>Home</Link>
                <Link className='Link' to ={"/login"}>Login</Link>
                <Link className='Link' to ={"/splash"}>Splash</Link>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

export default Navbar
