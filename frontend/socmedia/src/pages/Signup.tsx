import { useState, FormEvent } from "react";
import { useSignup } from "../hooks/useSignup";
import '../styles/Signup.css'
import circles from '../assets/loginsignup/small_circles.png'

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
        <section className="signup">
            <header className="image--s"></header>
            <div className="signup-container">
                <img src={circles} alt="circle" />
                <div className="get-started">
                    <h1>Get Started</h1>
                </div>
                <form className="signup-form" onSubmit={handleSubmit}>
                <div className="name-container">
                        <div className="fn-input">
                            <label>First Name: </label>
                            <input 
                                className="fn-input"
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                            />
                        </div>
                        <div className="mn-input">
                            <label>Middle Name: </label>
                            <input 
                                className="mn-input"
                                type="text"
                                onChange={(e) => setMiddleName(e.target.value)}
                                value={middleName}
                            />
                        </div>
                    </div>
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
                    <div className="form-actions--s">
                        <button disabled={isLoading}>Signup</button>
                        {error && <div className="error">{error}</div>}
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Signup