import React from "react";
import { useSelector } from "react-redux";
import LoadingCircle from "./LoadingCircle";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TagsTable = ( { data } ) => { 
  const loading = useSelector((state) => state.tags.loading);
  return (
      <>
        {loading ? (
          <LoadingCircle />
        ) : (
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align="right">Count</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
            {data.map((tag) => (
              <TableRow
                key={tag.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{tag.name}</TableCell>
                <TableCell align="right">{tag.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        )}
    </>
  );
};

export default TagsTable;
