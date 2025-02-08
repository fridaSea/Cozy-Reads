import './Splash.css'
import '../../index.css'
import { Button, Container } from '@mui/material'
import Logo from '../../assets/Logo_round.png'
import { Link } from 'react-router'
// import Logo from '../../assets/Logo.png'


function Splash() {
  return (
    <Container className='splash'>
      <div className='welcome'>
        <h1>Happy Welcome to</h1>
        <img src={Logo} alt="Logo Crazy Reads"/>
        <h1>Cozy Reads</h1>
      </div>
      
      <h2>Your place to relaxe and enjoy a good book</h2>
      <button className='button'><Link to="/">Come on in ...</Link></button>

    </Container>

  )
}


export default Splash
