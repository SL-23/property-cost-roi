import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const useMode = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  if(sm) return "mobile";
  if(md) return "tablet";

  return "desktop";
}

export default useMode;