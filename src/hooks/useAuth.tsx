"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// User type for authentication
interface User {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  signInWithApple: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  // Mock authentication functions for demonstration
  const signInWithGoogle = async () => {
    setLoading(true)
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock successful Google sign-in
      const mockUser: User = {
        uid: "google-user-123",
        email: "user@gmail.com",
        displayName: "John Doe",
        photoURL: "https://lh3.googleusercontent.com/a/default-user=s96-c",
      }
      setUser(mockUser)
      localStorage.setItem("crystal-heaven-user", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Google sign-in error:", error)
    } finally {
      setLoading(false)
    }
  }

  const signInWithApple = async () => {
    setLoading(true)
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock successful Apple sign-in
      const mockUser: User = {
        uid: "apple-user-456",
        email: "user@icloud.com",
        displayName: "Jane Smith",
        photoURL: null,
      }
      setUser(mockUser)
      localStorage.setItem("crystal-heaven-user", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Apple sign-in error:", error)
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setUser(null)
      localStorage.removeItem("crystal-heaven-user")
    } catch (error) {
      console.error("Sign-out error:", error)
    }
  }

  // Check for existing user session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("crystal-heaven-user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Error parsing saved user:", error)
        localStorage.removeItem("crystal-heaven-user")
      }
    }
  }, [])

  const value: AuthContextType = {
    user,
    loading,
    signInWithGoogle,
    signInWithApple,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
