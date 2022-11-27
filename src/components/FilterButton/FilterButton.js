import React from "react";
import { Button, SvgIcon, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FilterButton(props) {
  const { name, icon, path } = props;
  const navigate = useNavigate();

  return (
    <Button
      sx={{
        border: "1.5px solid #ECEEEF",
        borderRadius: "8px",
        height: "36px",
        padding: "6px 6px 6px 0",
        display: "flex",
        alignItems: "center",
        color: "#1D1E1C",
        textTransform: "none",
        marginRight: "5px",
        minWidth: "initial",
        justifyContent: "flex-start",
        "&:hover": {
          border: "1.5px solid #ECEEEF",
          borderRadius: "8px",
        },
      }}
      variant="outlined"
      startIcon={
        <SvgIcon
          component={icon}
          style={{ width: "24px", height: "24px", marginLeft: "10px" }}
        />
      }
      onClick={() => navigate(path)}
    >
      <Typography
        sx={{
          fontFamily: "Helvetica",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "14px",
          whiteSpace: "nowrap",
        }}
        textAlign={"center"}
      >
        {name}
      </Typography>
    </Button>
  );
}
