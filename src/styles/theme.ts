import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'custom.bg',
        color: 'custom.black',
      }
    }
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  colors: {
    custom: {
      'white': '#FFFFFF',
      'black': '#000000',
      'bg': '#F5F8FA',
      'highlight': '#FFBA08',
      'text': '#F5F8FA',
      'info': '#DADADA',
      'text_dark': '#47585B',
      'info_dark': '#999999',
    }
  }
})
