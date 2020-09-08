import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        borderBottom: '1px solid #e2e2e2',
        borderTop: '1px solid #e2e2e2',
    },
    toolbar: {
        backgroundColor: 'white',
        },
  }));
  

const PageName = (props) => {
    const classes = useStyles();
    const showCourses = props.showCourses;
    var title = showCourses ? "Курсы/Группы Тесты" : "Студенты";
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        color="textPrimary"
                        href="/components/breadcrumbs/"
                        aria-current="page"
                    >
                        {title}
                    </Link>
                    </Breadcrumbs>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default PageName;