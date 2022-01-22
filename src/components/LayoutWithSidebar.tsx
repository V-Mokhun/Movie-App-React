import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutWithSidebarProps {}

const LayoutWithSidebar: React.FC<LayoutWithSidebarProps> = ({ children }) => {
  return (
    <Flex>
      <Box sx={{ flex: "0 0 250px" }}>
        <Sidebar />
      </Box>
      <Box sx={{ flex: "1 1 auto" }}>
        <Header />
        <Box sx={{ flex: "1 1 auto" }}>
          <Container maxW="container.xl">{children}</Container>
        </Box>
      </Box>
    </Flex>
  );
};
export default LayoutWithSidebar;
