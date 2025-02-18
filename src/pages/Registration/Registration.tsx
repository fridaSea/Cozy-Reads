import { Button } from '@mui/material';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router";
import { AuthContext } from '../../components/Context/AuthContext';


function Registration () {
const {registration} = useContext(AuthContext);

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [errorMessage, setErrorMessage] = useState('');
 const [successMessage, setSuccessMessage] = useState('');
 // everything that was set before adding the Authentication until the return part
 const navigate = useNavigate();

 const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value)
 }

 const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value)
 }

 const handleSubmitRegistration = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // this is going to prefent the form from refreshing the page when submittet
  // console.log("email, password:>>", email, password)
  registration(email, password);
  setSuccessMessage("Registration successful!");
 } 

 useEffect(() => {
  if (successMessage) {
    // Hier wird die Navigation nach einer erfolgreichen Registrierung gemacht
    navigate('/', { replace: true });
  }
}, [successMessage, navigate]);


  return (
    <div className='form-container-wrapper'>
      <div className="form-container">
      <h2>Registration</h2>
      <form className="registration-form" onSubmit={handleSubmitRegistration}>

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

        <div>
          <Button type="submit">Register</Button>
        </div>
{/* BUTTON EINFÜGEN, STYLEN UND NICHT ONCLICK???? */}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
    {/* DO THIS WITH A LITTLE POP UP AND DISPLAY THE MESSAGE THER & WITH AN OKAY BUTTON AND ONCLICK USE THE NAVIGATE TO REDIRECT!!!! */}

        <div>
          <p>Already have an account? Login <Link to="/login" className='Link' > here </Link>
          </p>
          
        </div>
      </form>
    </div>
    </div>
  )
}

export default Registration 
