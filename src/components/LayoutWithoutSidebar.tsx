import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

interface LayoutWithoutSidebarProps {}

const LayoutWithoutSidebar: React.FC<LayoutWithoutSidebarProps> = ({ children }) => {
  return (
    <Box sx={{ flex: "1 1 auto" }}>
      <Header />
      <Box sx={{ flex: "1 1 auto" }}>
        <Container maxW="container.xl">{children}</Container>
      </Box>
    </Box>
  );
};
export default LayoutWithoutSidebar;
