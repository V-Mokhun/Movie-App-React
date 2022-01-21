import { SearchIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Container, Flex, IconButton, Input, InputGroup } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/storeContext";
import { LOG_IN_ROUTE, SIGN_UP_ROUTE } from "../routes/routes";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [searchValue, setSearchValue] = useState("");
  const { userStore } = useContext(StoreContext);

  return (
    <Container maxW="container.xl" pt={4}>
      <Flex alignItems="center" justifyContent="space-between">
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
        {userStore?.isAuth ? (
          <p>user</p>
        ) : (
          <ButtonGroup>
            <Link to={LOG_IN_ROUTE}>
              <Button
                color="white"
                bg="pink.400"
                _hover={{
                  bg: "red.100",
                  color: "pink.400",
                }}
              >
                Log In
              </Button>
            </Link>
            <Link to={SIGN_UP_ROUTE}>
              <Button
                _hover={{
                  bg: "pink.400",
                  color: "white",
                }}
                bg="red.100"
                color="pink.400"
              >
                Sign up
              </Button>
            </Link>
          </ButtonGroup>
        )}
      </Flex>
    </Container>
  );
};
export default Header;
