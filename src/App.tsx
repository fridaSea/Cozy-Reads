import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Splash from './pages/Splash/Splash'
import Navbar from './components/Navbar/Navbar'
import NoMatchPage from './pages/NoMatchPage'
import Background from './assets/Background.png'

const Root = () => {
    return (
      <>
       <Navbar/>
       <Outlet/>
       {/* <Footer/> */}
      </>
    )
  }


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
   
    <BrowserRouter>
      <Routes>
        <Route path="/"/>
        <Route element={<Root/>}>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/splash" element={<Splash/>}/>
          <Route path="*" element={<NoMatchPage/>}/>
        </Route>
      
      </Routes>
      
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
