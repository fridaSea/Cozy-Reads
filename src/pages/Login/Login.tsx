import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from "react-router";
import { Button} from '@mui/material';
import { AuthContext } from '../../components/Context/AuthContext';
import './Login.css'; 

function Login() {

  const {login} = useContext(AuthContext); 

  const navigate = useNavigate();
//   const handleClick = () => {
//     navigate('/')
//  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
   } 
  
   const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
   }

   const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // this is going to prefent the form from refreshing the page when submittet
    // console.log("email, password:>>", email, password)
    const isLoggedIn = await login(email, password);
    if(isLoggedIn) {
      navigate('/');
    } else {
      setErrorMessage('Login didn`t work. Try again.')
    }
   };

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (formData.password !== formData.confirmPassword) {
  //     setErrorMessage('Passwords do not match!');
  //     setSuccessMessage('');
  //   } else {
  //     setErrorMessage('');
  //     setSuccessMessage('Registration Successful!');
  //     setTimeout(() => {
  //         navigate('/home');
  //        }, 1000); 
  //   }
  // };

    // Modal for Login ALT
    // const [open, setOpen] = useState(false)
  
    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };

   // MODAL TO DO
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
<div className='form-container-wrapper'>
    <div className="form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmitLogin}>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div>
          <Button type="submit" >Login</Button>
        </div>
{/* BUTTON EINFÜGEN UND NICHT ONCLICK???? */}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p> }
        
    {/* DO THIS WITH A LITTLE POP UP AND DISPLAY THE MESSAGE HERE & WITH AN OKAY BUTTON AND ONCLICK USE THE NAVIGATE TO REDIRECT!!!! */}


        <div>
          <p>Don`t have an account? Register <Link to="/registration" className='Link'> here </Link></p>
  
        </div>
        
      </form>
    </div>

{/* MODAL */}
    <div>
      <div>
          {/* <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form> 
            <Box className="modalBox">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Login
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Jetzt einloggen!
              </Typography>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div>
              <p>Don`t have an account? Register <Link to="/registration" className='Link'> here </Link></p>
              </div>


              <div>
                <Button type="submit" >Login</Button>
              </div>

              {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}{navigate('/', { replace: true })}</p> }
 
            </Box>
            </form>
          </Modal> */}
        </div>
    </div>
    </div>

  )

}

export default Login
