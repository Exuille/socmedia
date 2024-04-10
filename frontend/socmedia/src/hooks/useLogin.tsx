import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState<any>(null)
    const { dispatch } = useAuthContext()

    const login = async (emailOrUsername: string, password: string) => {
        setIsLoading(true)
        setError(null)

        const isEmail = emailOrUsername.includes('@');
        const payload = isEmail 
            ? { emailAddress: emailOrUsername, password } 
            : { username: emailOrUsername, password };
        
        console.log("Request payload:", JSON.stringify(payload))
        const response = await fetch('api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })

        const json = await response.json()

        if (!response) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // Save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // Update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }
    return { login, isLoading, error}
}