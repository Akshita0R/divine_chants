// src/BeautifulTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function BeautifulTable() {
  const data = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { id: 3, name: 'Sam Green', age: 22, occupation: 'Developer' },
    { id: 4, name: 'Alice Brown', age: 45, occupation: 'Manager' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Occupation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.age}</TableCell>
              <TableCell align="left">{row.occupation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BeautifulTable;
