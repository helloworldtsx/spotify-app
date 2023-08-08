import { ListItem } from './ListItem'
import { Box, Select, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { TimeRange, useTop } from '../api/getTop'
import { Track } from '../types'
import { LoadingList } from './LoadingList'

export const TopTracks = () => {
   const [timeRange, setTimeRange] = useState<TimeRange>('short_term')
   const { data: tracks, isLoading } = useTop<Track[]>({
      time_range: timeRange,
      type: 'tracks',
      limit: 50,
   })

   return (
      <VStack w='full' py={10} spacing={5}>
         <Box alignSelf='flex-end' display='flex'>
            <Select
               value={timeRange}
               onChange={(e) => setTimeRange(e.target.value as TimeRange)}
            >
               <option value='short_term'>Last 4 weeks</option>
               <option value='medium_term'>Last 6 months</option>
               <option value='long_term'>All time</option>
            </Select>
         </Box>

         {isLoading && <LoadingList />}

         {!isLoading &&
            tracks?.map((track) => {
               if (!track.name) return null

               const description = `${track.artists
                  .map((artist) => artist.name)
                  .join(', ')} - ${track.album.name}
               `

               return (
                  <ListItem
                     key={track.id}
                     title={track.name}
                     imageUrl={track.album.images[0].url}
                     description={description}
                  />
               )
            })}
      </VStack>
   )
}
