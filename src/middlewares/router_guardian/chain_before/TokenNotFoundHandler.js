import AbstractUrlHandler from "./AbstractUrlHandler";

class TokenNotFoundHandler extends AbstractUrlHandler {
  // eslint-disable-next-line class-methods-use-this
  accepts({ to }) {
    return (
      to.path !== "/login" &&
      ((!localStorage.getItem("Authorization") ||!localStorage.getItem("Role"))  && !to.path.includes("/public"))
    );
  }

  // eslint-disable-next-line class-methods-use-this
  process({ next }) {
    next("/login");
  }
}

export default new TokenNotFoundHandler();
