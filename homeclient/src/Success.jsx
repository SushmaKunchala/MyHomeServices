import React from "react";
import { ModalBody, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { Modal ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function Success()
{
    return <Modal show={true}>
        <ModalHeader><h1>Success</h1></ModalHeader>
        <ModalBody>Your Booking is successful</ModalBody>
        <ModalFooter>
           <Link to="/"> <Button >OK</Button></Link>
        </ModalFooter>
    </Modal>
}

export default Success;