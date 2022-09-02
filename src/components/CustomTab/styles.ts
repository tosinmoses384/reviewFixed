import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { styled } from "@mui/material";
import { COLORS } from "../../utils/colors";

export const Tab = styled(TabUnstyled)`
  color: #6c757d;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  max-width: 240px;
  padding: 12px 16px;
  border: 1px solid #6c757d;
  border-right: none;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  &:last-child {
    border-right: 1px solid #6c757d;
  }
  &:hover {
    background-color: ${COLORS.darkBlue};
    color: #fff;
  }

  &:focus {
    color: #fff;
    background-color: ${COLORS.primaryMain};
    border: 1px solid ${COLORS.primaryMain};
  }

  &.${tabUnstyledClasses.selected} {
    color: #fff;
    background-color: ${COLORS.primaryMain};
  }
`;

export const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
`;

export const TabsList = styled(TabsListUnstyled)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "700px",
  alignItems: "center",
  justifyContent: " flex-start",
  alignContent: " flex-start",
  overflow: "scroll",
}));

export const box = {
  width: "100%",
  overflow: "scroll",
  // border: "1px solid #A7A7A7",
  borderBottom: "none",
  borderRight: "none",
  // padding: "1rem",
};
