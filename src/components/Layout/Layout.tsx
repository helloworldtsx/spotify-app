import {
   Box,
   Container,
   Flex,
   Link,
   Text,
   useColorModeValue,
} from '@chakra-ui/react'

type LayoutProps = {
   children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
   return (
      <Container
         paddingY={5}
         maxW='container.md'
         minH='100%'
         display='grid'
         gridTemplateRows='auto 50px'
      >
         <Box as='main'>{children}</Box>

         <Flex
            justifyContent='center'
            textAlign='center'
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            as='footer'
         >
            <Text>
               Made with ❤️ by&nbsp;
               <Link
                  isExternal
                  href='https://github.com/Christian-Velez/spotifyviewer'
               >
                  Christian Velez
               </Link>
            </Text>
         </Flex>
      </Container>
   )
}
