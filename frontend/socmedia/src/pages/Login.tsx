import { useState, FormEvent } from "react";
import { useLogin } from "../hooks/useLogin";
import '../styles/Login.css';
import circles from '../assets/loginsignup/small_circles.png'

const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error } = useLogin()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await login( emailOrUsername, password)
    }

    return (
        <section className="login">
            <header className="image"></header>
            <div className="login-container">
                <img src={circles} alt="circle" />
                <h1>Hello,</h1>
                <h1>Welcome Back...</h1>
                <p>Please enter your email and password</p>
                <form className="login-form" onSubmit={handleSubmit}>

                    <label>Email or Username: </label>
                    <input 
                        type="text"
                        onChange={(e) => setEmailOrUsername(e.target.value)}
                        value={emailOrUsername}
                    />
                    <label>Password: </label>
                    <input 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <div className="form-actions">
                        <button className="login-btn" disabled={isLoading}>Login</button>
                        {error && <div className="error">{error}</div>}
                        <p>Don't have an account yet? <a href="/signup">Create Account</a></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login