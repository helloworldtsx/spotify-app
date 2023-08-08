import { Layout } from '@/components/Layout'
import { Landing } from '@/features/misc'
import { Navigate } from 'react-router-dom'

export const publicRoutes = [
   {
      path: '/login',
      element: (
         <Layout>
            <Landing />
         </Layout>
      ),
   },
   {
      path: '*',
      element: <Navigate to='/login' />,
   },
]
