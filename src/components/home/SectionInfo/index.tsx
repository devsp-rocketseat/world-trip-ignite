import { Box, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react'

import { ItemInfo } from './ItemInfo'

export function SectionInfo() {
  return (
    <Box>
      <Grid
        templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
        w="100%"
        justify="space-between"
        align="center"
        py={["10", "20"]}
        mx="auto"
        maxW="1160px"
        flexWrap="wrap"
        gap={[1, 5]}
      >
        <GridItem>
          <ItemInfo image="/icons/cocktail.svg" text="vida noturna" />
        </GridItem>

        <GridItem>
          <ItemInfo image="/icons/surf.svg" text="praia" />
        </GridItem>

        <GridItem>
          <ItemInfo image="/icons/building.svg" text="moderno" />
        </GridItem>

        <GridItem>
          <ItemInfo image="/icons/museum.svg" text="clássico" />
        </GridItem>

        <GridItem colSpan={[2, 2, 2, 1]}>
          <ItemInfo image="/icons/earth.svg" text="e mais..." />
        </GridItem>
      </Grid>

      <Divider borderColor="#47585B" border="2px solid #47585B" size="10" w="100px" mx="auto" />

      <Text
        fontSize={["lg", "3xl", "4xl"]}
        fontWeight="medium"
        my={["8", "14", "14"]}
        textAlign="center"
        color="custom.text_dark"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
    </Box>
  )
}
