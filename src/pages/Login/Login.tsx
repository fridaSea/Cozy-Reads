import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import './Login.css'; 
import { Link, useNavigate } from "react-router";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { AuthContext } from '../../components/Context/AuthContext';


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
    // console.log("email, password, username:>>", email, password, username)
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

    // Modal for Login
    const [open, setOpen] = useState(false)
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


  return (

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
        {successMessage && <p className="success-message">{successMessage}{navigate('/', { replace: true })}</p> }
    {/* DO THIS WITH A LITTLE POP UP AND DISPLAY THE MESSAGE HERE & WITH AN OKAY BUTTON AND ONCLICK USE THE NAVIGATE TO REDIRECT!!!! */}


        <div>
          <p>Don`t have an account? Register <Link to="/registration" className='Link'> here </Link>. 
          ODER 2 Buttons verlinkt</p>
     {/* 2 Buttons see here: https://www.youtube.com/watch?v=8QgQKRcAUvM  */}
          <p>Forgot pasword?</p>
          
        </div>
      </form>
    </div>
  );
}


export default Login
