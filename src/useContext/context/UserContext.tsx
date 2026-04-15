import { createContext, useState, type PropsWithChildren } from 'react';
import { users, type User } from '../data/user-mock.data';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated'

interface UserContextProps {
    authStatus: AuthStatus;
    user: User | null;

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
        return true;
    }

    const handleLogout = () => {
        setAuthStatus('not-authenticated');
        setUser(null);
    }

    return (
        <UserContext
            value={{
                authStatus,
                user,
                login: handleLogin,
                logout: handleLogout,
            }}
        >
            {children}
        </UserContext>
    )
}