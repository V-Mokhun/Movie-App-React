import { Box, Heading, Link } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useCallback, useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import WatchList from "../components/WatchList";
import { StoreContext } from "../context/storeContext";
import { MOVIES_ROUTE } from "../routes/routes";

const Profile: React.FC = observer(() => {
  const { userStore } = useContext(StoreContext);

  const onRemove = useCallback((id: number) => userStore?.removeFromWatchList(id), [userStore]);

  return userStore && userStore.user ? (
    <Box pb={5}>
      <Heading as="h1" fontSize="5xl" fontWeight={700} color="gray.500" mb={5}>
        Hello, {userStore.user.displayName}
      </Heading>
      {userStore.watchList.length > 0 ? (
        <>
          <Heading as="h2" fontSize="2xl" fontWeight={500} mb={4}>
            Your watchlist:
          </Heading>
          <WatchList onRemove={onRemove} movies={userStore.watchList} />
        </>
      ) : (
        <Heading as="h2" fontSize="2xl" fontWeight={500}>
          You have no movies in your watchlist!
          <Link ml={2} as={ReactRouterLink} color="#ed64a6" to={MOVIES_ROUTE}>
            Go add some!
          </Link>
        </Heading>
      )}
    </Box>
  ) : null;
});

export default Profile;
