import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface SliderItemProps {
  continent: string;
  title: string;
  summary: string;
  image: string;
}

export function SliderItem({ continent, title, summary, image }: SliderItemProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={`url('${image}')`}
      bgPosition="100% 30%"
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
    >
      <Link href={`/continent/${continent}`}>
        <a>
          <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
            {title}
          </Heading>

          <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>
            {summary}
          </Text>
        </a>
      </Link>
    </Flex>
  )
}
