import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import Peculiarity from "./peculiarity";


export default function Peculiaritys() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >

      <GridItem>
        <Peculiarity icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Peculiarity icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Peculiarity icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Peculiarity icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Peculiarity icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}