import { Artist } from '@/features/user/types'
import { Track } from '@/features/user/types/track'
import { axios } from '@/lib/axios'
import { useQuery } from 'react-query'

type ResponseTypes = 'artists' | 'tracks'

type AvailableTypes = Artist[] | Track[]

export type TimeRange = 'short_term' | 'medium_term' | 'long_term'

type TopConfig = {
   type: ResponseTypes
   limit?: number
   time_range: TimeRange
}

const getTop = async ({ type, ...params }: TopConfig) => {
   const response = await axios.get(`me/top/${type}`, { params })
   return response.data.items
}

export const useTop = <T extends AvailableTypes>(params: TopConfig) => {
   const query_key = `top_${params.type}`
   const { data, isLoading, isError } = useQuery<T>([query_key, params], () =>
      getTop({ ...params })
   )

   return {
      data,
      isLoading,
      isError,
   }
}
