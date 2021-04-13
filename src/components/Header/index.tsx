import { Flex, Image, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

interface Props {
  btnBack?: boolean
}

export function Header({ btnBack }: Props) {
  return (
    <Flex
      as="header"
      maxW="1440px"
      h={["50px", "100px"]}
      margin="0 auto"
      align="center"
      justify="center"
      position="relative"
    >
      {btnBack && (
        <NextLink href="/" passHref>
          <Link position="absolute" left={["1.5rem", "2.5rem", "6.5rem", "9.5rem"]}>
            <Image w={["24px", "32px"]} src="/icons/arrowLeft.svg" alt="world trip" />
          </Link>
        </NextLink>
      )}

      <Image
        w={["81px", "184px"]}
        src="/logo.svg"
        alt="world trip"
      />
    </Flex>
  )
}
