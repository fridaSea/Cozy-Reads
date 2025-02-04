import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Splash from './pages/Splash/Splash'
import Navbar from './components/Navbar/Navbar'
import NoMatchPage from './pages/NoMatchPage'
import Background from './assets/Background.png'
import SimpleBottomNavigation from './components/Footer/Footer'
import Registration from './pages/Registration/Registration'

import { AuthContextProvider } from './components/Context/AuthContext'
import Login from './pages/Login/Login'
import Favorites from './pages/Favorites/Favorites'
import ProtectedRoute from './components/ProtectedRoute'
import BookDetail from './pages/BookDetail/BookDetail'
import { app, auth } from './configuration/firebaseConfig'
import Forum from './pages/Forum/Forum'

const Root = () => {
    return (
      <>
       <Navbar/>
       <Outlet/>
       <SimpleBottomNavigation/>
      </>
    )
  }


function App() {
  // const [count, setCount] = useState(0)
  // console.log('app:>>', app); -> used to see, whether it is working or not
  // console.log('auth:>>', auth) -> used to see, whether it is working or not

  return (
    <>
    <div>
{/* Wenn ich das nutzen möchte, muss es wieder in das div oben drüber: style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} - */}
   <AuthContextProvider>
   <BrowserRouter>
      <Routes>
        <Route path="/"/>
        <Route element={<Root/>}>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/splash" element={<Splash/>}/>
          <Route path="/favorites" element={
            <ProtectedRoute>
                <Favorites/>
            </ProtectedRoute>
            }/>
          <Route path="/bookdetail" element={<BookDetail/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="*" element={<NoMatchPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </AuthContextProvider>
    
    </div>
    </>
  )
}

export default App
