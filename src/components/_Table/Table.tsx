import React, { createRef, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper, { PaperProps } from "@mui/material/Paper";
import {
  TableContainerStyled,
  Spacer,
  TableCellStyled,
  ClickAway,
} from "../index";

import { COLORS } from "../../utils/colors";

interface tableProp {
  header: string[];
  data: any[];
  rowClicked?: (e: any, i: number, ref: any) => void;
  actionBtn?: Record<string, any>[];
  notHover?: boolean;
}

export const TableCom: React.FC<tableProp> = ({
  data,
  header,
  rowClicked,
  actionBtn,
  notHover = false,
}) => {
  const PaperCom = (props: PaperProps) => <Paper {...props} elevation={0} />;
  const ref = useRef<any>([]);
  ref.current = data.map((element, i) => ref.current[i] ?? createRef());

  const onClickRow = (e: any, i: number, ref: any) => {
    if (rowClicked) {
      rowClicked(e, i, ref);
    }
    return;
  };

  const colorStatus = (status: any) => {
    const color =
      status === "Supplied"
        ? COLORS.orange
        : status === "Warehoused"
        ? COLORS.red
        : COLORS.green;
    return { color };
  };
  return (
    <TableContainerStyled 
    // component={PaperCom}
    >
      <Spacer height={20} />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((thead, i) => (
              <TableCellStyled key={`${i}${thead}`}>{thead}</TableCellStyled>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dataI, i: number) => {
            return (
              <TableRow key={i} onClick={(e: any) => onClickRow(e, i, ref)}>
                <TableCellStyled>{dataI.weight}</TableCellStyled>
                <TableCellStyled>{dataI.item}</TableCellStyled>
                <TableCellStyled>{dataI.qty}</TableCellStyled>
                <TableCellStyled>{dataI.size}</TableCellStyled>
                <TableCellStyled style={colorStatus(dataI.status)}>
                  {dataI.status}
                </TableCellStyled>
                <TableCellStyled>
                  <div style={{ width: "max-content" }} ref={ref.current[i]}>
                    <ClickAway>
                      {actionBtn?.map((btn, i) => (
                        <div key={i}>
                          <div onClick={() => btn.onClick(dataI)}>
                            {btn.label}
                          </div>
                          <Spacer height={10} />
                        </div>
                      ))}
                      <Spacer height={10} />
                    </ClickAway>
                  </div>
                </TableCellStyled>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainerStyled>
  );
};
