import {Typography} from "@mui/material";
import {Poll} from "../polls";

const emptyPoll = (): Poll => ({id: 0, name: ""})

export const CreatePoll = () => {

  return (
        <Typography>{JSON.stringify(emptyPoll())}</Typography>
  )
}
