
import React, { createContext, useState, useEffect } from 'react';
import type { User } from '../types';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<User>;
  signup: (name: string, email: string, password: string) => Promise<User>;
  logout: () => void;
}

// In a real app, this would be an API call. We'll simulate with localStorage.
const FAKE_USERS_DB_KEY = 'sweet_delights_users';
const CURRENT_USER_KEY = 'sweet_delights_current_user';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem(CURRENT_USER_KEY);
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse current user from localStorage", error);
      return null;
    }
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }, [currentUser]);

  const getUsers = () => {
    try {
        const users = localStorage.getItem(FAKE_USERS_DB_KEY);
        return users ? JSON.parse(users) : [];
    } catch (e) {
        return [];
    }
  };

  const login = async (email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = getUsers();
            const user = users.find((u: any) => u.email === email && u.password === password);
            if (user) {
                const userData: User = { id: user.id, name: user.name, email: user.email };
                setCurrentUser(userData);
                resolve(userData);
            } else {
                reject(new Error("Invalid email or password"));
            }
        }, 500);
    });
  };

  const signup = async (name: string, email: string, password: string): Promise<User> => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = getUsers();
            if (users.some((u: any) => u.email === email)) {
                return reject(new Error("An account with this email already exists."));
            }

            const newUser = {
                id: `user_${Date.now()}`,
                name,
                email,
                password, // In a real app, you MUST hash passwords
            };
            
            users.push(newUser);
            localStorage.setItem(FAKE_USERS_DB_KEY, JSON.stringify(users));

            const userData: User = { id: newUser.id, name: newUser.name, email: newUser.email };
            setCurrentUser(userData);
            resolve(userData);
        }, 500);
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
