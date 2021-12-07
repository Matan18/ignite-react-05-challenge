import { Box, Flex, Text, Image as ChackraImage } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  city: IMainCity;
}

export const City = ({ city }: Props) => {
  const {
    name,
    flag,
    image,
    country,
  } = city;
  return (
    <Box
      w="255px"
      h="279px"
      bg="gray.100"
      overflow="hidden"
      borderRadius="4px"
    >
      <Image
        src={{
          src: image,
          width: 255,
          height: 173
        }}
        alt={name}
      />
      <Flex
        p="0 24px"
        marginTop="18px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Text
            as="p"
            fontSize="20px"
            color="gray.800"
            fontWeight="600"
            lineHeight="1.25em"
          >{name}</Text>
          <Text
            as="span"
            fontSize="16px"
            color="gray.900"
            lineHeight="26px"
          >{country}</Text>
        </Box>
        <ChackraImage
          w="30px"
          h="30px"
          src={flag}
          alt={country}
          borderRadius="50%"
        />
      </Flex>
    </Box>
  );
}