import { Box} from '@mui/material';
import './Navbar.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { NavLink } from 'react-router';


function Navbar() {
  //9 Subscribe to the context and use the elements available 
  const {user, login, logout} = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
      <Box sx={{ flexGrow: 1 }}>
        <header className='header'>
          <div className='header-content'>
            <a href='/' className='logo'>Cozy Reads</a>

          <nav className={"nav " + (isOpen ? 'nav--open' : '')} >
              <ul className='nav-list'>
                <li className='nav-item'>
                  <NavLink 
                  to='/faq' 
                  className={({isActive}) => isActive ? 'nav-link nav-active' : 'nav-link'}>
                    FAQ</NavLink>
                </li>
                    
                <li className='nav-item'>
                  <NavLink 
                    to="/chat"
                    className={({isActive}) => isActive ? 'nav-link nav-active' : 'nav-link'}
                    >Chat
                  </NavLink>
                </li>
                  

                <li className='nav-item'>
                 
                  {user ? (
                    <NavLink to='/Login' className={({isActive}) => isActive ? 'nav-link nav-active' : 'nav-link'} onClick={logout} color="inherit">Log out </NavLink>
                  ) : (
                    <NavLink to='/Login' className={({isActive}) => isActive ? 'nav-link nav-active' : 'nav-link'} onClick={login} variant="danger">Login </NavLink>
                  )
                  } 
                  </li>

                  {/* <li className='nav-item'>
                  {user ? (
                    <a href='/Login' className='nav-link' onClick={logout} color="inherit">Log out </a>
                  ) : (
                    <a href='/Login' className='nav-link' onClick={login} variant="danger">Login </a>
                  )
                  } 

                   {/* <li className='nav-item'>
                    <a href='./favorites' className='nav-link'>Favorites </a>
                  </li> */}
              </ul>
          </nav>
            

            <div className={`hamburger-menu ${isOpen ? 'hamburger-menu--open' : ''}`}
             onClick={openMenu} 
            
            >
              <div className='bar'> </div>
              <div className='bar'> </div>
              <div className='bar'> </div>
            </div>
          </div>
        </header>
      </Box>
    );
  }

export default Navbar