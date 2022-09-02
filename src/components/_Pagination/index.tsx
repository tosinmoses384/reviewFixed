import React from "react";
import usePagination from "@mui/material/usePagination";
import { Button, ButtonSelected, List, Stylednav } from "./style";
import RIGHT_ICON from "../../assets/right-icon.svg";
import LEFT_ICON from "../../assets/left-icon.svg";
import { Spacer } from "../Spacer";
import { useMediaQueries } from "../../utils/hooks/useMediaQueries";

export type paginationProps = {
  setCurrentPage: (page: number) => void;
  count: number;
  selected?: number;
  arrows?: boolean;
  disabled?: boolean;
};

export const Pagination = ({
  setCurrentPage,
  count,
  selected,
  arrows = true,
  disabled,
}: paginationProps) => {
  // const matchesSm = useMediaQueries();

  const { items } = usePagination({
    count,
  });

  if (!(items.length > 3)) return null;
  return (
    <Stylednav>
      {/* {!matchesSm && (
        <p>
          Show page {selected} of {count}
        </p>
      )} */}
      <Spacer width={30} height={10} />
      <List>
        {items.map(({ page, type, ...item }, i) => {
          console.log(type);
          if (type === "start-ellipsis" || type === "end-ellipsis") {
            return <div key={i}>....</div>;
          } else if (type === "page") {
            return (
              <div key={i}>
                {selected === page ? (
                  <div onClick={() => setCurrentPage(page as number)}>
                    <ButtonSelected type="button" {...item} disabled={disabled}>
                      {page}
                    </ButtonSelected>
                  </div>
                ) : (
                  <div onClick={() => setCurrentPage(page as number)}>
                    <Button type="button" {...item} disabled={disabled}>
                      {page}
                    </Button>
                  </div>
                )}
              </div>
            );
          } else {
            if (type === "previous" && arrows) {
              return (
                <div
                  key={i}
                  onClick={() => {
                    if (page === 0) {
                      return;
                    }
                    setCurrentPage(page as number);
                  }}
                >
                  <Button type="button" {...item} disabled={disabled}>
                    <img src={LEFT_ICON} alt="left_icon" />
                  </Button>
                </div>
              );
            }
            if (type === "next" && arrows) {
              return (
                <div
                  key={i}
                  onClick={() => {
                    if (page === count + 1) {
                      return;
                    }
                    setCurrentPage(page as number);
                  }}
                >
                  <Button type="button" {...item} disabled={disabled}>
                    <img src={RIGHT_ICON} alt="right_icon" />
                  </Button>
                </div>
              );
            }
          }
          return <div key={i} />;
        })}
      </List>
    </Stylednav>
  );
};
