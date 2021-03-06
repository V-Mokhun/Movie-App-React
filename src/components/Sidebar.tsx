import { Button, Flex, Heading, Img, List, ListItem, Stack, useMediaQuery } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useCallback, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DiscoverIcon from "../assets/img/discover.png";
import HeartIcon from "../assets/img/heart.png";
import HomeIcon from "../assets/img/home.svg";
import LogoutIcon from "../assets/img/logout.png";
import MovieIcon from "../assets/img/movie.png";
import { FirebaseContext } from "../context/firebaseContext";
import { StoreContext } from "../context/storeContext";
import {
  AWAIT_MOVIES_ROUTE,
  BEST_MOVIES_ROUTE,
  DISCOVER_ROUTE,
  HOME_ROUTE,
  LOG_IN_ROUTE,
  MOVIES_ROUTE,
  POPULAR_MOVIES_ROUTE,
  PREMIERE_MOVIES_ROUTE,
  PROFILE_ROUTE,
  RELEASE_MOVIES_ROUTE,
  SIGN_UP_ROUTE,
} from "../routes/routes";
import { handleLogOut } from "../utils";
import SidebarLink from "./SidebarLink";

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
    route: MOVIES_ROUTE,
    text: "All",
  },
  {
    icon: MovieIcon,
    route: BEST_MOVIES_ROUTE,
    text: "Best",
  },
  {
    icon: MovieIcon,
    route: POPULAR_MOVIES_ROUTE,
    text: "Popular",
  },
  {
    icon: MovieIcon,
    route: PREMIERE_MOVIES_ROUTE,
    text: "Premiere",
  },
  {
    icon: MovieIcon,
    route: RELEASE_MOVIES_ROUTE,
    text: "Release",
  },
  {
    icon: MovieIcon,
    route: AWAIT_MOVIES_ROUTE,
    text: "Awaited",
  },
];

const Sidebar: React.FC = observer(() => {
  const { userStore } = useContext(StoreContext);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [isLargerThan479] = useMediaQuery(`(min-width: 479px)`);

  const onLogOut = useCallback(() => {
    if (firebase) {
      handleLogOut(firebase).then(() => navigate(HOME_ROUTE));
    }
  }, [firebase]);

  return (
    <Stack
      pl={4}
      pb={4}
      mr={{ base: 0, xl: 4 }}
      height="100%"
      borderRightWidth={1}
      borderRightColor="gray.300"
      borderRightStyle="solid"
    >
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
      {userStore?.isAuth && (
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
      )}
      {!userStore?.isAuth && !isLargerThan479 && (
        <Flex direction="column" gap={2}>
          <Link to={LOG_IN_ROUTE}>
            <Button minW={120} size="md" variant="pink">
              Log In
            </Button>
          </Link>
          <Link to={SIGN_UP_ROUTE}>
            <Button minW={120} size="md" variant="red">
              Sign up
            </Button>
          </Link>
        </Flex>
      )}
    </Stack>
  );
});

export default Sidebar;
