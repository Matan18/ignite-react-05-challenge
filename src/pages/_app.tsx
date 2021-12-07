import { AppProps } from "next/app";
import { ChakraProvider, StylesProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Header } from "../components/Header";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp