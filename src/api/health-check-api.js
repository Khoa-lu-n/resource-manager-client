import { sendPostRequestWithToken } from "./api-sender";

export function startHealthCheck() {
  let route = "/health-check";
  return sendPostRequestWithToken(route);
}