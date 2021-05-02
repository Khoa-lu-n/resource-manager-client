import React from "react";
import Wrapper from "./index.styles";
import { Modal, Button } from "react-bootstrap";
import "./index.css";
import ProjectOverview from "../ProjectOverview/index";
import InstanceTable from "../InstanceTable/index";

const ModalProjectManage = props => {
  const handleClose = () => {
    props.handleShow(false);
  };
  return (
    <Wrapper>
      <Modal
        show={props.is_show}
        onHide={handleClose}
        dialogClassName="modal-size"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Project Detail: {props.projectDetail.project.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>Overview:</h4>
            <ProjectOverview project={props.projectDetail.project} />
          </div>
          <div>
            <h4>Instance detail:</h4>
            <InstanceTable instances={props.projectDetail.instances} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
};

export default ModalProjectManage;
