import { Flex, Box } from "@chakra-ui/react";

export function AppBar() {
  return (
    <Flex w="100%" as="header" h={90} align="center">
      <Box maxW={1480} mx="auto" align="center" justify="center">
        <img src="/Logo.svg" alt="logo worldtrip" />
      </Box>
    </Flex>
  );
}
