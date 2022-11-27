import {useState} from "react";
import Box from "@mui/material/Box";
import {
  BottomNavigation,
  BottomNavigationAction,
  SvgIcon,
} from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";

import { ReactComponent as bottomNavigationMiddleButton } from "../../assets/images/bottomNavigationMiddleButton.svg";

const StyledNavigation = styled(BottomNavigation)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  height: "100%",
}));

const StyledAction = styled(BottomNavigationAction)(({ theme }) => ({
  color: "#1D1E1C",
  opacity: "0.3",
  display: "flex",
  alignItems: "center",
  height: "100%",
  "&.Mui-selected": {
    color: "#000000",
    opacity: "1",
  },
  "& .MuiBottomNavigationAction-iconOnly": {
    width: "26px",
    height: "26px",
    marginBottom: "3px",
  },
  "& .MuiBottomNavigationAction-label": {
    height: "17px",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "10px",
    lineHeight: "11px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: "0.5px",
    "&.Mui-selected": {
      fontSize: '10px'
    },
  },
}));

export default function Navigation() {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "68px",
        background: "#FFFFFF",
        boxSizing: "border-box",
        borderRadius: "20px 20px 0px 0px",
        boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.05)",
        border: "1.5px solid #ECEEEF",
      }}
    >
      <StyledNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <StyledAction label="KEŞFET" icon={<ExploreIcon />} />
        <StyledAction
          label="Favorites"
          icon={
            <SvgIcon
              component={bottomNavigationMiddleButton}
              style={{
                height: "69px",
                width: "69px",
                position: "absolute",
                bottom: "10px",
                borderRadius: "24px",
                boxShadow: "0px 4px 0px 2px rgba(216, 216, 216, 0.5)",
              }}
              viewBox={"0 0 69 69"}
            />
          }
        />
        <StyledAction label="DAHA CÜZDAN" icon={<StarIcon />} />
      </StyledNavigation>
    </Box>
  );
}
