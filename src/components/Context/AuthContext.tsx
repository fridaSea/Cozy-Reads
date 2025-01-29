import { createContext, ReactNode, useState } from "react";
import { User } from "../../types/customTypes";

//3 Define providers props type
type AuthContextProviderProps = {
    children: ReactNode;
};

//5 Define the type for the context
type AuthContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
}

//6 Create a variable with the initial value of all the elements we chare in our context (at least the ones ...)
const contextInitialValue: AuthContextType = {
    user: null,
    login: () => {throw new Error("context not initialized")},
    logout: () => {throw new Error("context not initialized")},
}


//1 Create and export the Context 
export const AuthContext = createContext<AuthContextType>(contextInitialValue);

// 2 Create and export the provider : a component that contains the states, functions etc. ... I want to make available for the "subscribers" of our context 
export const AuthContextProvider = ({children}:AuthContextProviderProps) => {
  
// 4 Move to the provider all the states and functions you want to share bzw. when starting a new project you create them directly there 
  const user1: User ={
    email: "maria@test.com",
    userName: "Maria"
  }

  const [user, setUser] = useState<User | null>(null)

    //Login & Logout functionality
    const login = () => {
        setUser(user1);
      }
    
      const logout = () => {
        setUser(null);
      }

//7 in providers property value include the elements (states, functions, variables) you want to share and  .....
    return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}


