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

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box className='bottomNavigation' sx={{ width: '100%' }}>
      <BottomNavigation 
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue) ;
        }}
      >
        <BottomNavigationAction 
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
  );
}

export default SimpleBottomNavigation
