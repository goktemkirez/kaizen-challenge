import React, { useState } from "react";
import { SvgIcon, Box, Button, IconButton, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";

import { ReactComponent as daha } from "../../assets/images/daha.svg";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "20px",
  width: "91px",
  height: "40px",
  padding: "10px",
  marginRight: "10px",
  backgroundColor: "#F40000",
  textTransform: "none",
  display: "flex",
  alignItems: "center",
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "12px",
  lineHeight: "13.8px",
  letterSpacing: "-0.17px",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "#F40000",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid #FFFFFF`,
    backgroundColor: "#009639",
    height: 15,
    minWidth: 15,
  },
}));

export default function TopAppBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Box sx={{ margin: "40px 15px 20px 15px", display: "flex" }}>
      <SvgIcon
        component={daha}
        style={{ height: "40px", width: "81px" }}
        viewBox={"0 0 81 40"}
      />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <StyledButton
          variant="contained"
          sx={{
            visibility: loggedIn ? "hidden" : "visible",
          }}
          onClick={() => setLoggedIn(true)}
        >
          Giriş Yap
        </StyledButton>
        <StyledBadge
          variant="standart"
          badgeContent=" "
          overlap="circular"
          color="success"
          invisible={!loggedIn}
        >
          <IconButton
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: loggedIn ? "#F40000" : "#1D1E1C",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: loggedIn ? "#F40000" : "#1D1E1C",
              },
            }}
          >
            <PersonIcon />
          </IconButton>
        </StyledBadge>
      </Box>
    </Box>
  );
}
