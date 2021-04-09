import { Divider, Center, Text } from "@chakra-ui/react";
import { AppBar } from "../components/AppBar";
import { Banner } from "../components/Banner";
import { Slides } from "../components/Slides";
import { TravelTypes } from "../components/TravelTypes";
import "../styles/styles.module.css";

export default function Home() {
  return (
    <>
      <AppBar />
      <Banner />

      <TravelTypes />

      <Center py="24">
        <Divider w={200} orientation="horizontal" variant="solid" />
      </Center>

      <Center mb="20">
        <Text align="center" fontWeight="medium" fontSize={32}>
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Center>

      <Slides />
    </>
  );
}
