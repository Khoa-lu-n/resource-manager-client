import { sendGetRequest } from "./api-sender";

export function getResourcesDetail() {
  let route = "/resources/detail";
  return sendGetRequest(route);
}

export function getProjectsDetail(id_project) {
  let route = `/projects/${id_project}/detail`;
  return sendGetRequest(route);
}
