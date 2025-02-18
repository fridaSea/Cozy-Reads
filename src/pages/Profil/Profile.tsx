import { Button } from "@mui/material"
import { ChangeEvent, useState } from "react"


function Profile() {

    const [username, setUsername] = useState("")

    const handleUsernameChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
       }
  
return (
    <div>
      
      <h2>This is your Profile</h2>


        <form className="login-form" 
        // onSubmit={handleSubmitLogin} 
        >
            <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
                type="username"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                required
            />
            </div>

            <div>
            <Button type="submit">Update Username</Button>
            </div>
        </form>
    </div>
   )
}

export default Profile
