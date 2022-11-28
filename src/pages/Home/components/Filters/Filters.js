import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import dahaAxios from "../../../../helpers/axios";
import FilterButton from "../../../../components/FilterButton";
import SearchButton from "../../../../components/SearchButton";

export default function Filters() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await dahaAxios.get(`/tags/list`);
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
        paddingLeft: "15px",
      }}
    >
      <SearchButton />
      {loading
        ? null
        : data.map((data) => (
            <FilterButton
              key={data.Id}
              name={data?.Name}
              icon={data?.IconUrl}
            />
          ))}
    </Box>
  );
}
