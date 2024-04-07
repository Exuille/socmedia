import { useState, useEffect } from "react";
// import defaultProfile from '../assets/defaultProfile.png'

const AccountSettings = () => {
    // const [profilePicture, setProfilePicture] = useState(defaultProfile)
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleUpdate = async (fieldName: string, value: string) => {
        try {
            console.log("Updated", fieldName, ": ", value)
            // COMMENTED CODE IS THE CODE FOR FECTHING THE DB
            // const response = await fetch("/REPLACE/THIS/FOR/LINK", {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         field: fieldName,
            //         value: value
            //     })
            // })

            // if (response.ok) {
            //     console.log("Update Successful")
            // } else {
            //     console.log("Update Failed")
            // }
        } catch (error) {
            console.error('Error updating:', error)
        }
    }

    const handlePassword = async () => {
        if (password != confirmPassword) {
            // Do logic here
            console.log("PASSWORDS DON'T MATCH")
        } else {
            handleUpdate('password', password)
        }

    }

    return (
        // IF THE BACKEND IS DONE MAKE SURE TO CHANGE THE LABEL TO
        // SOMETHING LIKE {body.firstName} from the DB
        <div className="account-settings">
            <h3>Account Settings Page</h3>
    
            <label>First Name: {firstName}</label>
            <input 
                type="text"
                onChange={(e) => { setFirstName(e.target.value) }}
                value={firstName} 
            />
            <button onClick={() => handleUpdate('firstName', firstName)}>Update</button>
            <label>Middle Name: {middleName}</label>
            <input 
                type="text"
                onChange={(e) => { setMiddleName(e.target.value) }}
                value={middleName} 
            />
            <button onClick={() => handleUpdate('middleName', middleName) }>Update</button>
            <label>Last Name: {lastName}</label>
            <input 
                type="text"
                onChange={(e) => { setLastName(e.target.value) }}
                value={lastName} 
            />
            <button onClick={() => handleUpdate('lastName', lastName) }>Update</button>
            <label>Username: {username}</label>
            <input 
                type="text"
                onChange={(e) => { setUsername(e.target.value) }}
                value={username} 
            />
            <button onClick={() => handleUpdate('username', username) }>Update</button>
            <label>Email: {email}</label>
            <input 
                type="email"
                onChange={(e) => { setEmail(e.target.value) }}
                value={email} 
            />
            <button onClick={() => handleUpdate('email', email) }>Update</button>
            <label>Update Password:</label>
            <input 
                type="password"
                onChange={(e) => { setPassword(e.target.value) }}
                value={password} 
            />
            <label>Confirm Passowrd:</label>
            <input 
                type="password"
                onChange={(e) => { setConfirmPassword(e.target.value) }}
                value={confirmPassword} 
            />
            <button onClick={() => handlePassword() }>Update</button>
        </div>
    )

}

export default AccountSettings