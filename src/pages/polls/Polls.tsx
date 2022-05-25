import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"
import {useQuery} from "@apollo/client";
import {POLLS_INVENTORY, PollInventory} from ".";
import {useNavigate} from "react-router-dom";

export const Polls = () => {
  const {loading, data} = useQuery<PollInventory>(POLLS_INVENTORY)
  const navigate = useNavigate()

  if(loading){
    return <div>loading</div>
  }
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.poll?.map((data) => (
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{data.id}</TableCell>
              <TableCell align="right">{data.name}</TableCell>
              <TableCell align="right"><Button onClick={() => navigate(`edit/${data.id}`)}>edit</Button></TableCell>
            </TableRow>
          ))}
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"><Button onClick={() => navigate(`edit/new`)}>new</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
