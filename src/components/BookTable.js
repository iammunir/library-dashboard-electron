import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function BookTable({rows, selectRow}) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ID</TableCell>
                        <TableCell>Nama</TableCell>
                        <TableCell>Jenis</TableCell>
                        <TableCell>Pengarang</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow 
                            key={row.id} 
                            hover={true}
                            style={{cursor: 'pointer'}}
                            onClick={() => selectRow(row)}>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.nama}
                                </TableCell>
                                <TableCell>{row.jenis}</TableCell>
                                <TableCell>{row.pengarang}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
