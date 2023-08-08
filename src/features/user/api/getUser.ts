import { useQuery } from 'react-query'
import { axios } from '@/lib/axios'
import { User } from '../types'

const getUser = async (): Promise<User> => {
   const { data } = await axios.get('me')
   return data
}

export const useUser = () => {
   const { data, isLoading, isError } = useQuery('user', getUser)

   return {
      user: data,
      isLoading,
      error: isError,
   }
}
