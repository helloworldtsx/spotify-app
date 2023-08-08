import { axios } from '@/lib/axios'
import { useQuery } from 'react-query'
import { Track } from '../types'

type RecentlyTrack = {
   track: Track
   played_at: string
}

const getRecentlyPlayedTracks = async (): Promise<RecentlyTrack[]> => {
   const { data } = await axios.get('me/player/recently-played?limit=50')
   return data.items
}

export const useRecentlyPlayedTracks = () => {
   const { data, isLoading, isError } = useQuery<RecentlyTrack[]>(
      'recently_tracks',
      () => getRecentlyPlayedTracks()
   )

   return {
      recentlyPlayedTracks: data,
      isLoading,
      isError,
   }
}
