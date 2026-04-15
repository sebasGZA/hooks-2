import { createContext, useEffect, useState, type PropsWithChildren } from 'react';
import { users, type User } from '../data/user-mock.data';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated'

interface UserContextProps {
    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean;

    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps)

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
        if (storedUserId) {
            handleLogin(+storedUserId)
        } else {
            handleLogout();
        }
    }, [])

    return (
        <UserContext
            value={{
                authStatus,
                isAuthenticated: authStatus === 'authenticated',
                user,
                login: handleLogin,
                logout: handleLogout,
            }}
        >
            {children}
        </UserContext>
    )
}