import { Flex } from "@chakra-ui/react";
import { AppBar } from "../components/AppBar";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <AppBar />
      <Banner />

      <TravelTypes />
    </>
  );
}
