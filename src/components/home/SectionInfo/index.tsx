import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'

export function SectionInfo() {
  return (
    <Box>
      <Flex maxW="1192px" m="0 auto" p="5rem 1rem" align="center" justify="space-between">
        <Flex direction="column" align="center">
          <Image src="/icons/cocktail.svg" alt="cocktail" />
          <Text fontSize="xl" mt="6" color="custom.text_dark" fontWeight="semibold">
            vida noturna
          </Text>
        </Flex>

        <Flex direction="column" align="center">
          <Image src="/icons/surf.svg" alt="surf" />
          <Text fontSize="xl" mt="6" color="custom.text_dark" fontWeight="semibold">
            praia
          </Text>
        </Flex>

        <Flex direction="column" align="center">
          <Image src="/icons/building.svg" alt="building" />
          <Text fontSize="xl" mt="6" color="custom.text_dark" fontWeight="semibold">
            moderno
          </Text>
        </Flex>

        <Flex direction="column" align="center">
          <Image src="/icons/museum.svg" alt="museum" />
          <Text fontSize="xl" mt="6" color="custom.text_dark" fontWeight="semibold">
            clássico
          </Text>
        </Flex>

        <Flex direction="column" align="center">
          <Image src="/icons/earth.svg" alt="earth" />
          <Text fontSize="xl" mt="6" color="custom.text_dark" fontWeight="semibold">
            e mais...
          </Text>
        </Flex>
      </Flex>

      <Divider borderColor="#47585B" border="2px solid #47585B" size="10" w="100px" mx="auto" />

      <Text fontSize="3xl" fontWeight="medium" my="3.25rem" textAlign="center" color="custom.text_dark">
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
    </Box>
  )
}
