import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import PageName from '../components/PageName';
import Search from '../components/Search';
import StudentsTable from '../components/StudentsTable';
import CoursesTable from '../components/CoursesTable';


const drawerWidth = 240;

const useStyles = ({
  root: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth, 
  },
});


class App extends Component {
  state = {
      items : [],
      isLoaded: false,
      error: false,
      showCourses: true,
      showStudents: false,
  }

  showCourses = () => {
    this.setState({
      showCourses: true,
      showStudents: false,
    })
  }

  showStudents = () => {
    this.setState({
      showCourses: false,
      showStudents: true,
    });
  }

  render () {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <SideMenu showCourses={this.showCourses} showStudents={this.showStudents}/>
        <Header/>
        <PageName showCourses={this.state.showCourses} showStudents={this.state.showStudents}/>
        <Search/>
        {this.state.showStudents && <StudentsTable students={getStudents()}/>}
        {this.state.showCourses && <CoursesTable courses={getCourses()}/>}

      </div>
    );
  }
  
}

export default withStyles(useStyles)(App);

function getStudents() {
  return [
    {
        "device_status":{
            "errors":[
            
            ],
            "status":"checked",
            "proto":"Object"
        },
        "email":"miras.sovetov@gmail.com",
        "first_name":"",
        "image":null,
        "is_active":false,
        "last_name":"",
        "pk":6105,
        "proto":"Object"
    },
    {
      "device_status":{
          "errors":[
          
          ],
          "status":"checked",
          "proto":"Object"
      },
      "email":"masujimk@gmail.com",
      "first_name":"",
      "image":null,
      "is_active":true,
      "last_name":"",
      "pk":6107,
      "proto":"Object"
    },
    {
      "device_status":{
        "audio":{
          "status":"success"
        },
        "errors":[
        
        ],
        "screen":{
          "status":"success"
        },
        "status":"checked",
        "webcam":{
          "status":"success"
        },
        "proto":"Object"
      },
      "email":"margulanyermek@gmail.com",
      "first_name":"Margulan",
      "image":"https://storage.googleapis.com/aero-bucket/media/avatars/W3FC8XGTRSRZAR6_4_1599111575_profile.jpeg?Expires=1599540766&GoogleAccessId=210805880439-compute%40developer.gserviceaccount.com&Signature=mZ0qZGn8ORQjlJuefpoKGxvXuUJrUfY0W6BWmgxLRKCSQ13dIFG4MWcduEWRDJNmFlXb3LpZF0p3bIk%2Bv%2BoA9g1jPY9BaMv2WbOQ96RsAVY1BZV9nXe48rB63PP3PTgp%2BMVdqPOgSbpmOuPjoAwC70GjfAvu6BaGwOHLyRp1%2F1T5B%2FkRFVd5VRXseSIietVqll3%2B6y%2B1SgM3o0143GvsDO0WFyRNWL6ynkuH80p1h%2F7F1deo1zlCpZGk9kvJ2VXOp4%2Bdxxw%2Bmnk5bb614y6RJ5oWbusFCWOy0k2JuE2Qu46qpXyaAgtybA3bYrExTNcVW6L7%2FBHkz7aIqCk1qhp8Gw%3D%3D",
      "is_active":true,
      "last_name":"Yermek",
      "pk":4,
      "proto":"Object"
    }
  ];
}

function getCourses() {
  return [
    {
      "id":11,
      "fullname":"KazUMOiMYA course",
      "shortname":"KazUMOiMYA"
    },
    {
      "id":10,
      "fullname":"Miras course",
      "shortname":"Miras"
    }
  ]
}