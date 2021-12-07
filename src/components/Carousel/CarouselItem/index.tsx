import { Box, Link as ChakraLink, Text } from "@chakra-ui/react"
import Link from "next/link"

type Props = {
  continent: ISimpleContinent;
}

export const CarouselItem = ({ continent }: Props) => (
  <Box
    bgImage={continent.imageUrl}
    bgRepeat="no-repeat"
    bgSize="cover"
    bgPos="center"
    h={["250px", "450px"]}
    w="100%"
    maxW="1250px"
  >
    <Link href={`/${continent.uid}`} passHref>
      <ChakraLink
        height="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text
          fontSize="48px"
          fontWeight="700"
          color="gray.200"
          lineHeight="1.5em"
        >{continent.name}</Text>
        <Text
          fontSize="24px"
          lineHeight="1.5em"
          color="gray.300"
        >{continent.message}</Text>
      </ChakraLink>
    </Link>
  </Box>
);