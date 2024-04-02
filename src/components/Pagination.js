import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import TagsTable from "./TagsTable";
import { useSelector } from "react-redux";

const Pagination = ( {theme}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const tags = useSelector((state) => state.tags.tags);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = tags.slice(startIndex, endIndex);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box display="flex" justifyContent='space-between' my={2}>
        <TextField
          id="rowsPerPage"
          label="Rows Per Page"
          type="number"
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          inputProps={{
            min: 1,
            max: tags.length,
          }}
        />
        <TablePagination
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={tags.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Box>
      <TagsTable data={paginatedData} />
      </>
  );
};

export default Pagination;
