import { getToken } from '@/features/auth'
import { storage } from '@/utils/storage'
import {
   createContext,
   useCallback,
   useContext,
   useEffect,
   useState,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type AuthInfo = {
   isChecking: boolean
   isAuthenticated: boolean
   token: string
   login: (token: string) => void
   logout: () => void
}

const AuthContext = createContext<AuthInfo | null>(null)

export const useAuth = () => {
   return useContext(AuthContext) as AuthInfo
}

const useAuthorization = () => {
   const navigate = useNavigate()
   const { search } = useLocation()

   const [isChecking, setIsChecking] = useState(false)
   const [isAuthenticated, setIsAuthenticated] = useState(false)
   const [token, setToken] = useState('')

   useEffect(() => {
      storage.clearToken()
      window.onbeforeunload = () => storage.clearToken()
   }, [])

   function login(token: string) {
      storage.setToken(token)
      setToken(token)
      setIsAuthenticated(true)
   }

   const logout = useCallback(() => {
      storage.clearToken()
      setToken('')
      setIsAuthenticated(false)
      navigate('/login', { replace: true })
   }, [navigate])

   useEffect(() => {
      if (search) {
         const code = new URLSearchParams(search).get('code')

         if (code) {
            setIsChecking(true)
            getToken(code)
               .then((token) => {
                  navigate('/', { replace: true })
                  login(token)
               })
               .catch(() => logout())
               .finally(() => setIsChecking(false))
         }
      }
   }, [search, navigate, logout])

   return {
      isChecking,
      isAuthenticated,
      token,
      login,
      logout,
   }
}

type AuthProps = {
   children: React.ReactNode
}

export const Auth = ({ children }: AuthProps) => {
   const auth = useAuthorization()

   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
