import * as React from "react";
import Box from "@mui/material/Box";
import { Popover } from "@mui/material";
import SHOW_MORE_CIRCLE from "../../assets/more-circle.svg";
import { Img } from "./style";
import { COLORS } from "../../utils/colors";

interface ClickAwayProps {
  children?: React.ReactNode;
}
export const ClickAway: React.FC<ClickAwayProps> = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Img
        aria-describedby={id}
        src={SHOW_MORE_CIRCLE}
        alt="show more"
        // onClick={handleClick}
      />
      <Popover
        sx={{ boxShadow: "none" }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Box
          onClick={handleClose}
          sx={{
            backgroundColor: "#fff",
            padding: "1rem",
            color: COLORS.darkBlue,
          }}
        >
          {children}
        </Box>
      </Popover>
    </>
  );
};
