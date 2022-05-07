import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import DateInput from "./calculate-days/DateInput";
import CostInput from "./cost/CostInput";

const Home = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "1000px"
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <CostInput />
        </Grid>
        <Grid item xs={6}>
          <DateInput />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home;