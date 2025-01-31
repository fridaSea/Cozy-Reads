import { useState } from 'react';
import './Login.css'; 
import { Link, useNavigate } from "react-router";


function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match!');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage('Registration Successful!');
      setTimeout(() => {
          navigate('/home');
         }, 1000); 

      
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form className="registration-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

      
{/* BUTTON EINFÜGEN UND NICHT ONCLICK???? */}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}{navigate('/home', { replace: true })}</p> }
    {/* DO THIS WITH A LITTLE POP UP AND DISPLAY THE MESSAGE THER & WITH AN OKAY BUTTON AND ONCLICK USE THE NAVIGATE TO REDIRECT!!!! */}


        <div>
          <p>Don`t have an account? Register <Link to="/registration"> here </Link>. 
          ODER 2 Buttons verlinkt</p>
     {/* 2 Buttons see here: https://www.youtube.com/watch?v=8QgQKRcAUvM  */}
          <p>Forgot pasword?</p>
          
        </div>
      </form>
    </div>
  );
}


export default Login
