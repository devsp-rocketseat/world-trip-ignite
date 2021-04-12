import { Flex, Image } from '@chakra-ui/react'

interface Props {
  btnBack?: boolean
}

export function Header({ btnBack }: Props) {
  return (
    <Flex maxW="1440px" h="100px" align="center" justify="center" position="relative">
      {btnBack && (
        <Image
          src="/icons/arrowLeft.svg"
          alt="world trip"
          position="absolute"
          left="9.5rem"
          cursor="pointer"
        />
      )}

      <Image src="/logo.svg" alt="world trip" />
    </Flex>
  )
}
