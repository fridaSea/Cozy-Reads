import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import SurfingIcon from '@mui/icons-material/Surfing';
import AccountBoxIcon from '@mui/icons-material/AccountBox'; 
import { Link, useNavigate } from 'react-router';
import Home from '../../pages/Home/Home'
import  './Footer.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import tiktok from '../../assets/tiktok.png';
import youtube from '../../assets/youtube.png';

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
      <div>
{/* MOBILE FOOTER */}
      <Box className='bottomNavigation'>
        <BottomNavigation 
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue) ;
          }}
        >
        <BottomNavigationAction className='bottomNavigationAction'
            label="Home" 
            value={value}
            onClick={() =>navigate("/")
            }
            icon={<HomeIcon />}
            // component={Link} 
            // to={'../../pages/Home/Home'}  
             />
        {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Buy us a surf break" icon={<SurfingIcon />} /> */}
        <BottomNavigationAction label="Profil" value={value} onClick={() =>navigate("/login")
            } icon={<AccountBoxIcon />} />
        </BottomNavigation>
      </Box>

{/* DESKTOP FOOTER */}
    <div className='Footer'>
         <span className="copyright"> Mady with Love by _frida_sea_ &copy; 2025</span>
      

      <div className="socialIcons">
        <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="Instagram-LinkIcon"/></a>
        <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="Facebook-LinkIcon"/></a>
        <a href="https://www.tiktok.com/" target="_blank"><img src={tiktok} alt="Tiktok-LinkIcon"/></a>
      </div>

      </div>

  </div>
  );
}

export default SimpleBottomNavigation
