import { CircularProgress } from "@mui/material";
import React from "react";
import { LoaderContainer } from "./style";

export const Loader: React.FC<{
  isLoading?: boolean;
  extraStyles?: Record<string, string>;
  center?: boolean;
}> = ({ extraStyles, isLoading, center }) => {
  const style = center
    ? {
        left: `50%`,
        top: "50%",
        transform: "translate(-50%, -50%)",
      }
    : {};
  return (
    <LoaderContainer style={{ ...style, ...extraStyles }}>
      {isLoading && <CircularProgress size="2.5rem" />}
    </LoaderContainer>
  );
};
