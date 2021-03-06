import { Box, Image } from "@chakra-ui/react";
import React from "react";

interface OneMovieImageProps {
  src: string;
  title: string;
}

const OneMovieImage: React.FC<OneMovieImageProps> = ({ src, title }) => {
  return (
    <Box flex={{ base: "1 1 auto", lg: "0 0 300px" }}>
      <Image src={src} alt={title} maxH={{ base: 600, lg: 450 }} maxW="100%" w="100%" />
    </Box>
  );
};
export default OneMovieImage;
