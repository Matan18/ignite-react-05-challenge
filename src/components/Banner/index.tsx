import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

export const Banner = () => {
  const isImageVisible = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      h={["163px", "200px", "368px"]}
      alignItems="center"
      justifyContent="space-around"
      backgroundImage="/banner.png"
      backgroundRepeat="no-repeat"
      overflow="hidden"
    >
      <Box m="16px">
        <Text
          as="h2"
          w={["100%", "426px"]}
          fontSize={["20px", "24px", "36px"]}
          fontWeight="500"
          lineHeight="1.5em"
        >
          5 Continentes,<br />
          infinitas possibilidades.
        </Text>

        <Text
          as="p"
          w={["70%", "400px", "524px"]}
          fontSize={["14px", "16px", "20px"]}
          marginTop="20px"
          lineHeight="1.5em"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {isImageVisible && (
        <Box alignSelf="flex-end" transform="rotate(3deg)">
          <Image src="/airplane.svg" alt="avião" width="417" height="270" />
        </Box>
      )}
    </Flex>
  );
}