import {
   Box,
   chakra,
   Image,
   Select,
   VStack,
   useColorModeValue,
   Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { TimeRange, useTop } from '../api/getTop'
import { Artist } from '../types'

export const TopArtists = () => {
   const [timeRange, setTimeRange] = useState<TimeRange>('short_term')
   const borderColor = useColorModeValue('gray.100', 'whiteAlpha.100')

   const { data: artists, isLoading } = useTop<Artist[]>({
      time_range: timeRange,
      type: 'artists',
      limit: 50,
   })

   return (
      <VStack w='full' py={10} spacing={5}>
         <Box alignSelf='flex-end'>
            <Select
               value={timeRange}
               onChange={(e) => setTimeRange(e.target.value as TimeRange)}
            >
               <option value='short_term'>Last 4 weeks</option>
               <option value='medium_term'>Last 6 months</option>
               <option value='long_term'>All time</option>
            </Select>
         </Box>

         {isLoading && (
            <VStack paddingTop={40}>
               <Text>Loading...</Text>
            </VStack>
         )}

         {!isLoading && (
            <Box
               w='100%'
               mx='auto'
               sx={{
                  columnGap: '8px',
                  columnCount: [1, 1, 2, 3],
               }}
            >
               {!isLoading &&
                  artists?.map((artist, i) => {
                     return (
                        <Box
                           borderWidth='1px'
                           borderColor={borderColor}
                           rounded='md'
                           marginBottom='8px'
                           overflow='hidden'
                           key={artist.id}
                        >
                           <Image
                              src={artist.images[0].url}
                              alt={artist.name}
                              objectFit='cover'
                              w='100%'
                           />

                           <Box p={{ base: 3, sm: 5 }}>
                              <chakra.h3
                                 fontSize={{ base: 'lg', sm: '2xl' }}
                                 fontWeight='bold'
                                 lineHeight='1.2'
                                 mb={2}
                              >
                                 {i + 1}. {artist.name}
                              </chakra.h3>
                           </Box>
                        </Box>
                     )
                  })}
            </Box>
         )}
      </VStack>
   )
}
