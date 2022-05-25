import {useParams} from "react-router-dom";
import {EditPoll} from "./EditPoll";
import {CreatePoll} from './CreatePoll';
import {Box, Divider, Grid, Paper, Typography} from "@mui/material";

export * from "./state"
export * from "./api"

export default () => {
  const {pollId} = useParams<{ pollId: string }>()
  return (
    <Paper>
      <Box p={1}>
        <Grid container spacing={1} direction={"column"}>
          <Grid item> <Typography variant={"h6"}>Poll edit</Typography> </Grid>
          <Grid item> <Divider/> </Grid>
          <Grid item>
            {pollId === "new" || pollId === undefined ? <CreatePoll/> : <EditPoll id={Number(pollId)}/>}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}
