import { Box } from "@chakra-ui/react";
import { ImageType, TravelTypeItem } from "./TravelTypeItem";

type TravelType = {
  text: string;
  type: ImageType;
}

export const TravelTypeList = () => {
  const travelsTypes: TravelType[] = [
    {
      text: 'vida noturna',
      type: 'cocktail',
    },
    {
      text: 'praia',
      type: 'surf'
    },
    {
      text: 'moderno',
      type: 'building'
    },
    {
      text: 'clássico',
      type: 'museum',
    },
    {
      text: 'e mais...',
      type: 'earth'
    }
  ]
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      margin="80px auto 0"
      w={["90%", "60%", "100%"]}
      gridTemplateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", ""]}
      alignItems="center"
      justifyItems="center"
      justifyContent="space-between"
    >
      {travelsTypes.map((item) => (
        <TravelTypeItem key={item.text} {...item} />
      ))}
    </Box >
  );
}