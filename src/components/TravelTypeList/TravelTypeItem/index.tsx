import { Flex, Text, Circle, useBreakpointValue } from "@chakra-ui/react";
import Image from 'next/image';
export type ImageType = 'cocktail' | 'surf' | 'building' | 'museum' | 'earth';

type ImageMap = {
  [key in ImageType]: string;
}

const map: ImageMap = {
  cocktail: '/icons/cocktail.svg',
  surf: '/icons/surf.svg',
  building: '/icons/building.svg',
  museum: '/icons/museum.svg',
  earth: '/icons/earth.svg',
};

type Props = {
  text: string;
  type: ImageType;
}

export const TravelTypeItem = ({ text, type }: Props) => {
  const isImageVisible = useBreakpointValue({
    base: false,
    md: true,
  })
  return (
    <Flex
      m="0 auto"
      minW="120px"
      alignItems="center"
      direction={isImageVisible ? "column" : "row"}
    >
      {isImageVisible ? (
        <Image src={map[type]} alt={text} width="85px" height="85px" />
      ) : (
        <Circle bg="yellow.900" w="8px" h="8px" />
      )}
      <Text
        as="p"
        color="gray.800"
        fontWeight="500"
        fontSize="18px"
        marginLeft={["8px", "8px", "0"]}
      >{text}</Text>
    </Flex>
  );
}