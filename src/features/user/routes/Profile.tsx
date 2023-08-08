import {
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
   useColorModeValue,
   VStack,
} from '@chakra-ui/react'
import { RecentlyPlayed, TopArtists, TopTracks } from '../components'

export const Profile = () => {
   return (
      <VStack w='full' alignItems='flex-start' spacing={5} pt={10}>
         <Tabs w='full' variant='enclosed' colorScheme='teal' isFitted>
            <TabList
               borderColor={useColorModeValue('gray.100', 'whiteAlpha.100')}
            >
               <Tab>Recently played</Tab>
               <Tab>Top artists</Tab>
               <Tab>Top tracks</Tab>
            </TabList>

            <TabPanels>
               <TabPanel p={0}>
                  <RecentlyPlayed />
               </TabPanel>

               <TabPanel p={0}>
                  <TopArtists />
               </TabPanel>

               <TabPanel p={0}>
                  <TopTracks />
               </TabPanel>
            </TabPanels>
         </Tabs>
      </VStack>
   )
}
