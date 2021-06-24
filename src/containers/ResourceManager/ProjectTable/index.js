import React from "react";
import { Table, Button } from "react-bootstrap";
import Wrapper from "./index.styles";

const ProjectTable = props => {

  function showText(text){
    return <strong style={{"color": "red"}}>{text}</strong>
  }

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
                  Used {showText(e.usage_instance, "red")} of {showText(e.total_instance)}
                  {/* {e.usage_instance} / {e.total_instance} */}
                </td>
                <td>
                  Used {showText(e.usage_cpu)} of {showText(e.total_cpu)}
                  {/* {e.usage_cpu} / {e.total_cpu} */}
                </td>
                <td>
                  Used {showText(e.usage_memory)} of {showText(e.total_memory)} MB
                  {/* {e.usage_memory} / {e.total_memory} MB */}
                </td>
                <td>
                  Used {showText(e.usage_disk)} of {showText(e.total_disk)} GB
                  {/* {e.usage_disk} / {e.total_disk} GB */}
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
