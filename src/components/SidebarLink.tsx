import { Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
  route: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ children, route }) => {
  return (
    <NavLink to={route} className={(navData) => (navData.isActive ? "sidebar__link active" : "sidebar__link")}>
      <Text pr={2} fontWeight="500" fontSize="md" ml={3}>
        {children}
      </Text>
    </NavLink>
  );
};
export default SidebarLink;
