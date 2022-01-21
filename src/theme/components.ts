export const Button = {
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "0",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },
  variants: {
    solid: {
      bg: "pink.400",
      color: "white",
    },
    outline: {
      bg: "red.100",
      color: "pink.400",
    },
  },
  defaultProps: {
    size: "sm",
    variant: "solid",
  },
};
