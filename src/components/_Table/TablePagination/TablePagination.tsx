import { Box } from "@mui/material";
import React from "react";
import { Spacer } from "../../";
import { Pagination, paginationProps } from "../../_Pagination";
import { TableD, tableProps } from "../NewTableData";
import { paginationContainer } from "./style";

interface ItablePagination<T extends string>
  extends tableProps<T>,
    paginationProps {}

export const TablePagination = <T extends string>({
  setCurrentPage,
  count,
  selected,
  arrows,
  ...restProps
}: ItablePagination<T>) => {
  console.log('this is pagination');
  return (
    <>
      <TableD {...restProps} />
      <Spacer height={30} />
      <Box sx={paginationContainer} style={{ border: '1px dashed red' }}>
        <Pagination
          arrows={false}
          count={count}
          setCurrentPage={setCurrentPage}
          selected={selected}
        />
      </Box>
    </>
  );
};
