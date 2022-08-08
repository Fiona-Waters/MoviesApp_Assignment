import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const TvCast = ({ cast }) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Cast Details
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Actor Name</TableCell>
              <TableCell>Character Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cast.cast.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell numeric component="a" href={`/actor/${row.id}`}>
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.character}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TvCast;
