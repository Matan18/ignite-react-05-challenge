import { Box, Text } from "@chakra-ui/react"

type Props = {
  extra: IExtra;
}

export const Extra = ({ extra }: Props) => {
  const { name, value } = extra;
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems={["flex-start", "flex-start", "center"]}
    >
      <Text
        as="span"
        display="block"
        fontSize="48px"
        fontWeight="600"
        lineHeight="1.5em"
        textColor="yellow.800"
      >
        {value}
      </Text>
      <Text
        as="span"
        display="block"
        fontSize="36px"
        fontWeight="600"
        lineHeight="1.5em"
        textColor="gray.800"
      >
        {name}
      </Text>
    </Box>
  )
}