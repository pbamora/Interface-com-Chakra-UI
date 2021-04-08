import { Flex, Text, Box } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      width="100%"
      h={300}
      pos="relative"
      _before={{
        content: '""',
        bgImage: "url(/Background.png)",
        bgSize: "cover",
        bgRepeat: "no-repeat",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Flex
        width={1480}
        mx="auto"
        pos="relative"
        justify="space-evenly"
        align="center"
      >
        <Box>
          <Text fontWeight="normal" fontSize={36} color="white">
            5 continentes, <br /> Infinitas possibilidades.
          </Text>
          <Text fontWeight={400} fontSize={18} mt="2" color="gray.info">
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Box>
        <Box pos="relative" top="10">
          <img src="/Airplane.svg" alt="avião" width={390} />
        </Box>
      </Flex>
    </Flex>
  );
}
