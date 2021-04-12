import { Box, Flex, Image, Text } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex
      h="335px"
      mb="32px"
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
        <Box>
          <Text fontWeight="500" fontSize="4xl" lineHeight="50px" color="custom.text">
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>

          <Text maxW="524px" fontSize="large" mt="5" color="custom.info">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image src="/images/airplane.svg" alt="Airplane" mt="100px" transform="rotate(3deg)" />
      </Flex>
    </Flex>
  )
}
