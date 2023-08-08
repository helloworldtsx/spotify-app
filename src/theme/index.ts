import {
   extendTheme,
   StyleFunctionProps,
   theme as base,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { components } from './components'

const colors = {
   brand: {
      50: '#909091',
      100: '#79797b',
      200: '#414147',
      300: '#35353a',
      400: '#2a2a2e',
      500: '#202023',
      600: '#1d1d20',
      700: '#1a1a1c',
      800: '#161619',
      900: '#131315',
   },
}

const styles = {
   global: (props: StyleFunctionProps) => ({
      body: {
         bg: mode('white', 'brand.500')(props),
      },
   }),
}

export const theme = extendTheme({
   colors,
   components,
   styles,
   fonts: {
      heading: `'Inter', ${base.fonts.heading}`,
      body: `'Inter', ${base.fonts.body}`,
   },
})
