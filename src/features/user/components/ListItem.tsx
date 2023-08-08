import { AnimatedItem } from '@/components/AnimatedList'
import {
   Card,
   CardBody,
   CardFooter,
   Heading,
   Image,
   Stack,
   Text,
   useColorModeValue,
} from '@chakra-ui/react'

type ListItemProps = {
   title: string
   imageUrl: string
   description?: string | number
   footer?: string | number
}

export const ListItem = ({
   title,
   imageUrl,
   description,
   footer,
}: ListItemProps) => {
   // TODO: Add animations
   return (
      <AnimatedItem>
         <Card
            w='full'
            direction='row'
            overflow='hidden'
            variant='outline'
            boxShadow='md'
            borderColor={useColorModeValue('gray.100', 'whiteAlpha.100')}
            size={{
               base: 'sm',
               md: 'md',
            }}
         >
            <Image
               objectFit='cover'
               maxW={{
                  base: '100px',
                  md: '200px',
               }}
               style={{
                  aspectRatio: '1 / 1',
               }}
               src={imageUrl}
               alt={title}
            />
            <Stack>
               <CardBody>
                  <Heading size='md' wordBreak='break-word' >{title}</Heading>

                  <Text py='2'>{description}</Text>
               </CardBody>

               <CardFooter>{footer}</CardFooter>
            </Stack>
         </Card>
      </AnimatedItem>
   )
}
