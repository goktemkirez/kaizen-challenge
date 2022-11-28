import React, { useEffect, useState } from "react";
import { Box, Paper, Button } from "@mui/material";

import dahaAxios from "../../../../helpers/axios";
import PromoCard from "../../../../components/PromoCard";

export default function Promos() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await dahaAxios.get(`/promotions/list?Channel=PWA`);
        console.log(response?.data)
        setData(response?.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    getData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowY: "scroll",
        paddingLeft: "36px",
      }}
    >
      {data.map((item, i) => (
        <PromoCard
          key={i}
          image={item?.ImageUrl}
          icon={item?.BrandIconUrl}
          title={item?.Title}
          path={`${item?.SeoName}/${item?.Id}`}
          color={item?.PromotionCardColor}
        />
      ))}
    </Box>
  );
}
