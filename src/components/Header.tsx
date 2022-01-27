import { SearchIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Container, Flex, IconButton, Image, Input, InputGroup, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { FormEvent, useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarImage from "../assets/img/avatar.png";
import { StoreContext } from "../context/storeContext";
import { LOG_IN_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE, SIGN_UP_ROUTE } from "../routes/routes";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = observer(() => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const { userStore } = useContext(StoreContext);

  const handleFormSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      localStorage.setItem("search-query", searchValue);
      userStore?.setSearchQuery(searchValue);

      setSearchValue("");
      navigate(SEARCH_ROUTE);
    },
    [searchValue]
  );

  return (
    <Container maxW="container.xl" py={4} position="sticky" top={0} zIndex={10} backgroundColor="white">
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
        {userStore?.isAuth ? (
          <Link to={PROFILE_ROUTE}>
            <Flex alignItems="center">
              <Image
                mr={2}
                borderRadius="full"
                boxSize={50}
                src={AvatarImage}
                alt={userStore.user?.displayName || "user"}
              />
              <Text fontSize="md">{userStore.user?.displayName}</Text>
            </Flex>
          </Link>
        ) : (
          <ButtonGroup>
            <Link to={LOG_IN_ROUTE}>
              <Button size="md" variant="pink">
                Log In
              </Button>
            </Link>
            <Link to={SIGN_UP_ROUTE}>
              <Button size="md" variant="red">
                Sign up
              </Button>
            </Link>
          </ButtonGroup>
        )}
      </Flex>
    </Container>
  );
});
export default Header;
