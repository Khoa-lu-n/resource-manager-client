import React, { useEffect, useState } from "react";
import ResourceOverview from "./ResourceOverview/index";
import ProjectTable from "./ProjectTable/index";
import ModalProjectManage from "./ModalProjectDetail/index";
import * as ResourceApi from "../../api/resource-api";
import { toast } from "react-toastify";

const ResourceManager = () => {
  let [resourcesDetail, setResourcesDetail] = useState({
    resource: {},
    projects: []
  });
  let [show, setShowModal] = useState(false);
  let [projectDetail, setProjectDetail] = useState({
    project: {},
    instances: []
  });

  const handleShowModal = async id_project => {
    try {
      let rs = await ResourceApi.getProjectsDetail(id_project);
      if (rs.success) {
        setProjectDetail({
          project: rs.data.project,
          instances: rs.data.instances
        });
      } else {
        toast.error(rs.reason);
      }
      setShowModal(true);
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    ResourceApi.getResourcesDetail()
      .then(res => {
        if (res.success) {
          setResourcesDetail({
            projects: res.data.projects,
            resource: res.data.resource
          });
        } else {
          toast.error(res.reason);
        }
      })
      .catch(e => {
        toast.error(e.message);
      });
  }, []);

  return (
    <div>
      <h2>Resrouce Manage:</h2>
      <ResourceOverview resource={resourcesDetail.resource} />
      <ProjectTable
        projects={resourcesDetail.projects}
        showModal={handleShowModal}
      />
      <ModalProjectManage
        is_show={show}
        handleShow={setShowModal}
        projectDetail={projectDetail}
      />
    </div>
  );
};

export default ResourceManager;
