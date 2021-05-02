import React from "react";
import { Table } from "react-bootstrap";
import Wrapper from "./index.styles";

const ProjectTable = props => {
  return (
    <Wrapper>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>IP</th>
            <th>Cpu</th>
            <th>Memory</th>
            <th>Disk</th>
          </tr>
        </thead>
        <tbody>
          {props.instances.map((e, index) => {
            return (
              <tr key={e.id_instance}>
                <td>{++index}</td>
                <td>{e.id_instance}</td>
                <td>{e.name}</td>
                <td>{e.status}</td>
                <td>{e.ip}</td>
                <td>{e.total_cpu}</td>
                <td>{e.total_memory}</td>
                <td>{e.total_disk}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default ProjectTable;
