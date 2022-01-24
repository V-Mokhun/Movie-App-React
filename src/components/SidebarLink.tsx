import { Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface SidebarLinkProps {
  route: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ children, route }) => {
  return (
    <Link
      display="block"
      position="relative"
      width="100%"
      pr={2}
      fontWeight="500"
      fontSize="md"
      color="gray.500"
      sx={{
        _after: {
          content: '""',
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translate(-5px, -50%)",
          height: "100%",
          width: 1,
          background: "#ED64A6",
          borderRadius: 5,
          opacity: 0,
          transition: "transform .3s linear, opacity .3s linear",
        },
        _hover: {
          color: "#ED64A6",

          _after: {
            opacity: 1,
            transform: "translate(0, -50%)",
          },
        },
      }}
      ml={3}
      to={route}
      as={RouterLink}
    >
      {children}
    </Link>
  );
};
export default SidebarLink;
