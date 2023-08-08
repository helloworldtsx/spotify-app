import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { Auth } from '@/lib/authorization'
import { theme } from '@/theme'
import { Fonts } from '@/providers/fonts'

const client = new QueryClient()

type AppProviderProps = {
   children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
   return (
      <QueryClientProvider client={client}>
         <BrowserRouter>
            <Fonts />
            <ChakraProvider theme={theme}>
               <Auth>{children}</Auth>
            </ChakraProvider>
         </BrowserRouter>
      </QueryClientProvider>
   )
}
