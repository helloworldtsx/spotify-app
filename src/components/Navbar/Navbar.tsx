import { useAuth } from '@/lib/authorization'
import { ArrowForwardIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
   HStack,
   IconButton,
   useColorMode,
   useColorModeValue,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = () => {
   const { logout } = useAuth()
   const { toggleColorMode } = useColorMode()

   return (
      <HStack as='nav' w='full' pt={2} pb={10} justifyContent='flex-end'>
         <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
               style={{ display: 'inline-block' }}
               key={useColorModeValue('light', 'dark')}
               initial={{ y: -20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 10, opacity: 0 }}
               transition={{ duration: 0.2 }}
            >
               <IconButton
                  aria-label='Toggle theme'
                  colorScheme={useColorModeValue('purple', 'orange')}
                  icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                  onClick={toggleColorMode}
               />
            </motion.div>
         </AnimatePresence>

         <IconButton
            aria-label='Logout'
            colorScheme={useColorModeValue('purple', 'orange')}
            variant='outline'
            icon={<ArrowForwardIcon />}
            onClick={logout}
         />
      </HStack>
   )
}
