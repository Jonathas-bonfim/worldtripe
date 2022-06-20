import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Peculiarities from "./components/Peculiarities";
import Separator from "./components/Separator";
import Slider from "./components/slider";


export default function Home() {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Banner />
        <Peculiarities />
        <Separator />
        <Heading
          textAlign="center"
          fontWeight="500"
          mb={["5", "14"]}
          fontSize={["lg",
            "3xl",
            "4xl"]}
        >
          Vamos nessa?<br />Então escolha seu continente
        </Heading>
        <Slider />
      </Flex>
    </>
  )
}
