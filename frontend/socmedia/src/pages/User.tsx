import { useState } from "react";
import defaultUser from '../assets/defaultUser.png'

const User = () => {
    const [userProfile, setUserProfile] = useState(defaultUser)

    return (
        <div className="user-profile">
            <div>
                <img src={defaultUser} alt="user_profile" />
                {/* <label>{username}</label> */}
                <label>USERNAME PLACEHOLDER</label>
                <label>NAME PLACEHOLDER</label>
                <label>Followers: </label>
                <label>Following: </label>
                <button>Follow</button>
            </div>
            <div>
                <h3>USER POSTS</h3>
            </div>
        </div>
    )
}

export default User