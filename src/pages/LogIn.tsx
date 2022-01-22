import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import React, { FormEvent, useContext, useMemo, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import LayoutWithoutSidebar from "../components/LayoutWithoutSidebar";
import { FirebaseContext } from "../context/firebaseContext";
import { HOME_ROUTE, SIGN_UP_ROUTE } from "../routes/routes";
import { validateEmail } from "../utils";

interface LogInProps {}

const LogIn: React.FC<LogInProps> = () => {
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isEmailError = useMemo(() => !validateEmail(email.trim()), [email]);
  const isPasswordError = useMemo(() => !password.trim(), [password]);
  const isError = isPasswordError || isEmailError;

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (firebase) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigate(HOME_ROUTE);
        })
        .catch((err) => {
          setEmail("");
          setPassword("");
          setError(err.message);
        });
    }
    setIsLoading(false);
  };

  return (
    <LayoutWithoutSidebar>
      <Container
        maxW="container.md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Flex
          flexDirection="column"
          sx={{
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
            p: 5,
          }}
        >
          <Heading as="h1" size="xl" mb={5} fontWeight={400} textAlign="center">
            Log In
          </Heading>
          <form onSubmit={handleFormSubmit}>
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
            <FormControl isInvalid={isEmailError}>
              <FormLabel mr={0}>
                <Text fontSize="sm">Email address</Text>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {isEmailError && <FormErrorMessage>Provide valid email</FormErrorMessage>}
              </FormLabel>
            </FormControl>
            <FormControl isInvalid={isPasswordError} mb={4}>
              <FormLabel mr={0}>
                <Text fontSize="sm">Password</Text>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isPasswordError && <FormErrorMessage>Provide valid password</FormErrorMessage>}
              </FormLabel>
            </FormControl>
            <Button type="submit" mb={2} disabled={isError || isLoading} size="lg" variant="pink" width="100%">
              Log in
            </Button>
            <Text textAlign="right" fontSize="lg">
              Don`t have an account?{" "}
              <Link as={RouterLink} color="teal.500" to={SIGN_UP_ROUTE}>
                Sign up now!
              </Link>
            </Text>
          </form>
        </Flex>
      </Container>
    </LayoutWithoutSidebar>
  );
};
export default LogIn;
