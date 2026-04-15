import { useEffect, useState, type PropsWithChildren } from "react";
import { UserContext, type AuthStatus } from "./UserContext";
import { users, type User } from "../data/user-mock.data";

export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')
    const [user, setUser] = useState<User | null>(null)

    const handleLogin = (userId: number) => {
        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log('User not found')
            setAuthStatus('not-authenticated');
            setUser(null);
            return false;
        };
        setAuthStatus('authenticated');
        setUser(user);
        localStorage.setItem('userId', userId.toString())
        return true;
    }

    const handleLogout = () => {
        localStorage.removeItem('userId');
        setAuthStatus('not-authenticated');
        setUser(null);
    }

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) handleLogin(+storedUserId);
    }, [])

    return (
        <UserContext.Provider
            value={{
                authStatus,
                user,
                login: handleLogin,
                logout: handleLogout,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}