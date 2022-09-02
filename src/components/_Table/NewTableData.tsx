import React from "react";
import { NoTableData, Styledtable, Tablecontainer } from "./styles";
import { Spacer } from "../Spacer";
import classNames from "classnames";
import { ClickAway } from "../tabeActionBtn";
import NOTABLE_DATA_ICON from "../../assets/no-table-icon.svg";
import SHOW_MORE_CIRCLE from "../../assets/more-circle.svg";
import { Loader } from "../Loader";

export type TableRow<T extends string> = Record<T, React.ReactNode>;
export interface IActionBtn<T extends string> {
  label: string;
  onClick: (datum: TableRow<T>) => void;
}
export interface tableProps<T extends string> {
  data: TableRow<T>[];
  onActionBtnClicked?: (data: Record<T, React.ReactNode>) => void;
  actionBtn?: boolean;
  header?: T[];
  noDataMessage?: string;
  rowClicked?: (data: TableRow<T>) => void;
  isLoading?: boolean;
}

export const TableD = <T extends string>({
  data,
  header,
  onActionBtnClicked,
  actionBtn,
  noDataMessage,
  rowClicked,
  isLoading,
}: tableProps<T>) => {
  if (data.length === 0 && !header) return null;

  const headers =
    data.length === 0 && header
      ? header
      : (Object.keys(data[0]) as (keyof typeof data[0])[]);

  const onClick = (data: TableRow<T>, header: T) => {
    if (header.toLowerCase() === "action" && onActionBtnClicked) {
      onActionBtnClicked(data);
    }
  };

  const handleRowClicked = (row: TableRow<T>) => {
    if (!rowClicked) return;
    rowClicked(row);
  };

  const check = (item: T): boolean => {
    const itemTransform = item.toLowerCase();

    if (itemTransform === "userid") return true;
    if (itemTransform === "id") return true;

    return false;
  };
  return (
    <>
      <Tablecontainer>
        <Loader isLoading={isLoading} center />
        <Styledtable $rowclicked={false}>
          <thead>
            <tr>
              {headers?.map((header) => {
                if (check(header)) return null;
                return <th key={header}>{header}</th>;
              })}
            </tr>
          </thead>
          {/* find a way to replace due to validateDOMNesting rule */}
          {/* <Spacer height={20} /> */}
          <tbody>

            {data.map((datum, i) => {
              return (
                <tr key={i} onClick={() => handleRowClicked(datum)}>
                  {headers?.map((header, i) => {
                    if (check(header)) return null;

                    if (header === "Action" && !actionBtn)
                      return (
                        <td key={i} onClick={(e) => e.stopPropagation()}>
                          <div
                            className={classNames({
                              action: header === "Action",
                            })}
                            onClick={() => onClick(datum, header)}
                          >
                            {typeof datum[header] === "object" ? (
                              datum[header]
                            ) : (
                              <img src={SHOW_MORE_CIRCLE} alt="actionbtn" />
                            )}
                          </div>
                        </td>
                      );

                    if (header === "Action" && actionBtn)
                      return (
                        <td key={i} onClick={(e) => e.stopPropagation()}>
                          <ClickAway>{datum[header]}</ClickAway>
                        </td>
                      );

                    return (
                      <td key={i}>
                        <div
                          className={classNames({
                            action: header === "Action",
                            active: datum[header] === "Active",
                            inactive: datum[header] === "Inactive",
                          })}
                        >
                          {datum[header]}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Styledtable>
      </Tablecontainer>
      {data.length === 0 && (
        <NoTableData>
          <img src={NOTABLE_DATA_ICON} alt="no_table_data" style={{ border: '1px dashed red' }} />
          <Spacer height="20px" />
          <p>{noDataMessage ? noDataMessage : "No table data found"}</p>
        </NoTableData>
      )}
    </>
  );
};
