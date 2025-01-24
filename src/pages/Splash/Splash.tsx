import './Splash.css'
import '../../index.css'
import { Button, Container } from '@mui/material'

function Splash() {
  return (
    <Container>
    <div>
      <h2 className='Logo'>This is my Logo</h2>
      <button className='button'> Hey</button>
    </div>

    <div>
        <Button variant="contained" className='button'>Moin</Button>
    </div>

    </Container>
  

  )
}


export default Splash
