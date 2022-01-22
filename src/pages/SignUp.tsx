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
import { HOME_ROUTE, LOG_IN_ROUTE } from "../routes/routes";
import { validateEmail } from "../utils";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const isNameError = useMemo(() => !name.trim(), [name]);
  const isEmailError = useMemo(() => !validateEmail(email.trim()), [email]);
  const isPasswordError = useMemo(() => !password.trim(), [password]);
  const isError = isPasswordError || isEmailError || isNameError;

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (firebase) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          if (result && result.user) {
            result.user.updateProfile({ displayName: name });
          }
        })
        .then(() => {
          navigate(HOME_ROUTE);
        })
        .catch((err) => {
          setName("");
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
            Sign up
          </Heading>
          <form onSubmit={handleFormSubmit}>
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
            <FormControl isInvalid={isNameError}>
              <FormLabel mr={0}>
                <Text fontSize="sm">Name</Text>
                <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                {isNameError && <FormErrorMessage>Provide valid name</FormErrorMessage>}
              </FormLabel>
            </FormControl>
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
              Sign up
            </Button>
            <Text textAlign="right" fontSize="lg">
              Already have an account?{" "}
              <Link color="teal.500" as={RouterLink} to={LOG_IN_ROUTE}>
                Log in now!
              </Link>
            </Text>
          </form>
        </Flex>
      </Container>
    </LayoutWithoutSidebar>
  );
};
export default SignUp;
