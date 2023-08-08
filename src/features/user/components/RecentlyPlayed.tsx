import { useRecentlyPlayedTracks } from '../api/getRecentlyPlayedTracks'
import { Heading, VStack } from '@chakra-ui/react'
import { format } from 'timeago.js'
import { ListItem } from './ListItem'
import { AnimatedList } from '@/components/AnimatedList'
import { LoadingList } from '@/features/user/components/LoadingList'

export const RecentlyPlayed = () => {
   const { recentlyPlayedTracks, isLoading } = useRecentlyPlayedTracks()
   return (
      <VStack w='full' py={10} spacing={5}>
         <Heading fontSize='xl' py={2}>
            Recently played
         </Heading>

         {isLoading && <LoadingList />}

         {!isLoading && (
            <AnimatedList>
               {recentlyPlayedTracks?.map((track) => (
                  <ListItem
                     key={track.played_at}
                     imageUrl={track.track.album.images[0]?.url}
                     title={track.track.name}
                     description={`${track.track.artists[0].name} - ${track.track.album.name}`}
                     footer={format(track.played_at)}
                  />
               ))}
            </AnimatedList>
         )}
      </VStack>
   )
}
