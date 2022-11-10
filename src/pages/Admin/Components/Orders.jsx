import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import Title from './Title'

// Generate Order Data
function createData(id, date, amount) {
  return { id, date, amount }
}

const rows = [
  createData(0, '16 Mar, 2019', 866.99),
  createData(1, '16 Mar, 2019', 866.99),
  createData(2, '16 Mar, 2019', 100.81),
  createData(3, '16 Mar, 2019', 654.39),
  createData(4, '15 Mar, 2019', 212.79)
]

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Ultimas transacciones</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell align='right'>Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell align='right'>{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
