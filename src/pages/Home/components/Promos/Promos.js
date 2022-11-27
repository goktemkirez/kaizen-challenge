import React from "react";
import { Box } from "@mui/material";

import PromoCard from "../../../../components/PromoCard";
import { fakePromosJSON } from "../../../../assets/datas/fakePromosJSON";

export default function Promos (props) {
  const { name, score, img } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowY: "scroll",
        paddingLeft: "36px",
      }}
    >
      {fakePromosJSON.map((data) => (
        <PromoCard
          key={data.id}
          icon={data?.img}
          content={data?.content}
          path={data?.path}
          color={data?.color}
        />
      ))}
    </Box>
  );
}
