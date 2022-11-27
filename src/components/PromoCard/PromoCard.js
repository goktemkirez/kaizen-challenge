import React, { useState } from "react";
import { SvgIcon, Box, Button, Link, Badge, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";

import { ReactComponent as spriteImage } from "../../assets/images/spriteImage.svg";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid #FFFFFF`,
    backgroundColor: "#009639",
    height: 15,
    minWidth: 15,
  },
}));

export default function PromoCard(props) {
  const { icon, content, path, color } = props;

  return (
    <Box
      sx={{
        width: "305px",
        background: "#FFFFFF",
        border: "1.5px solid #ECEEEF",
        borderRadius: "20px",
        margin: "20px 10px 36px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SvgIcon
        component={icon}
        style={{ height: "296px", width: "100%" }}
        viewBox={"0 0 309 296"}
      />
      <Typography
        sx={{
          margin: "10px 30px 10px 30px",
          textAlign: "center",
          fontFamily: "Helvetica",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "20px",
        }}
      >
        {content}
      </Typography>
      <Link
        href={path}
        underline="none"
        sx={{
          margin: "0px 104px 20px 103px",
          textAlign: "center",
          fontFamily: "Helvetica",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "16px",
          whiteSpace: "nowrap",
          color: color,
        }}
      >
        Daha Daha
      </Link>
    </Box>
  );
}
