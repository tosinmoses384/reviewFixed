import { styled } from "@mui/material";
import { COLORS } from "../../utils/colors";

export const List = styled("ul")({
  listStyle: "none",
  padding: "0.8em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  width: "max-content",
  borderRadius: "0.5em",
  fontSize: "0.8rem",
});

export const Button = styled("button")({
  // padding: "0.5em",

  margin: "0.4em",
  width: "2.1rem",
  height: "1.81rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  backgroundColor: "#1C1C39",
  color: "#fff",
  fontSize: "0.8rem",
  cursor: "pointer",
  opacity: "0.3",
  borderRadius: "0.2em",
});

export const ButtonSelected = styled("button")({
  margin: "0.4em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "2.1rem",
  height: "1.81rem",
  border: "none",
  backgroundColor: COLORS.primaryMain,
  color: "#fff",
  opacity: 1,
  borderRadius: "0.2em",
  fontSize: "0.8rem",
  cursor: "pointer",
});

export const Stylednav = styled("nav")`
  display: flex;
  align-items: center;
  ${(props: any) => props.theme.breakpoints.down("md")} {
    flex-direction: column;
    align-items: flex-end;
  }
`;
