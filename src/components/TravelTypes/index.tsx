import { Flex, HStack, Box, Text, Link } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex
      display="flex"
      mx="auto"
      justify="center"
      align="center"
      mt={["6", "24"]}
    >
      <HStack spacing="32">
        <Link>
          <Box mx="auto" justify="center" align="center">
            <img src="/cocktail.svg" alt="cocktail" />
            <Text fontWeight={600} fontSize={16} mt="4">
              vida Noturna
            </Text>
          </Box>
        </Link>
        <Link>
          <Box mx="auto" justify="center" align="center">
            <img src="/surf.svg" alt="surf" />
            <Text fontWeight={600} fontSize={16} mt="4">
              praia
            </Text>
          </Box>
        </Link>
        <Link>
          <Box mx="auto" justify="center" align="center">
            <img src="/building.svg" alt="building" />
            <Text fontWeight={600} fontSize={16} mt="4">
              Moderno
            </Text>
          </Box>
        </Link>
        <Link>
          <Box mx="auto" justify="center" align="center">
            <img src="/museum.svg" alt="museum" />
            <Text fontWeight={600} fontSize={16} mt="4">
              clássico
            </Text>
          </Box>
        </Link>
        <Link>
          <Box mx="auto" justify="center" align="center">
            <img src="/earth.svg" alt="earth" />
            <Text fontWeight={600} fontSize={16} mt="4">
              e mais...
            </Text>
          </Box>
        </Link>
      </HStack>
    </Flex>
  );
}
