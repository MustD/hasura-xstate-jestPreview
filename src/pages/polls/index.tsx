import {Box, Divider, Grid, Paper, Typography} from "@mui/material";
import {Polls} from "./Polls";

export * from "./Polls"
export * from "./api"
export * from "./dto"

export default () => {
  return (
    <Paper>
      <Box p={1}>
        <Grid container spacing={1} direction={"column"}>
          <Grid item> <Typography variant={"h6"}>Poll list</Typography> </Grid>
          <Grid item> <Divider/> </Grid>
          <Grid item> <Polls/> </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}
