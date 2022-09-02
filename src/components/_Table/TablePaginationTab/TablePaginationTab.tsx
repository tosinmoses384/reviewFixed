import { Box } from "@mui/material";
import React from "react";
import { Spacer } from "../../";
import CustomTab, { tabProps } from "../../CustomTab";
import { Pagination, paginationProps } from "../../_Pagination";
import { TableD, tableProps } from "../NewTableData";
import { paginationContainer } from "../TablePagination/style";

export interface ItablePagination<T extends string>
  extends tableProps<T>,
    paginationProps,
    tabProps {
  children?: React.ReactNode;
}

export const TablePaginationTab = <T extends string>({
  setCurrentPage,
  count,
  selected,
  arrows,
  tablists,
  onTabClick,
  disabled,
  children,
  ...restProps
}: ItablePagination<T>) => {
  return (
    <>
      <CustomTab
        onTabClick={onTabClick}
        tablists={tablists}
        disabled={disabled}
      />
      <Spacer height={50} />
      {children && (
        <>
          {children}
          <Spacer height={30} />
        </>
      )}
      <TableD {...restProps} />
      <Spacer height={30} />
      <Box sx={paginationContainer}>
        <Pagination
          arrows={false}
          count={count}
          setCurrentPage={setCurrentPage}
          selected={selected}
          disabled={disabled}
        />
      </Box>
    </>
  );
};
