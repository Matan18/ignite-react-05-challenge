import { Box, Divider, Text } from '@chakra-ui/react'
import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Carousel } from '../components/Carousel'
import { TravelTypeList } from '../components/TravelTypeList'

type Props = { continents: ISimpleContinent[] };

export default function Home({ continents }: Props) {
  return (
    <Box w="100%" maxW="1440px" m="auto" overflowX="hidden" bg="gray.200" >
      <Head>
        <title>WorldTrip</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <TravelTypeList />
      <Divider w="90px" borderColor="gray.800" borderWidth="2px" m="80px auto 52px" />
      <Text
        as="h2"
        color="gray.800"
        fontWeight="500"
        textAlign="center"
        fontSize={["20px", "25px", "36px"]}
        lineHeight="1.5em"
        marginBottom="52px"
      >Vamos nessa?<br />
        Então escolha seu continente</Text>
      <Carousel continents={continents} />
    </Box>
  )
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data: continents } = await axios.get<ISimpleContinent[]>('http://localhost:3001/api/hello');

  return { props: { continents } };
};
