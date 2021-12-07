import { Box } from "@chakra-ui/react";
import { Extra } from "./Extra";

type Props = {
  extras: IExtra[];
}

export const Resume = ({ extras }: Props) => {
  return (
    <Box
      as="ul"
      w={["90%", "90%", "490px"]}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      {extras.map((extra, index) => (
        <Extra extra={extra} key={extra.name} />
      ))}
    </Box>
  );
}