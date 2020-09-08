import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AirplayIcon from '@material-ui/icons/Airplay';
import DesktopAccessDisabledIcon from '@material-ui/icons/DesktopAccessDisabled';
import ImageIcon from '@material-ui/icons/Image';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';

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

function renderImage(student) {
    var image = student.image;
    if (image != null && image !== "") {
        return <ImageIcon/>;
    }
    return "";
}

function renderWebcam(student) {
    var device_status = student.device_status;
    if (device_status == null) {
        return "";
    }
    var webcam = device_status.webcam;
    if (webcam == null) {
        return "";
    }
    if (webcam.status === "success") {
        return <VideocamIcon/>;
    }
    return <VideocamOffIcon/>;
}

function renderAudio(student) {
    var device_status = student.device_status;
    if (device_status == null) {
        return "";
    }
    var audio = device_status.audio;
    if (audio == null) {
        return "";
    }
    if (audio.status === "success") {
        return <MicIcon/>;
    }
    return <MicOffIcon/>;
}

function renderScreen(student) {
    var device_status = student.device_status;
    if (device_status == null) {
        return <DesktopAccessDisabledIcon/>;
    }
    var screen = device_status.screen;
    if (screen == null) {
        return <DesktopAccessDisabledIcon/>;
    }
    if (screen.status === "success") {
        return <AirplayIcon/>;
    }
    return <DesktopAccessDisabledIcon/>;
}


const StudentsTable = (props) => {
    const classes = useStyles();
    const students = props.students;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Название</StyledTableCell>
                <StyledTableCell align="right">Экзамены</StyledTableCell>
                <StyledTableCell align="right">Активированный</StyledTableCell>
                <StyledTableCell align="right">Фото</StyledTableCell>
                <StyledTableCell align="right">Веб-камера</StyledTableCell>
                <StyledTableCell align="right">Микрофон</StyledTableCell>
                <StyledTableCell align="right">Доступ к экрану</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((student) => (
                <StyledTableRow key={student.pk}>
                    <StyledTableCell component="th" scope="row">
                    {student.pk}
                    </StyledTableCell>
                    <StyledTableCell align="right">{student.first_name}</StyledTableCell>
                    <StyledTableCell align="right">Экзамены({student.pk})</StyledTableCell>
                    <StyledTableCell align="right">{student.is_active}</StyledTableCell>
                    <StyledTableCell align="right">{renderImage(student)}</StyledTableCell>
                    <StyledTableCell align="right">{renderWebcam(student)}</StyledTableCell>
                    <StyledTableCell align="right">{renderAudio(student)}</StyledTableCell>
                    <StyledTableCell align="right">{renderScreen(student)}</StyledTableCell>
                    
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}


export default StudentsTable;
