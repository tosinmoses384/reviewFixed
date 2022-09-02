import { styled, TableCell, TableContainer } from "@mui/material";
import { COLORS } from "../../utils/colors";

export const TableCellStyled = styled(TableCell)({
  whiteSpace: "nowrap",
});

export const TableContainerStyled = styled(TableContainer)({
  scrollbarWidth: "none",
  maxWidth: "100%",
  position: "relative",
  "&::-webkit-scrollbar": { display: "none" },
  backgroundColor: COLORS.white,
});

type InputProps = {
  $rowclicked: boolean;
};

export const Styledtable = styled("table")<InputProps>`
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  color: #1c1c39;
  font-weight: 300;

  & tbody tr {
    cursor: ${({ $rowclicked }: { $rowclicked: boolean }) =>
      $rowclicked ? "pointer" : "default"};
    &:hover {
      background-color: ${({ $rowclicked }: { $rowclicked: boolean }) =>
        $rowclicked ? "rgba(29, 102, 255, 0.04)" : "#fff"};
    }
  }

  & th {
    padding: 1rem;
    text-align: left;
    font-weight: 300;
    padding-left: 2rem;
    white-space: nowrap;
    text-transform: capitalize;
  }
  & td {
    padding: 0.8rem;
    padding-left: 2rem;
    text-align: left;
    border-bottom: 1px solid #f1f1f1;
    /* width: 200px; */
    white-space: nowrap;
  }

  & tr:first-of-type th:first-of-type,
  & tr:first-of-type td:first-of-type {
    border-top-left-radius: 6px;
  }

  & tr:first-of-type th:last-child,
  & tr:first-of-type td:last-child {
    border-top-right-radius: 6px;
  }

  & tr:last-child th:first-of-type,
  & tr:last-child td:first-of-type {
    border-bottom-left-radius: 6px;
  }

  & tr:last-child th:last-child,
  & tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
  }

  & tbody {
    background: #fff;
  }
  & thead {
    background: #fff;
    width: 100%;
  }
  .action {
    width: max-content;
    cursor: pointer;
  }
  .active {
    color: #38ea82;
  }
  .inactive {
    color: #f43116;
  }
`;

export const Tablecontainer = styled("div")`
  width: 100%;
  overflow: scroll;
  position: relative;
`;

export const NoTableData = styled("div")`
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  padding: 5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: center;
    width: 40%;
    color: ${COLORS.gray};
  }
  img {
    width: 10rem;
    height: 10rem;
  }
`;

export const StyledBtn = styled("p")`
  cursor: pointer;
`;
