import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router';
import  './Footer.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import tiktok from '../../assets/tiktok.png';
import ChatIcon from '@mui/icons-material/Chat';

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
      <div>
{/* MOBILE FOOTER */}
      <div className='bottom-navigation'>

        <BottomNavigation 
          showLabels
          value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue) ;
          // }}
        >
        <BottomNavigationAction className='bottom-navigation-action'
            label="Home" 
            value={value}
            onClick={() =>navigate("/")
            }
            icon={<HomeIcon className='action-icon'/>}
             />
        <BottomNavigationAction label="Chat" value={value} onClick={() =>navigate("/chat")
            } icon={<ChatIcon className='action-icon'/>} />
        </BottomNavigation>
        {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Buy us a surf break" icon={<SurfingIcon />} /> */}
        {/* <BottomNavigationAction label="Profil" value={value} onClick={() =>navigate("/login")
            } icon={<AccountBoxIcon className='action-icon'/>} />
        </BottomNavigation> */}
      </div>

{/* DESKTOP FOOTER */}
    <div className='footer'>
         <span className="copyright"> Mady with Love by _frida_sea_ &copy; 2025</span>
      

      <div className="socialIcons">
        <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="Instagram-LinkIcon"/></a>
        <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="Facebook-LinkIcon"/></a>
        <a href="https://www.tiktok.com/" target="_blank"><img src={tiktok} alt="Tiktok-LinkIcon"/></a>
      </div>

      </div>

  </div>
  )
}

export default SimpleBottomNavigation
