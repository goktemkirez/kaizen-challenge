import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "247px",
  borderRadius: "16px 16px 16px 100px",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "14px",
  margin: "10px 30px 10px 30px",
  lineHeight: "20px",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "14px",
  margin: "0px 104px 20px 103px",
  lineHeight: "16px",
  whiteSpace: "nowrap",
  height: "20px",
}));

export default function PromoCard(props) {
  const { icon, image, title, path, color } = props;

  return (
    <Box
      sx={{
        width: "305px",
        padding: "5px 5px 0px 5px",
        background: "#FFFFFF",
        border: "1.5px solid #ECEEEF",
        borderRadius: "20px",
        margin: "20px 10px 36px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <StyledImg src={image} alt="" />
      <StyledImg
        sx={{
          position: "relative",
          marginTop: "-50px",
          left: "-110px",
          width: "55px",
          height: "55px",
          borderRadius: "0 0 0 0",
        }}
        src={icon}
        alt=""
      ></StyledImg>
      <StyledTypography
        dangerouslySetInnerHTML={{ __html: title }}
      ></StyledTypography>
      <StyledLink
        href={`/campaign/${path}`}
        underline="none"
        sx={{
          color: color,
        }}
      >
        Daha Daha
      </StyledLink>
    </Box>
  );
}
