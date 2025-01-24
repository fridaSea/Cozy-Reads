import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Splash from './pages/Splash/Splash'
import Navbar from './components/Navbar/Navbar'
import NoMatchPage from './pages/NoMatchPage'

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
    
    </>
  )
}

export default App
