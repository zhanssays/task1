import React from 'react';
import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));


const SideMenu = (props) => {
    const classes = useStyles();
    const showCourses = props.showCourses;
    const showStudents = props.showStudents;
    return (
        <div className={classes.root}>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <Divider />
            <List className={classes.list}>
                <ListItem button onClick={() => showCourses()} key={0}>
                    <ListItemIcon> <ListAltIcon/> </ListItemIcon>
                    <ListItemText primary="Курсы/Группы Тесты" />
                </ListItem>
                <ListItem button onClick={() => showStudents()} key={1}>
                    <ListItemIcon> <PersonIcon/> </ListItemIcon>
                    <ListItemText primary="Студенты"/>
                </ListItem>
            </List>
        </Drawer>
        </div>
    );
}

export default SideMenu;