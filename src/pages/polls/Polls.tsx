import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"
import {useQuery} from "@apollo/client";
import {GET_POLLS_INVENTORY, PollInventory} from ".";

export const Polls = () => {
  const {loading, data} = useQuery<PollInventory>(GET_POLLS_INVENTORY)

  if(loading){
    return <div>loading</div>
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">name</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
