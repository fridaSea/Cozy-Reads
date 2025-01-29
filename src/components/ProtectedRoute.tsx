import { ReactNode, useContext } from "react"
import { AuthContext } from "./Context/AuthContext";
import { useNavigate } from "react-router";

type ProtectedRouteProps = {
  children: ReactNode
}

function ProtectedRoute({children}:ProtectedRouteProps) {
  const {user} = useContext(AuthContext)

  const redirectTo = useNavigate()

  const isAuthenticated = user ? true : false
  
  return (
    <>
      {/* <h1>Inside a ProtectedRoute</h1>
      {children} */}

      {isAuthenticated ? children : <h1>You need to login to see your favorites</h1>}

{/* USE A TIMEOUT ABOVE that will redirect after a few seconds 
INSTEAD OF CALLING THE FUNCTION    redirectTo("/")  MAYBE CREATE ANOTHER COMPONENT*/}
      {/* {isAuthenticated ? children : redirectTo("/")} */}
    </>
  );
}

export default ProtectedRoute
