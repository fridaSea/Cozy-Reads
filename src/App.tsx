import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Splash from './pages/Splash/Splash'
import Navbar from './components/Navbar/Navbar'
import NoMatchPage from './pages/NoMatchPage'
import SimpleBottomNavigation from './components/Footer/Footer'
import Registration from './pages/Registration/Registration'
import { AuthContextProvider } from './components/Context/AuthContext'
import Login from './pages/Login/Login'
// import Favorites from './pages/Favorites/Favorites'
import ProtectedRoute from './components/ProtectedRoute'
import BookDetail from './pages/BookDetail/BookDetail'
import Chat from './pages/Chat/Chat'
import FAQ from './pages/FAQ/FAQ'
import './App.css'

const Root = () => {
    return (
      <>
       <div className='background-image'></div>
       <Navbar/>
       <div className='website-container'>
        <Outlet/>
       </div>
       
       <SimpleBottomNavigation/>
      </>
    )
  }


function App() {
  // const [count, setCount] = useState(0)
  // console.log('app:>>', app); -> used to see, whether it is working or not
  // console.log('auth:>>', auth) -> used to see, whether it is working or not
  //  console.log('db:>>', db) -> used to see, whether it is working or not

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
          <Route path="/faq" element={<FAQ/>}/>
          {/* <Route path="/favorites" element={ 
            <ProtectedRoute>
                <Favorites/>
            </ProtectedRoute>
            }/> */}
          <Route path="/books/:bookDetail" element={<BookDetail/>}/>
          <Route path="/chat" element={
            <ProtectedRoute>
                <Chat/>
            </ProtectedRoute>
            }/>
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
