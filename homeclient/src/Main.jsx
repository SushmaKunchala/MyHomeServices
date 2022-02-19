import React, { useEffect, useState } from "react";
import Header from "./Header";
import Servicecard from "./Servicecard";
import { Col, Row , Container} from "react-bootstrap";
import axios from "axios";
import './index.css';

function createCard(services)
{
    
    return (<Col onClick={()=>{
       
    }}
     sm={6} md={3} lg={3}><Servicecard name={services.name} image={services.image} cname={services.cname} /></Col>);
}

function Main()
{
    const [services,setServices]=useState([]);
    useEffect(async()=>{
        try{
            const data1= await axios.get("http://localhost:5000/");
            setServices(data1.data);
        }
        catch(error)
        {
            console.log(error)
        }
    },[])

    return <div to="/">
    <Header />
    <Container style={{marginTop:"60px"}}>
    <Row>
    {services.map(createCard)}
    </Row>
    </Container>
    </div>;
}

export default Main;