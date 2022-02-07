import AbstractRequestHandler from "./AbstractRequestHandler";

class AuthenticateDoneHandler extends AbstractRequestHandler {
  accepts(request) {
    return !!(
      !request.url.includes("public") && localStorage.getItem("Authorization")
    );
  }
  process(request) {
    request.headers.common.Authorization = localStorage.getItem(
      "Authorization"
    );
  }
}

export default new AuthenticateDoneHandler();
