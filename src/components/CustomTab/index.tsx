import TabsUnstyled from "@mui/base/TabsUnstyled";
import { Box } from "@mui/material";
import React from "react";
import { Tab, TabsList, box } from "./styles";

export interface tabProps {
  tablists: string[];
  onTabClick: (tab: string) => void;
  disabled?: boolean;
}

const CustomTab: React.FC<tabProps> = ({ tablists, onTabClick, disabled }) => {
  return (
    <Box sx={box}>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          {tablists.map((tab, index) => (
            <Tab
              key={index}
              onClick={() => onTabClick(tab)}
              disabled={disabled}
            >
              {tab}
            </Tab>
          ))}
        </TabsList>
      </TabsUnstyled>
    </Box>
  );
};

export default CustomTab;
