import { Skeleton, useColorModeValue } from '@chakra-ui/react'

export const LoadingList = () => {
   const startColor = useColorModeValue('', 'brand.200')
   const endColor = useColorModeValue('', 'brand.400')
   const Skeletons = []

   for (let i = 0; i <= 50; i++) {
      Skeletons.push(
         <Skeleton
            key={i}
            height={{
               base: '100px',
               md: '200px',
            }}
            w='full'
            borderRadius='md'
            startColor={startColor}
            endColor={endColor}
         />
      )
   }

   return <>{Skeletons}</>
}
