import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import dahaAxios from "../../helpers/axios";

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "305px",
  borderRadius: "0px 0px 0px 100px",
  marginBottom: "10px",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "26px",
  letterSpacing: "-0.2px",
  margin: "15px 15px 15px 15px",
  lineHeight: "30px",
}));

const Description = styled(Typography)(({ theme }) => ({
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  color: "#1D1E1C",
  opacity: "0.75",
  margin: "0px 15px 15px 15px",
  lineHeight: "22px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "28px",
  width: "100%",
  height: "56px",
  padding: "14px 47px 14px 47px",
  backgroundColor: "#F40000",
  textTransform: "none",
  display: "flex",
  alignItems: "center",
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "16px",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "#F40000",
  },
}));

export default function Detail() {
  const routeParams = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await dahaAxios.get(
          `/promotions?Id=${routeParams.id}`
        );
        console.log(response?.data);
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
  }, [routeParams.id]);

  return loading ? null : (
    <Box sx={{ overflow: "hidden", maxHeight: "100vh" }}>
      <StyledImg src={data?.ImageUrl} alt="" />
      <Title dangerouslySetInnerHTML={{ __html: data?.Title }} />
      <Description dangerouslySetInnerHTML={{ __html: data?.Description }} />
      <Box
        sx={{
          position: "absolute",
          height: "130px",
          padding: "0px 15px 20px 15px",
          display: "flex",
          alignItems: "flex-end",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)",
        }}
      >
        <StyledButton
          variant="contained"
          target="_blank"
          href={"https://www.goktemkirez.com"}
        >
          Hemen Katıl
        </StyledButton>
      </Box>
    </Box>
  );
}
