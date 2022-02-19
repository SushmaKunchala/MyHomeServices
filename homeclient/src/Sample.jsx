import {React,useState,useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import Header from "./Header";
import Service_option from "./Service_option";
import Filter from "./Filter";
import { useParams } from "react-router-dom";
import axios from "axios";


function createServiceCard(service_card)
{
    return <Col sm={12} lg={6}><Service_option name={service_card.name} rating={service_card.rating} cost={service_card.cost} time={service_card.time} details={service_card.details} image={service_card.image} /></Col>;
}
function Sample()
{
    const [service_card,setService_card]=useState([]);
    useEffect(async()=>{
        try{
            const data1= await axios.get("http://localhost:5000/getService/"+params.cname);
            setService_card(data1.data);
        }
        catch(error)
        {
            console.log(error)
        }
    },[])
 
    const params=useParams();

   
    return <div >
            <Header />
            <Row className="mt-5">
                <Col lg={1}></Col>
            
                <Col  lg={8} className="Scroll"><Row >{service_card.map(createServiceCard)}</Row></Col>
                
                <Col  lg={2}> <Filter name={params.name} cost={params.cost} show={params.val} /></Col>
                <col lg={1}></col>
            </Row>
        
    </div>
}

export default Sample;