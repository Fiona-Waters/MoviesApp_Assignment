import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const FantasyMovieList = ({ fantasyMovie }) => {
  console.log("list", fantasyMovie);
  return (
    <>
      <Typography variant="h5" component="h3">
        Fantasy Movie Details
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Movie Title</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Release Date</TableCell>
              <TableCell>Plot</TableCell>
              <TableCell>Genre/s</TableCell>
              <TableCell>Actor/s</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fantasyMovie?.map((m) => (
              <TableRow>
                <TableCell align="left">{m?.title}</TableCell>
                <TableCell align="left">{m?.budget}</TableCell>
                <TableCell align="left">
                  {m?.releaseDate?.toDate().toLocaleDateString()}
                </TableCell>
                <TableCell align="left">{m?.plot}</TableCell>

                <TableCell align="left">
                  <ul>
                    {m?.genre?.map((g) => (
                      <li>{g.name}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell align="left">
                  <ul>
                    {m?.actor?.map((a) => (
                      <li>{a.name}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FantasyMovieList;
