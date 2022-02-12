import { Flex } from "@chakra-ui/react";
import React from "react";
import PremieresList from "../components/PremieresList";
import ReleasesList from "../components/ReleasesList";
import TopList from "../components/TopList";
import { Months } from "../types";

interface HomeProps {}

const date = new Date();
const year = date.getFullYear();
const month = date.toLocaleString("eng", { month: "long" }).toUpperCase() as Months;

const Home: React.FC<HomeProps> = () => {
  return (
    <Flex flexDirection="column">
      <PremieresList year={year} month={month} />
      <ReleasesList year={year} month={month} />
      <TopList year={year} month={month} />
    </Flex>
  );
};
export default Home;
