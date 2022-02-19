import React from "react";
import {Button,Card} from "react-bootstrap";
import {Link} from "react-router-dom";
function Service_option(props)
{
    return <div>
    <Card id={props.name} className="mt-3" style={{width:"100%",height:"100%"}}>
  <Card.Img className="img.fluid d-inline mx-auto mt-1" style={{width:"300px",height:"250px"}} variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
     <p className="mr-5 d-inline">Cost : ₹{props.cost}</p>
     <p className="mr-2 d-inline">Duration : {props.time}</p>
     <br></br>
     <p className="m-0">Rating : {props.rating}</p>
     {props.details}
     
    </Card.Text>
    <Link to={`/Filter/${props.name}/${props.cost}/${true}`}><Button  variant="primary"  >Book</Button></Link>
  </Card.Body>
</Card>
      </div>;
}

export default Service_option;