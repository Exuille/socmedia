import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState<any>(null)
    const { dispatch } = useAuthContext()

    const signup = async (firstName: string, middleName: string, lastName: string, username: string, email: string, password: string, confirmPassword: string) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({firstName, middleName, lastName, username, email, password, confirmPassword})
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
    return { signup, isLoading, error}
}