import { useState, useEffect } from "react";
// import defaultProfile from '../assets/defaultProfile.png'

const AccountSettings = () => {
    // const [profilePicture, setProfilePicture] = useState(defaultProfile)
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

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

    return (
        // IF THE BACKEND IS DONE MAKE SURE TO CHANGE THE LABEL TO
        // SOMETHING LIKE {body.firstName} from the DB
        <div className="account-settings">
            <h3>Account Settings Page</h3>
    
            <label>{firstName}</label>
            <input 
                type="text"
                onChange={(e) => { setFirstName(e.target.value) }}
                value={firstName} 
            />
            <button onClick={() => handleUpdate('firstName', firstName)}>Update</button>
            <label>{middleName}</label>
            <input 
                type="text"
                onChange={(e) => { setMiddleName(e.target.value) }}
                value={middleName} 
            />
            <button onClick={() => handleUpdate('middleName', middleName) }>Update</button>
            <label>{lastName}</label>
            <input 
                type="text"
                onChange={(e) => { setLastName(e.target.value) }}
                value={lastName} 
            />
            <button onClick={() => handleUpdate('lastName', lastName) }>Update</button>
            <label>{username}</label>
            <input 
                type="text"
                onChange={(e) => { setUsername(e.target.value) }}
                value={username} 
            />
            <button onClick={() => handleUpdate('username', username) }>Update</button>
            <label>{email}</label>
            <input 
                type="email"
                onChange={(e) => { setEmail(e.target.value) }}
                value={email} 
            />
            <button onClick={() => handleUpdate('email', email) }>Update</button>
        </div>
    )

}

export default AccountSettings