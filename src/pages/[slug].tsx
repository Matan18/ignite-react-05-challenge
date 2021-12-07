import { Box, Button, Text, useBreakpointValue } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Cities } from "../components/Cities";
import { Resume } from "../components/Resume";

type Props = {
  continent: IContinent;
}

export default function ContinentPage({ continent }: Props) {
  const {
    uid,
    name,
    extra,
    imageUrl,
    mainCities,
    description,
  } = continent;
  const chevronSize = useBreakpointValue({
    base: '20px',
    md: '32px',
  })
  const { back } = useRouter();

  return (
    <Box
      w="100%"
      maxW="1440px"
      m="auto"
      overflowX="hidden"
      position="relative"
      bg="gray.200"
    >
      <Button
        top="30px"
        zIndex="1"
        position="fixed"
        onClick={back}
      >
        <Image
          src="/back.svg"
          width={chevronSize || '20px'}
          height={chevronSize || '20px'}
          alt="back button"
        />
      </Button>
      <Image
        src={{
          src: imageUrl,
          height: 500,
          width: 1440,
        }}
        alt={uid}
      />
      <Text
        as="h1"
        top={["30px", "30px", "-120px"]}
        left={["50%", "50%", "140px"]}
        transform={["translateX(-50%)", "translateX(-50%)", "translateX(0)"]}
        pos={["absolute", "absolute", "relative"]}
        fontWeight="600"
        fontSize="48px"
        lineHeight="1.5em"
        display="flex"
      >
        {name}
      </Text>

      <Box
        as="section"
        maxW="1240px"
        m="auto"
      >
        <Box
          marginTop={["24px", "24px", ""]}
          marginBottom={["16px", "16px", ""]}
          w="100%"
          as="section"
          display="flex"
          flexDir={["column", "column", "row"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            as="p"
            w={["90%", "90%", "600px"]}
            color="gray.800"
            fontSize="24px"
            lineHeight="1.5em"
            textAlign="justify"
            marginRight={["", "", "24px"]}
          >{description}</Text>
          <Resume extras={extra} />
        </Box>
        <Text
          as="h2"
          fontSize="36px"
          fontWeight="500"
          color="gray.800"
          lineHeight="1.5em"
          marginTop="40px"
          marginLeft={["5%", "5%", "0"]}
          marginBottom={["20px", "20px", "40px"]}
        >Cidades +100</Text>
        <Cities cities={mainCities} />
      </Box>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: 'blocking',
    paths: []
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { data: continent } = await axios.get<IContinent>(`http://localhost:3001/api/continent/${params.slug}`);

  return {
    props: { continent }
  }
}