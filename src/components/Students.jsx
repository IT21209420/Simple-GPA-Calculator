import { Box, Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete'; 

const Students = ({ students ,deleteUser}) => {
  const columns = [
    {
        field: "id",
        headerName: "ID",
        flex: 1,
      },
    
    {
      field: "studentName",
      headerName: "Name",
      flex: 0.5,
    },

    {
      field: "gpa",
      headerName: "GPA",
      flex: 0.5,
    },

    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      flex: 0.3,
      renderCell: (params) => (
        <IconButton aria-label="delete" onClick={() => deleteUser({id:params.row.id})}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];
  const studentList = (
    <Box m="1.5rem 2.5rem">
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#0066ff",
            // color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#80b3ff",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#80b3ff",
            color: "#80b3ff",
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#80b3ff",
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row.id}
          rows={students || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
  return studentList;
};

export default Students;
