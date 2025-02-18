// import { Button, Modal } from '@mui/material';
// import './LoginModal.css'
// import { Box, Typography } from '@mui/joy';
// import { useState } from 'react';


// function LoginModal() {
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//   return (
    
//       <div>
//         <Button onClick={handleOpen}>Open modal</Button>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           {/* <Box className="modalBox">
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               Text in a modal
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </Typography>
//           </Box> */}

// <div className="form-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleSubmitLogin}>

//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>

//         <div>
//           <Button type="submit" >Login</Button>
//         </div>
// {/* BUTTON EINFÜGEN UND NICHT ONCLICK???? */}

//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}{navigate('/', { replace: true })}</p> }
//     {/* DO THIS WITH A LITTLE POP UP AND DISPLAY THE MESSAGE HERE & WITH AN OKAY BUTTON AND ONCLICK USE THE NAVIGATE TO REDIRECT!!!! */}


//         <div>
//           <p>Don`t have an account? Register <Link to="/registration" className='Link'> here </Link>. 
//           ODER 2 Buttons verlinkt</p>
//      {/* 2 Buttons see here: https://www.youtube.com/watch?v=8QgQKRcAUvM  */}
//           <p>Forgot pasword?</p>
          
//         </div>
        
//       </form>
      
//     </div>
//         </Modal>
//       </div>

      
//   )
// }
//   export default LoginModal