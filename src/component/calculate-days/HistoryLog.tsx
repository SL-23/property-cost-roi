import { Divider, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { selectResults } from "../../common/state";

const HistoryLog = () => {
  const theme = useTheme();
  const results = useSelector(selectResults);

  if(!results || results.length < 1) return null;
  return (
    <>
      <Divider sx={{ my: 1 }}/>
      <Typography
        variant="h4"
        color={theme.palette.secondary.dark}
      >
        Your log:
      </Typography>
      {
        results.map((item, index) => (
          <Typography
            key={index}
          >
            {'-> '}{item} days
          </Typography>
        ))
      }
    </>
  )

}

export default HistoryLog;