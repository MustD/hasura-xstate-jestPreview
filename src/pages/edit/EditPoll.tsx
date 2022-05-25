import {Grid, LinearProgress, TextField, Typography} from "@mui/material";
import {useMachine} from "@xstate/react";
import {delayMachine, states} from "./state";
import {useQuery} from "@apollo/client";
import {GET_POLL_BY_ID, PollById, PollByIdVars} from "./api";
import {useEffect} from "react";

export const EditPoll = ({id}: { id: number }) => {
  const [current, send] = useMachine(delayMachine)
  const {data, loading} = useQuery<PollById, PollByIdVars>(GET_POLL_BY_ID, {variables: {id: id}})
  useEffect(() => {
    send("START")
  }, [loading])

  return (
    <Grid container direction={"column"} spacing={1}>
      <Grid item><Typography>{JSON.stringify(current.value)}</Typography></Grid>
      {[states.START, states.TIMEOUT].some(current.matches)
        ?
        <Grid item><LinearProgress/></Grid>
        :
        <Grid item>
          <TextField
            label={"name"}
            value={data?.poll_by_pk?.name}
          />
        </Grid>
      }
    </Grid>
  )
}
