import { useState } from "react";
// import defaultProfile from '../assets/defaultProfile.png'
import MobileBar from "../components/MobileBar";
import '../styles/AccountSettings.css'
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";

const AccountSettings = () => {
  // const [profilePicture, setProfilePicture] = useState(defaultProfile)
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdate = async () => {
    try {
      console.log("Updated");
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
      if (password != confirmPassword) {
        // Do logic here
        console.log("PASSWORDS DON'T MATCH");
      } else {
        // Do logic here
      }
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  return (
    // IF THE BACKEND IS DONE MAKE SURE TO CHANGE THE LABEL TO
    // SOMETHING LIKE {body.firstName} from the DB
    <section className="account-settings-main">
      <MobileBar />
      <div className="account-settings-left">
        <h3>Account Settings</h3>
        <label>Account</label>
        <div className="acc-set-left-buttons">
          <a className="profile-tab" href="">
            <span><CgProfile size={30}/> Profile</span>
            <span className="arrow-tab">{'>'}</span>
          </a>
          <a className="logout-tab" href="">
            <span><IoIosLogOut size={30} /> Logout</span>
            <span className="arrow-tab">{'>'}</span>
          </a>
        </div>
      </div>

      <div className="account-settings-edit">
        <h3>Edit your profile</h3>
        <label>First Name: {firstName}</label>
        <input
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
        />
        <label>Middle Name: {middleName}</label>
        <input
          type="text"
          onChange={(e) => {
            setMiddleName(e.target.value);
          }}
          value={middleName}
        />
        <label>Last Name: {lastName}</label>
        <input
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
        />
        <label>Username: {username}</label>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <label>Email: {email}</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <button onClick={() => handleUpdate()}>Save Changes</button>
      </div>
      <div className="account-settings-right">
        <img src="" alt="Profile Picture" />
        <h3>SOMETHING{}</h3> {/*Add name here*/}
        <p>@SOMETHING{}</p> {/* Add username here, @username.blahblah */}
        <button className="change-pfp-btn">Change Picture</button>
        <button className="delete-pfp-btn">Delete Picture</button>
      </div>
    </section>
  );
};

export default AccountSettings;
