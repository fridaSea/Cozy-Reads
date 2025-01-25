import './Splash.css'
import '../../index.css'
import { Button, Container } from '@mui/material'
import Logo from '../../assets/Logo_round.png'
// import Logo from '../../assets/Logo.png'


function Splash() {
  return (
    <Container>
    <div>
      <h2 className='Logo'>This is my Logo</h2>
      <button className='button'> Hey</button>
      {/* <img src={Logo} alt="Logo Crazy Reads"/> */}
      <img src={Logo} alt="Logo Crazy Reads"/>
    </div>

    <div>
        <Button variant="contained" className='button'>Moin</Button>
    </div>

    </Container>
  

  )
}


export default Splash
