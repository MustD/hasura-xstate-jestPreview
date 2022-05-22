import {useState} from "react";
import {List} from "immutable";
import {Button, TextField} from "@mui/material";

type Question = {
  id: number
}
export const CreatePoll = () => {
  const [inputs, setInputs] = useState(List<Question>())
  const nextId = inputs.last({id: 0}).id + 1
  return (
    <div>
      {inputs.map((el) =>
        <TextField
          key={el.id}
          value={el.id}
        />
      )}
      <Button onClick={() => setInputs(inputs.push({id: nextId}))}>
        add {nextId}
      </Button>
    </div>
  )
}
