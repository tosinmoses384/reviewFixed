import { useMediaQuery } from "@mui/material";

export const useMediaQueries = () => {
  const matchesSm = useMediaQuery((theme: any) =>
    theme?.breakpoints?.down("sm")
  );
  return matchesSm;
};
