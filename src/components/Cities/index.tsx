import { Flex } from "@chakra-ui/react";
import { City } from "./City";

type Props = {
  cities: IMainCity[];
}

export const Cities = ({ cities }: Props) => {
  return (
    <Flex
      w="100%"
      wrap="wrap"
      gridGap={["20px", "20px", "45px"]}
      justifyContent="center"
    >
      {cities.map(city => (
        <City city={city} key={city.name} />
      ))}
    </Flex>
  );
}