import { BoxProps, chakra } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

const AnimatedBox = chakra(motion.div, {
   sholdForwardProp: isValidMotionProp,
})

type AnimatedListProps = {
   children: React.ReactNode
} & BoxProps

export const AnimatedList = (props: AnimatedListProps) => {
   const { children, ...rest } = props

   return (
      //@ts-ignore
      <AnimatedBox
         w='full'
         display='flex'
         flexDir='column'
         gap={5}
         initial='hidden'
         animate='visible'
         variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
         {...rest}
      >
         {children}
      </AnimatedBox>
   )
}

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } }

const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible,
}

export const AnimatedItem = ({ children }: { children: React.ReactNode }) => {
   return (
      <AnimatedBox w='full' variants={itemVariants}>
         {children}
      </AnimatedBox>
   )
}
