import React, { useEffect, useState } from "react";
import Wrapper from "./Helper.styles";
import { Form, Button, Col, Row } from "react-bootstrap";
import * as UserApi from "../../api/user-api";
import { toast } from "react-toastify";

const Helper = () => {
  let [minCpu, setCpu] = useState("");
  let [minDisk, setDisk] = useState("");
  let [minMemory, setMemory] = useState("");
  let [email, setEmail] = useState("");

  async function handleSaveSettingsNotification() {
    try {
      if (minCpu <= 0 || minCpu >= 100) {
        toast.error("Min cpu must greater than 0 and less than 100.");
      } else if (minDisk <= 0 || minDisk >= 100) {
        toast.error("Min disk must greater than 0 and less than 100.");
      } else if (minMemory <= 0 || minMemory >= 100) {
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
    <Wrapper>
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
          Click button to check your private cloud system. If you have used in
          excess of the amount of resources that the system has, application
          will notification for you.
        </h4>
        <div className={"button-check"}>
          <Button size={"lg"}>Check</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Helper;
