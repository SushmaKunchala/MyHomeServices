import React from "react";
import {Row,Col, Button} from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

var values={};
function fun()
{
    values["name"]=document.getElementById("name").value;
    values["m_num"]=document.getElementById("number").value;
    values["email"]=document.getElementById("email").value;
    values["address"]=document.getElementById("add").value;

 axios.post("http://localhost:5000/success/",values)
         .then(function(response) {
            console.log(response);
         })
         .catch(function(error) {
            console.log(error);
         });

}

function Customer()
{
    const params=useParams();
    
    values["booked_service"]=params.cus_name;
    values["cost"]=params.cus_cost;
    /*function check(){
        if(!form_valid){
            
            return false;
        }
        return true;
    }*/

  
    

    return <div>
        <Row style={{marginTop:"30px"}}>
            <Col lg={4}></Col>
            <Col lg={4}><form onSubmit={()=>{fun()}} action="/success" style={{border:"solid 2px gray",padding:"30px",borderRadius:"10px"}}>
        <div class="form-group">
            <label>Name</label>
            <Row>
            <Col lg={10}><input id="name" class="form-control d-inline" type="text" required minlength="3" maxlength="25"></input></Col>
            </Row>
            <label>Mobile Number</label>
            <Row>
            <Col lg={10}><input id="number" class="form-control d-inline" type="text" required pattern="[0-9]{10}"></input></Col>
            </Row>
            <label>Email</label>
            <Row>
            <Col lg={10}><input id="email" class="form-control d-inline" type="Email"></input></Col>
            </Row>
            <label>Booked Service</label>
            <Row>
            <Col lg={10}><input class="form-control d-inline" value={params.cus_name} type="text"></input></Col>
            </Row>
            <label>Cost</label>
            <Row>
            <Col lg={10}><input class="form-control d-inline" value={params.cus_cost} type="text"  ></input></Col>
            </Row>
            <label>Address</label>
            <Row>
            <Col lg={10}><input id="add" class="form-control d-inline" type="text" required></input></Col>
            </Row>
            
        </div>
       <Button type="submit">Submit</Button>
    </form></Col>
            <Col lg={4}></Col>
        </Row>
    </div>
}

export default Customer;