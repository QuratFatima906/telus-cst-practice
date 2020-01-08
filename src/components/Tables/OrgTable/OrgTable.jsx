import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import axios from "../../../axios";

const columns = [
  {
    id: "organization",
    label: "Organization"
    // minWidth: 170
  },
  {
    id: "reference",
    label: "Reference"
    // minWidth: 100
  },
  {
    id: "status",
    label: "Status",
    // minWidth: 170,
    // align: 'right',
    format: (value) => value.toLocaleString()
  },
  {
    id: "country",
    label: "Country",
    // minWidth: 170,
    // align: 'right',
    format: (value) => value.toLocaleString()
  },
  {
    id: "usage",
    label: "Usage",
    // minWidth: 170,
    // align: 'right',
    format: (value) => value.toFixed(2)
  },
  {
    id: "totalSims",
    label: "Total Sims"
    // minWidth: 100
  },
  {
    id: "activeSims",
    label: "Active Sims"
    // minWidth: 100
  },
  {
    id: "lastSynced",
    label: "Last Synced"
    // minWidth: 100
  }
];

// function createData(organization, reference, status, country) {
//   const density = population / size;
//   return { organization, reference, status, country };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
// ];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let [rows, setRows] = useState([]);

  useEffect(() => {
    getData();
    console.log("useEffect ran...");
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const getData = () => {
    axios
      .get("/organization")
      .then((response) => {
        const data = response.data.slice(0, 4);
        let singleRow =
          data &&
          data.map((row) => {
            return {
              ...row
            };
          });

        setRows(singleRow);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[1, 2, 3]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
