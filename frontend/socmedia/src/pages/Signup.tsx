import { useState, FormEvent } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await signup(firstName, middleName, lastName, username, email, password, confirmPassword)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Signup</h3>

            <label>First Name: </label>
            <input 
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
            />
            <label>Middle Name: </label>
            <input 
                type="text"
                onChange={(e) => setMiddleName(e.target.value)}
                value={middleName}
            />
            <label>Last Name: </label>
            <input 
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />
            <label>Email: </label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Username: </label>
            <input 
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <label>Password: </label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <label>Confirm Passowrd: </label>
            <input 
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            />

            <button disabled={isLoading}>Signup</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup