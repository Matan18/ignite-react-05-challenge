import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    colors: {
      black: {
        '900': "#000000"
      },
      gray: {
        '900': '#999999',
        '850': 'rgba(153, 153, 153, 0.5)',
        '800': '#47585B',
        '300': '#DADADA',
        '200': '#F5F8FA',
        '100': '#FFFFFF'
      },
      yellow: {
        '800': '#FFBA08',
        '450': 'rgba(255,186,8,0.5)',
      },
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
    },
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.50'
      }
    }
  }
})
