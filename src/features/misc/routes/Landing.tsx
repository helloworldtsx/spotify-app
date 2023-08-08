import { login } from '@/features/auth'
import {
   Heading,
   Text,
   Button,
   useColorModeValue,
   chakra,
   shouldForwardProp,
} from '@chakra-ui/react'
import { FaSpotify } from 'react-icons/fa'
import { isValidMotionProp, motion } from 'framer-motion'

const Box = chakra(motion.div, {
   /**
    * Allow motion props and non-Chakra props to be forwarded.
    */
   shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
})

export const Landing = () => {
   return (
      <Box
         h='full'
         display='flex'
         flexDirection='column'
         justifyContent='center'
         gap={10}
         textAlign='center'
         alignItems='center'
         initial={{
            opacity: 0,
            scale: 0.1,
         }}
         animate={{
            opacity: 1,
            scale: 1,
         }}
         //@ts-ignore
         transition={{
            duration: 0.4,
         }}
      >
         <Heading>SpotifyViewer</Heading>
         <Text fontSize='xl'>
            Please login with your Spotify account, to see your track or artist
            ranking!
         </Text>

         <Box whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <Button
               onClick={login}
               leftIcon={<FaSpotify />}
               colorScheme={useColorModeValue('teal', 'gray')}
            >
               Start using
            </Button>
         </Box>
      </Box>
   )
}
