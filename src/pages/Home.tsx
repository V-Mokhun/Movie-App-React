import { Stack } from "@chakra-ui/react";
import React from "react";
import PremieresList from "../components/PremieresList";
import ReleasesList from "../components/ReleasesList";
import { Months } from "../types";

interface HomeProps {}

const date = new Date();
const year = date.getFullYear();
const month = date.toLocaleString("eng", { month: "long" }).toUpperCase() as Months;

const Home: React.FC<HomeProps> = () => {
  return (
    <Stack>
      <PremieresList year={year} month={month} />
      <ReleasesList year={year} month={month} />
    </Stack>
  );
};
export default Home;
