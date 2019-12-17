import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Rating } from "semantic-ui-react";
import FTable from "./FTable";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
// import {  Divider } from 'semantic-ui-react'

const useStyles = makeStyles(theme => ({
 card: {
  maxWidth: 320
 },
 media: {
  height: 0,
  paddingTop: "56.25%" // 16:9
 },

 avatar: {
  backgroundColor: red[500]
 }
}));

export default function FHome(props) {
 const classes = useStyles();

 return (
  <div className="ml-lg-5">
   <Row>
    <Col style={{ marginTop: "0px" }}>
     <p style={{ marginTop: "30px", marginBottom: "20px" }}>
      {" "}
      Current Projects{" "}
     </p>
     <FTable></FTable>

     <Row style={{ marginTop: "40px" }}>
      <Col>
       <p>My Projects</p>
      </Col>
     </Row>
     <Row>
      <Col>p1</Col>
      <Col>p2</Col>

      <Col>p3</Col>
     </Row>
    </Col>

    <Col md={{ offset: 0, span: 4 }}>
     <Card style={{ marginTop: "80px" }} className={classes.card}>
      <CardHeader
       avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
         R
        </Avatar>
       }
       title="Hello Ragad A."
       subheader="Last Login"
      />
      <Rating icon="star" defaultRating={3} maxRating={4} />
      <CardContent style={{ margin: "10px" }}>
       <EmailIcon fontSize="large" style={{ margin: "10px" }} />
       <TwitterIcon fontSize="large" style={{ margin: "10px" }} />
       <FacebookIcon fontSize="large" style={{ margin: "10px" }} />
       <GitHubIcon fontSize="large" style={{ margin: "10px" }} />
       <LinkedInIcon fontSize="large" style={{ margin: "10px" }} />
      </CardContent>
     </Card>
    </Col>
   </Row>

   <Row className="mb-sm-5" style={{ marginTop: "120px" }}>
    <Col md={{ offset: 11 }}>
     {/* <Router>
      <Route> */}
       <Link to={`/chat?name=${'fjj'}&room=${"Chat"}`}>
        {console.log(props.name)}
        <img
         hight="50px"
         width="50px"
         src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/11-512.png"
        ></img>
       </Link>
      {/* </Route>
     </Router> */}
    </Col>
   </Row>
  </div>
 );
}
