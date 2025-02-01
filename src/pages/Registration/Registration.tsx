import { Button } from '@mui/material';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
// import './Login.css'; 
import { Link, useNavigate } from "react-router";
import { AuthContext } from '../../components/Context/AuthContext';


function Registration () {
const {registration} = useContext(AuthContext);

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
//  const [username, setUsername] = useState("")
//  const [confirmPassword, setConfirmPassword] = useState("")

 const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value)
 }

 const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value)
 }

//  const handleUsernameChange = (e:ChangeEvent<HTMLInputElement>) => {
//   setUsername(e.target.value)
//  }

 const handleSubmitRegistration = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // this is going to prefent the form from refreshing the page when submittet
  // console.log("email, password, username:>>", email, password, username)
  registration(email, password);
 }

// everything that was set before adding the Authentication until the return part
  const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });
 
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

    // Auskommentiert, da wir diese Funktion bei der Authentication noch einmal neu definiert haben 
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // Auskommentiert, da wir diese Funktion bei der Authentication noch einmal neu definiert haben 
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

  return (
    <div className="form-container">
      <h2>Registration</h2>
      <form className="registration-form" onSubmit={handleSubmitRegistration}>
        {/* <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            // onChange={handleChange}
            required
          />
        </div> */}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            // onChange={handleChange}
            required
          />
        </div>
 {/* TO DO - Icon einbauen um das Passwort zu verstecken bzw.anzuzeigen */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            // onChange={handleChange}
            required
          />
        </div>

{/* ERST EINMAL RAUSGENOMMEN, DA ICH NICHT MEHR IN DAS FELD SCHREIBEN KONNTE */}
        {/* <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            // onChange={handleChange}
            required
          />
        </div> */}
        <div>
          <Button type="submit">Register</Button>
        </div>
{/* BUTTON EINFÜGEN, STYLEN UND NICHT ONCLICK???? */}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}{navigate('/home', { replace: true })}</p> }
    {/* DO THIS WITH A LITTLE POP UP AND DISPLAY THE MESSAGE THER & WITH AN OKAY BUTTON AND ONCLICK USE THE NAVIGATE TO REDIRECT!!!! */}


        <div>
          <p>Already have an account? Login <Link to="/login"> here </Link> . 
          
        ODER 2 Buttons verlinkt</p>
     {/* 2 Buttons see here: https://www.youtube.com/watch?v=8QgQKRcAUvM  */}
          
        </div>
      </form>
    </div>
  );
};


export default Registration 
