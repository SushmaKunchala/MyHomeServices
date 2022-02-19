import React, { useState} from "react";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

var show=false;
var values={};
var final_cost;
function Filter(props)
{  
  const [final_cost,setCost]=useState();

  function addvalues(d_cost)
  {
    const time=document.getElementById("time_slot").value;
    const experience=document.getElementById("experience").value;
    const stars=document.getElementById("star_rating").value;

    var experience_cost;
    var star_cost;
    const org_cost=+props.cost;

    if(experience==="2-3 years")
      experience_cost=0;
    else if(experience==="5-6 years")
      experience_cost=30;
    else if(experience==="8-9 years")
      experience_cost=100;
    else if(experience==="10-15 years")
      experience_cost=120;
    else
      experience_cost=0;
    
    if(stars==="5 star")
      star_cost=100;
    else if(stars==="4 star")
      star_cost=80;
    else if(stars==="3 star")
      star_cost=40;
    else if(stars==="2 star")
      star_cost=0;
    else 
      star_cost=0;

    values["time_slot"]=time;
    values['experience']=experience;
    values['star_rating']=stars;
   
    if(!isNaN(props.cost))
    {
      values["cost"]=org_cost+star_cost+experience_cost;
      document.getElementById("d_cost").innerHTML="Your Final Cost : "+values["cost"];
      document.getElementById("d_cost").className="visible";
      document.getElementById("d_button").className="visible btn btn-primary";
      document.getElementById("org_button").className="invisible";
    }
    else{
      values["cost"]=props.cost;
      document.getElementById("d_button").className="visible";
    }
    setCost(values["cost"]);
 
  }
  show=props.show;
    return <form  className={show? "visible": "invisible"} style={{marginTop:"30px"}}>
    <h4>Choose your Filters</h4>
    <div className="form-group mt-5">

    <select id="time_slot"class="form-select form-control" aria-label="Default select example">
  <option selected>Select your Time Slot</option>
  <option value="7:00AM - 8:00AM">7:00AM - 8:00AM</option>
  <option value="8:00AM - 9:00AM">8:00AM - 9:00AM</option>
  <option value="9:00AM - 10:00AM">9:00AM - 10:00AM</option>
  <option value="10:00AM - 11:00AM">10:00AM - 11:00AM</option>
  <option value="11:00AM - 12:00PM">11:00AM - 12:00PM</option>
  <option value="12:00PM - 1:00PM">12:00PM - 1:00PM</option>
  <option value="1:00PM - 2:00PM">1:00PM - 2:00PM</option>
  <option value="2:00PM - 3:00PM">2:00PM - 3:00PM</option>
  <option value="3:00PM - 4:00PM">3:00PM - 4:00PM</option>
  <option value="4:00PM - 5:00PM">4:00PM - 5:00PM</option>
  <option value="5:00PM - 6:00PM">5:00PM - 6:00PM</option>
  
</select>

<select id="experience" class="form-select form-control mt-4" aria-label="Default select example">
  <option selected>Select Worker Experience</option>
  <option id="0">2-3 years</option>
  <option id="30">5-6 years</option>
  <option id="100">8-9 years</option>
  <option id="120">10-15 years</option>
</select>


<select id="star_rating"  class="form-select form-control mt-4" aria-label="Default select example">
  <option selected>Select Worker Star Rating</option>
  <option id="100">5 star</option>
  <option id="80">4 star</option>
  <option id="40">3 star</option>
  <option id="0">4 star</option>
</select>

</div>
      <h5 className="invisible" id="d_cost"></h5>
      <Link to={`/customer/${props.name}/${final_cost}`}><Button className="invisible " id="d_button">Proceed</Button></Link>
     <Button  className="ml-5" id="org_button" onClick={()=>{{addvalues("d_cost")}}}>Apply</Button>

     
  </form>;
}

export default Filter;