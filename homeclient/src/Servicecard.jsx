import React from "react";
import {Row} from "react-bootstrap";
import { Link } from "react-router-dom";

function Servicecard(props)
{
    return <div>
    <Link to={`/Sample/${props.cname}`} style={{textDecoration:"none",color:"black"}}><Row className="each_card"><img class="img-fluid" style={{width:"350px",height:"200px"}} src={props.image} alt="A service image"></img>
        <h5 style={{paddingTop:"5px" }}>{props.name}</h5>
    </Row>   </Link>
    </div>;
}

export default Servicecard;