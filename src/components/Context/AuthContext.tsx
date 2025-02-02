import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../../types/customTypes";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../configuration/firebaseConfig";

//3 Define providers props type
type AuthContextProviderProps = {
    children: ReactNode;
};

//5 Define the type for the context
type AuthContextType = {
  user: User | null;
  registration: (email:string, password:string)=> Promise<void>
  login: (email:string, password:string)=> Promise<void>
  logout: () => void;
}

//6 Create a variable with the initial value of all the elements we chare in our context (at least the ones ...)
const contextInitialValue: AuthContextType = {
    user: null,
    registration: () => {throw new Error("context not initialized")},
    login: () => {throw new Error("context not initialized")},
    logout: () => {throw new Error("context not initialized")},
}


//1 Create and export the Context 
export const AuthContext = createContext<AuthContextType>(contextInitialValue);

// 2 Create and export the provider : a component that contains the states, functions etc. ... I want to make available for the "subscribers" of our context 
export const AuthContextProvider = ({children}:AuthContextProviderProps) => {
  
// 4 Move to the provider all the states and functions you want to share bzw. when starting a new project you create them directly there 
  // const user1: User ={
  //   email: "maria@test.com",
  //   userName: "Maria",
  //   password: "1234"
  // }

  const [user, setUser] = useState<User | null>(null)


  const registration = async (email:string, password:string) => {
    console.log("email, password:>>", email, password);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      // Signed up 

      const user = userCredential.user;
      
      console.log("user registered:>>", user);

    } catch (err) {
      const error = err as Error 
      console.log("error message:>>", error.message);
    }

    //  WITHOUT ASYCN AWAIT -> Async Await siehe oben drüber 
    //  createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed up 
    //     const user = userCredential.user;
    //     console.log("user registered:>>", user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  }
    //Login & Logout functionality
    const login = async (email:string, password:string) => {
        // setUser();
        console.log("email, password:>>", email, password);
      try {
        const userLoginCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userLoginCredential.user;
        const userEmail = user.email;
        const id = user.uid;

        if (userEmail && id) {
          setUser({email: userEmail, id});
        }else {
          throw new Error ("Userinformation not found");
        }
        

        console.log("user logged in:>>", user);

      } catch (err) {
        const error = err as Error 
        console.log("error message:>>", error.message);
      }


      // signInWithEmailAndPassword(auth, email, password)
      //   .then((userCredential) => {
      //     // Signed in 
      //     const user = userCredential.user;
      //     console.log("user logged in:>>", user);
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     console.log("error message:>>", error.message);
      //   });
      }

      // this function I gonna call it, everytime I want to know if my user is logged in or not: Whenever it is called, it will connect with firebas and bring back any user / the user, that are logged in.
      // if it finds it, we will see the information, if not, we will see the message, that the user is signed out.  
      const checkUserStatus = () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // const uid = user.uid;
              const userEmail = user.email;
              const id = user.uid;
              if (userEmail && id) {
                setUser({email: userEmail, id});
              }else {
                throw new Error ("Userinformation not found");
              }
            // ...
            console.log("%c user is logged in", "color:green", user.email);

          } else {
            // User is signed out
            console.log("%c user is signed out", "color:red");
            setUser(null);
        };
      });
      }
    
      const logout = () => {
        signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("%c user is signed out", "color:red");
          setUser(null);
        }).catch((error) => {
          // An error happened. - The user could not be signed out.
          console.log("Probmelms sogninh out user");
        });
      }


      useEffect(() => {
        checkUserStatus();
      }, [])
      

//7 in providers property value include the elements (states, functions, variables) you want to share and  .....
    return (
    <AuthContext.Provider value={{user, login, logout, registration}}>
        {children}
    </AuthContext.Provider>
  )
}


