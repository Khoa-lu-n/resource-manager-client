import React, { useEffect, useState } from "react";
import Wrapper from "./Helper.styles";
import { Form, Button, Col, Row, Spinner, Table } from "react-bootstrap";
import * as UserApi from "../../api/user-api";
import { toast } from "react-toastify";
import {startHealthCheck} from "../../api/health-check-api";

const Helper = () => {
  let [minCpu, setCpu] = useState("");
  let [minDisk, setDisk] = useState("");
  let [minMemory, setMemory] = useState("");
  let [email, setEmail] = useState("");
  let [isLoading, setLoading] = useState(false);
  let [resources, setResources] = useState([])

  async function handleSaveSettingsNotification() {
    try {
      if ((minCpu <= 0 || minCpu >= 100) && !!minCpu) {
        toast.error("Min cpu must greater than 0 and less than 100.");
      } else if ((minDisk <= 0 || minDisk >= 100) && !!minDisk) {
        toast.error("Min disk must greater than 0 and less than 100.");
      } else if ((minMemory <= 0 || minMemory >= 100) && !!minMemory) {
        toast.error("Min memory must greater than 0 and less than 100.");
      } else {
        let rs = await UserApi.updateSettingsNotification({
          min_cpu: minCpu,
          min_disk: minDisk,
          min_memory: minMemory,
          email
        });
        if (rs.success) {
          toast.success("Save success!");
        } else {
          toast.error(rs.reason);
        }
      }
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function _startHealthCheck(){
    setLoading(true)
    let rs = await startHealthCheck();
    setLoading(false)
    let keys = Object.keys(rs.data);
    let data = keys.map(key => {
      let title = "";
      switch (key){
        case "total_resource":
            title = "Total resource";
            rs.data[key].cpu+=" core"
            break;
        case "used_resource":
          title = "Allocated resource";
          rs.data[key].cpu+=" core"
          break;
        case "usage_resource":
          title = "Usaged resource";
          rs.data[key].cpu = parseFloat(rs.data[key].cpu).toFixed(2) + " %"
          break;
        default :
      }
      return {
        ...rs.data[key],
        title
      }  
    })
    setResources(data)
  }

  useEffect(() => {
    UserApi.getSettingsNotification()
      .then(rs => {
        if (rs.success) {
          setCpu(rs.data.config.min_cpu);
          setMemory(rs.data.config.min_memory);
          setDisk(rs.data.config.min_disk);
          setEmail(rs.data.config.email);
        } else {
          toast.error(rs.reason);
        }
      })
      .catch(e => {
        toast.error(e.message);
      });
  }, []);

  return (
    <Wrapper isDisplay={resources.length > 0 ? false : true}>
      <h2>Notification</h2>
      <h4>Send notification for me when:</h4>
      <div className="form">
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="5">
              {"Min memory usage is"}
            </Form.Label>
            <Col sm="2">
              <Form.Control
                type="text"
                value={minMemory}
                onChange={e => {
                  setMemory(e.target.value);
                }}
              />
            </Col>
            <Form.Label column sm="2">
              percent.
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="5">
              {"Min cpu usage is"}
            </Form.Label>
            <Col sm="2">
              <Form.Control
                type="text"
                value={minCpu}
                onChange={e => {
                  setCpu(e.target.value);
                }}
              />
            </Col>
            <Form.Label column sm="2">
              percent.
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="5">
              {"Min disk usage is"}
            </Form.Label>
            <Col sm="2">
              <Form.Control
                type="text"
                value={minDisk}
                onChange={e => {
                  setDisk(e.target.value);
                }}
              />
            </Col>
            <Form.Label column sm="2">
              percent.
            </Form.Label>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="5">
              {"Send to:"}
            </Form.Label>
            <Col sm="7">
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Button variant="primary" onClick={handleSaveSettingsNotification}>
            Save
          </Button>
        </Form>
      </div>

      <br />
      <div>
        <h2>Heath check</h2>
        <h4>
          Click button to health check your private cloud system. 
        </h4>
        <div className={"button-check"}>
          <Button size={"lg"} onClick={_startHealthCheck} disabled={isLoading ? true : false}  >
            {isLoading ? <span>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="sr-only">Loading...</span>
            </span> : ""}
          Check</Button>
        </div>
        <div className={"resource-statistic"}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>CPU</th>
                <th>Memory</th>
                <th>Disk</th>
              </tr>
            </thead>
            <tbody>
              {resources.map(resource => {
                return <tr>
                  <td>{resource.title}</td>
                  <td>{resource.cpu}</td>
                  <td>{resource.memory} MB</td>
                  <td>{resource.disk} GB</td>
                </tr>
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </Wrapper>
  );
};

export default Helper;
