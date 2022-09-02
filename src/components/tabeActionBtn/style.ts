import { styled } from "@mui/material";
import { COLORS } from "../../utils/colors";

export const Img = styled("img")({
  transform: `rotate(0deg)`,
  cursor: "pointer",
});

export const StyledDiv = styled("div")({
  position: "absolute",
  top: 35,
  right: 0,
  p: 1,
  backgroundColor: COLORS.white,
  boxShadow: "3px 2px 22px 1px rgba(0, 0, 0, 0.24)",
  width: "max-content",
  padding: "0.5rem 1rem",
});
