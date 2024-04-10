import { useState, FormEvent } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error } = useLogin()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await login( emailOrUsername, password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>

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

            <button disabled={isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login