export const Button = {
  baseStyle: {
    fontWeight: "bold", // Normally, it is "semibold"
  },
  sizes: {
    md: {
      fontSize: "md",
      px: "24px",
    },
    lg: {
      fontSize: "lg",
      px: "32px",
    },
  },
  variants: {
    pink: {
      color: "white",
      bg: "pink.400",
      _hover: {
        bg: "red.100",
        color: "pink.400",
      },
    },
    red: {
      color: "pink.400",
      bg: "red.100",
      _hover: {
        bg: "pink.400",
        color: "white",
      },
    },
  },
};
