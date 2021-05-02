import React from "react";
import { Table, Button } from "react-bootstrap";
import Wrapper from "./index.styles";

const ProjectTable = props => {
  return (
    <Wrapper>
      <div>
        <br></br>
        <h4>Projects detail:</h4>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Instance</th>
            <th>Cpu</th>
            <th>Memory</th>
            <th>Disk</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.projects.map((e, index) => {
            return (
              <tr key={e.id_project}>
                <td>{++index}</td>
                <td>{e.id_project}</td>
                <td>{e.name}</td>
                <td>
                  Used {e.usage_instance} of {e.total_instance}
                </td>
                <td>
                  Used {e.usage_cpu} of {e.total_cpu}
                </td>
                <td>
                  Used {e.usage_memory} of {e.total_memory}
                </td>
                <td>
                  Used {e.usage_disk} of {e.total_disk}
                </td>
                <td>
                  <Button
                    onClick={() => {
                      props.showModal(e.id_project);
                    }}
                  >
                    Detail
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default ProjectTable;
