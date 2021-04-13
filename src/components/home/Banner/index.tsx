import { Box, Flex, Image, Text } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex
      h={["163px", "335px"]}
      mb={["0", "0", "32px"]}
      px="4"
      justify="center"
      bg="url(/images/imgBackground.jpg) no-repeat 50% 30%"
    >
      <Flex
        w="100%"
        maxW="1160px"
        margin="0 auto"
        align="center"
        justify="space-between"
        position="relative"
        objectFit="cover"
      >
        <Box maxW={["100%", "100%", "524px"]}>
          <Text fontWeight="500" fontSize={["xl", "4xl"]} lineHeight={["30px", "50px"]} color="custom.text">
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>

          <Text fontSize={["0.8rem", "xl"]} mt={["1", "5"]} color="custom.info">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          display={['none', 'none', 'block']}
          src="/images/airplane.svg"
          alt="Airplane"
          mt="100px"
          transform="rotate(3deg)"
        />
      </Flex>
    </Flex>
  )
}
