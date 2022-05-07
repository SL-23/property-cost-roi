import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display:"flex",
        position: "sticky",
        bgcolor: "#FFFFFF",
        justifyContent:"center",
        zIndex: 1000,
        bottom: 0,
        borderTop: `1px solid #F1F1F1`,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: theme.palette.secondary.dark,
          fontWeight: 600,
          py: 1
        }}
      >
        Copyright SL2022
      </Typography>
    </Box>
  )
}

export default Footer;