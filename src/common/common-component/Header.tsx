import { Box, Typography, useTheme } from "@mui/material";
import { useMode } from "../utils";

const Header = () => {
  const theme = useTheme();
  const mode = useMode();
  const desktop = mode === "desktop";
  return (
    <Box
      sx={{
        display: "flex",
        position: "sticky",
        top: 0,
        bgcolor: "#FFFFFF",
        zIndex: 1000,
        borderBottom: `1px solid #F1F1F1`,
        py: 2,
      }}
    >
      <Typography
        variant={desktop ? "h3" : "h4"}
        color={theme.palette.secondary.dark}
        sx={{
          mr: 3,
          ml: 1
        }}
      >
        Property
      </Typography>
      <Typography
        variant={desktop ? "h3" : "h4"}
        color={theme.palette.primary.dark}
      >
        | COST & ROI calculator
      </Typography>
    </Box>
  )
}

export default Header;