import React from "react";
import { Col, Row , Container,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./index.css";

function Header()
{
    return  <Container style={{marginTop:"50px"}}>
    <Row >
    <Col sm={1} ></Col>    
    <Col sm={3} ><h3>My Home Services</h3></Col>
    <Col sm={3} ></Col>
    <Col sm={2} >
    <Row style={{border:"#888888 solid 2px",borderRadius: "30px"}}>
        
    <Col><Link to="/" style={{textDecoration:"none"}}><Col className="Headerpills">Home</Col></Link></Col>
    

    </Row>
       
    </Col>
    <Col sm={3} ></Col>
    
    </Row>
    </Container>;
}

export default Header;