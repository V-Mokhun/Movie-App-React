import { Button, Flex, Heading, Img, List, ListItem, Stack } from "@chakra-ui/react";
import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DiscoverIcon from "../assets/img/discover.png";
import HeartIcon from "../assets/img/heart.png";
import HomeIcon from "../assets/img/home.svg";
import LogoutIcon from "../assets/img/logout.png";
import MovieIcon from "../assets/img/movie.png";
import TvShowIcon from "../assets/img/tv-show.png";
import { FirebaseContext } from "../context/firebaseContext";
import { StoreContext } from "../context/storeContext";
import { DISCOVER_ROUTE, HOME_ROUTE, PROFILE_ROUTE } from "../routes/routes";
import { handleLogOut } from "../utils";
import SidebarLink from "./SidebarLink";

interface SidebarProps {}

const MENU_ITEMS = [
  {
    icon: HomeIcon,
    route: HOME_ROUTE,
    text: "Home",
  },
  {
    icon: DiscoverIcon,
    route: DISCOVER_ROUTE,
    text: "Discover",
  },
];

const MENU_PRIVATE_ITEMS = [
  {
    icon: HeartIcon,
    route: PROFILE_ROUTE,
    text: "Watchlist",
  },
];

const CATEGORIES_ITEMS = [
  {
    icon: MovieIcon,
    route: DISCOVER_ROUTE,
    text: "Movies",
  },
  {
    icon: TvShowIcon,
    route: DISCOVER_ROUTE,
    text: "Tv Shows",
  },
];

const Sidebar: React.FC<SidebarProps> = () => {
  const { userStore } = useContext(StoreContext);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const onLogOut = useCallback(() => {
    if (firebase) {
      handleLogOut(firebase).then(() => navigate(HOME_ROUTE));
    }
  }, [firebase]);

  return (
    <Stack pl={4} pb={4} mr={4} height="100%" borderRight="1px solid #E2E8F0">
      <Heading as="h2" fontSize="3xl" textAlign="center" mb={6}>
        Movies
      </Heading>
      <Flex flexDirection="column">
        <Heading textTransform="uppercase" as="h3" fontSize="md" color="gray.400" mb={3}>
          Menu
        </Heading>
        <List spacing={3} mb={5}>
          {MENU_ITEMS.map((item) => (
            <ListItem key={item.text} display="flex" alignItems="center">
              <Img src={item.icon} alt={item.text} maxW="30" maxH="30" />
              <SidebarLink route={item.route}>{item.text}</SidebarLink>
            </ListItem>
          ))}

          {userStore?.isAuth &&
            MENU_PRIVATE_ITEMS.map((item) => (
              <ListItem key={item.text} display="flex" alignItems="center">
                <Img src={item.icon} alt={item.text} maxW="30" maxH="30" />
                <SidebarLink route={item.route}>{item.text}</SidebarLink>
              </ListItem>
            ))}
        </List>
      </Flex>
      <Flex flexDirection="column">
        <Heading textTransform="uppercase" as="h3" fontSize="md" color="gray.400" mb={3}>
          Categories
        </Heading>
        <List spacing={3} mb={5}>
          {CATEGORIES_ITEMS.map((item) => (
            <ListItem key={item.text} display="flex" alignItems="center">
              <Img src={item.icon} alt={item.text} maxW="30" maxH="30" />
              <SidebarLink route={item.route}>{item.text}</SidebarLink>
            </ListItem>
          ))}
        </List>
      </Flex>
      <Flex flexDirection="column">
        <Heading textTransform="uppercase" as="h3" fontSize="md" color="gray.400" mb={3}>
          General
        </Heading>
        <List spacing={3}>
          <ListItem display="flex" alignItems="center">
            <Img src={LogoutIcon} alt="Log out" maxW="30" maxH="30" />
            <Button onClick={onLogOut} ml={3} fontWeight="500" color="gray.500" fontSize="md">
              Log out
            </Button>
          </ListItem>
        </List>
      </Flex>
    </Stack>
  );
};
export default Sidebar;
