import React from "react";
import { Button, Typography, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ReactComponent as find } from "../../assets/images/find.svg";

const StyledButton = styled(Button)(({ theme }) => ({
  border: "1.5px solid #ECEEEF",
  borderRadius: "8px",
  height: "36px",
  padding: "6px",
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
}));

export default function SearchButton() {
  return (
    <StyledButton
      variant="outlined"
      startIcon={
        <SvgIcon
          component={find}
          style={{ width: "24px", height: "24px" }}
        />
      }
      onClick={() => alert("Search is not enabled for now.")}
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
        Fırsat Bul
      </Typography>
    </StyledButton>
  );
}
