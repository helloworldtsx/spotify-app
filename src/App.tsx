import { AppProvider } from '@/providers/app'
import { AppRouter } from '@/router'
import './app.css'

function App() {
   return (
      <AppProvider>
         <AppRouter />
      </AppProvider>
   )
}

export default App
