import { Box} from '@mui/material';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu'; 
import { MouseEvent, useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';


function Navbar() {
  //9 Subscribe to the context and use the elements available 
  const {user, login, logout} = useContext(AuthContext)

  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const openMenu = (event:MouseEvent<HTMLElement>) => {
    //setAnchorNav(event.currentTarget);
    if(isOpen){
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    //setIsOpen(!isOpen)

  };
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const closeMenu = (event:MouseEvent<HTMLElement>) => {
  //   setAnchorNav(null);
  // };
    
// Navbar
  // const navElement = document.querySelector('.nav');
  // const hamburger-menu-element = document.querySelector('.hamburger-menu');

  const [click, setClick] = useState(false);


  // hamburger-menu-element.addEventListener("click", () => {
  //   navElement.classList.toggle("nav--open");
  //   hamburger-menu-element?.classList.toggle("hamburger-open")
  // })

  // navElement?.addEventListener('click', () => {
  //   navElement.classList.remove("nav--open");
  //   hamburger-menu-element?.classList.remove("hamburger-open")
  // })

  // const handleClickOnHamburger = (e:MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
  //   e.preventDefault();
  // }
 

  return (
      <Box sx={{ flexGrow: 1 }}>
        <header className='header'>
          <div className='header-content'>
            <a href='/' className='logo'>Cozy Reads</a>

          <nav className={"nav " + (isOpen ? 'nav--open' : '')} >
              <ul className='nav-list'>
                  <li className='nav-item'>
                    <a href='./favorites' className='nav-link'>Favorites </a>
                  </li>
                  <li className='nav-item'>
                    <a href='./forum' className='nav-link'>Weekly Question/ Chat </a>
                  </li>
                  <li className='nav-item'>
                    <a href='./faq' className='nav-link'>FAQ </a>
                  </li>
                  <li>
                  {user ? (
                    <a href='./Login' className='nav-link' onClick={logout} color="inherit">Log out </a>
                  ) : (
                    <a href='./Login' className='nav-link' onClick={login} variant="danger">Login </a>
                  )
                  } 
                  </li>
                   {/* <li className='nav-item'>
                    <a href='./Login' className='nav-link'>Login </a>
                  </li> */}
              </ul>
          </nav>
            

            <div className='hamburger-menu'
            //  onClick={() => setShowMenu(showMenu => !showMenu)}
            // onClick={() => console.log("click")}  -> funktioniert
             onClick={openMenu} 
            // onClick={closeMenu}  
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


// open and remove - toggle 

// ALT ALT ALT <ALT>
//return (
//   <Box sx={{ flexGrow: 1 }}>
//     <AppBar position="static">
//       <Toolbar 
//         sx={{display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#5fe9e0', 
//         // backgroundColor: '#d7ffd9'
//         color: '#000000',
//         textDecoration: 'none',}}>
        
//         <IconButton
//           size="large"
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ mr: 2 }}
//         >
          
//         </IconButton>
      
//       <Box sx={{display:{xs:'none', md:'flex'}}}>
//         {pages.map( (page) => (
//           <Button color = 'inherit'> {page} </Button>
//         ) )}
//       {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <Link className='Link' to ={"/"}>Home</Link>
//             <Link className='Link' to ={"/login"}>Login</Link>
//             <Link className='Link' to ={"/splash"}>Splash</Link>
//             <Link className='Link' to ={"/favorites"}>Favorites</Link>
//         </Typography> */}
//       </Box>

//     <Box sx={{display:{xs:'flex', md:'none'}}}>
//       <IconButton size='large' edge='start' color="inherit" onClick={openMenu} >
//           <MenuIcon/>
//       </IconButton>
//       <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{display:{xs:'flex', md:'none'}}}>
//           {/* <MenuList>
//             <MenuItem>Home </MenuItem>
//             <MenuItem>Login </MenuItem>
//             <MenuItem>Splash </MenuItem>
//             <MenuItem>Favorites </MenuItem>
//           </MenuList> */}
//           {pages.map( (page) => (
//           <MenuItem> {page} </MenuItem>
//         ) )}
//       </Menu>
//     </Box>
//       {user ? (
//             <Button onClick={logout} color="inherit">
//           Log out</Button>
//           ) : (
//             <Button onClick={login} variant="danger">Login</Button>
//           )
//           } 

//       </Toolbar>
//     </AppBar>
//   </Box>
// );
// }
// </ALT>