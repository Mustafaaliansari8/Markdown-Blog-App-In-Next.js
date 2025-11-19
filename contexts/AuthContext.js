'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find(u => u.email === email && u.password === password)
      
      if (user) {
        const userWithoutPassword = { id: user.id, name: user.name, email: user.email }
        setUser(userWithoutPassword)
        localStorage.setItem('user', JSON.stringify(userWithoutPassword))
        router.push('/')
        return { success: true }
      } else {
        return { success: false, error: 'Invalid email or password' }
      }
    } catch (error) {
      return { success: false, error: 'Login failed' }
    }
  }

  const signup = async (name, email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      
      if (users.find(u => u.email === email)) {
        return { success: false, error: 'Email already exists' }
      }

      const newUser = {
        id: Date.now(),
        name,
        email,
        password
      }
      
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      
      const userWithoutPassword = { id: newUser.id, name: newUser.name, email: newUser.email }
      setUser(userWithoutPassword)
      localStorage.setItem('user', JSON.stringify(userWithoutPassword))
      router.push('/')
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Signup failed' }
    }
  }

  const logout = async () => {
    setUser(null)
    localStorage.removeItem('user')
    router.push('/')
  }

  const loginWithGoogle = () => {
    alert('Google login not configured')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loginWithGoogle, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}