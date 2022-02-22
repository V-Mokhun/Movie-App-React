import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { FormEvent, useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarImage from "../assets/img/avatar.png";
import { StoreContext } from "../context/storeContext";
import { LOG_IN_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE, SIGN_UP_ROUTE } from "../routes/routes";

interface HeaderProps {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = observer(({ menuActive, setMenuActive }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const { userStore } = useContext(StoreContext);
  const [isLargerThan991] = useMediaQuery(`(min-width: 991px)`);
  const [isLargerThan768] = useMediaQuery(`(min-width: 768px)`);
  const [isLargerThan479] = useMediaQuery(`(min-width: 479px)`);

  const handleFormSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!searchValue.trim()) {
        setSearchValue("");
        return;
      }

      localStorage.setItem("search-query", searchValue);
      userStore?.setSearchQuery(searchValue);

      setSearchValue("");
      navigate(SEARCH_ROUTE);
    },
    [searchValue]
  );

  return (
    <Container
      maxW="container.xl"
      py={isLargerThan768 ? 4 : 2}
      px={isLargerThan768 ? 4 : 2}
      position="sticky"
      top={0}
      zIndex={10}
      backgroundColor="white"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <form style={{ maxWidth: 400, width: "100%", marginRight: 20 }} onSubmit={handleFormSubmit}>
          <InputGroup>
            <Input
              pl={5}
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <IconButton type="submit" aria-label="search" icon={<SearchIcon />} />
          </InputGroup>
        </form>
        <Flex alignItems="center" gap={3}>
          {userStore?.isAuth ? (
            <Link to={PROFILE_ROUTE}>
              <Flex
                h={!isLargerThan768 ? "40px" : "auto"}
                w={!isLargerThan768 ? "40px" : "auto"}
                alignItems="center"
                flexWrap="wrap"
              >
                <Image
                  flex={`0 0 ${isLargerThan768 ? "50px" : "40px"}`}
                  mr={isLargerThan768 ? 2 : 0}
                  borderRadius="full"
                  boxSize={isLargerThan768 ? "50px" : "40px"}
                  w={isLargerThan768 ? "50px" : "40px"}
                  h={isLargerThan768 ? "50px" : "40px"}
                  src={AvatarImage}
                  alt={userStore.user?.displayName || "user"}
                />
                {isLargerThan768 && <Text fontSize="md">{userStore.user?.displayName}</Text>}
              </Flex>
            </Link>
          ) : (
            isLargerThan479 && (
              <ButtonGroup>
                <Link to={LOG_IN_ROUTE}>
                  <Button size="md" variant="pink">
                    Log In
                  </Button>
                </Link>
                {isLargerThan768 && (
                  <Link to={SIGN_UP_ROUTE}>
                    <Button size="md" variant="red">
                      Sign up
                    </Button>
                  </Link>
                )}
              </ButtonGroup>
            )
          )}
          {setMenuActive && !isLargerThan991 && (
            <IconButton
              className="menu__icon"
              aria-label={!menuActive ? "Open menu" : "Close menu"}
              onClick={() => setMenuActive((prev: boolean) => !prev)}
              icon={!menuActive ? <HamburgerIcon /> : <CloseIcon />}
            />
          )}
        </Flex>
      </Flex>
    </Container>
  );
});
export default Header;
