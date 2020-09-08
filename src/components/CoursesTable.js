import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#00000085',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


const CoursesTable = (props) => {
    const classes = useStyles();
    const courses = props.courses;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Название</StyledTableCell>
                <StyledTableCell align="right">Экзамены</StyledTableCell>
                <StyledTableCell align="right">Студенты</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {courses.map((course) => (
                <StyledTableRow key={course.id}>
                    <StyledTableCell component="th" scope="row">
                    {course.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{course.shortname}</StyledTableCell>
                    <StyledTableCell align="right">Посмотреть ({course.id})</StyledTableCell>
                    <StyledTableCell align="right">Посмотреть ({course.id})</StyledTableCell>
                    
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}


export default CoursesTable;
