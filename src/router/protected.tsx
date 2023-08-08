import { Outlet } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Navbar } from '@/components/Navbar'
import { Profile } from '@/features/user'

const App = () => {
   return (
      <Layout>
         <Navbar />
         <Outlet />
      </Layout>
   )
}

export const protectedRoutes = [
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '',
            element: <Profile />,
         },
      ],
   },
]
