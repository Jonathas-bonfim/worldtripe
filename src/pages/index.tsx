import { Flex } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Peculiaritys from "./components/Peculiarities";


export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Peculiaritys />
    </Flex>
  )
}
