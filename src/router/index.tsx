import { useAuth } from '@/lib/authorization'
import { publicRoutes } from '@/router/public'
import { protectedRoutes } from '@/router/protected'
import { useRoutes } from 'react-router-dom'

export const AppRouter = () => {
   const { isAuthenticated, isChecking } = useAuth()

   const routes = isAuthenticated ? protectedRoutes : publicRoutes
   const element = useRoutes([...routes])

   if (isChecking) return null

   return <>{element}</>
}
