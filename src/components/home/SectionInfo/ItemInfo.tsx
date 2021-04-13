import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

interface Props {
  image: string
  text: string
}

export function ItemInfo({ image, text }: Props) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile ? (
        <Image src={image} w="85px" h="85px" mb="6" />
      ) : (
        <Text color="custom.highlight" fontSize="4xl" mr="2">•</Text>
      )}

      <Text fontSize={["md", "xl", "2xl"]} color="custom.text_dark" fontWeight="semibold">
        {text}
      </Text>
    </Flex>
  )
}
