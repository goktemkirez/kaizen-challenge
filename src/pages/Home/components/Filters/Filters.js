import React from "react";
import { Box } from "@mui/material";

import FilterButton from "../../../../components/FilterButton";
import { fakeFiltersJSON } from "../../../../assets/datas/fakeFiltersJSON";

export default function Filters(props) {
  const { name, score, img } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowY: "scroll",
        paddingLeft: "15px",
      }}
    >
      {fakeFiltersJSON.map((data) => (
        <FilterButton
          key={data.id}
          name={data?.title}
          icon={data?.img}
          path={data?.path}
        />
      ))}
    </Box>
  );
}
