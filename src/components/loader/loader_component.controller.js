import AbstractController from "~src/AbstractController";

class loaderController extends AbstractController{

  constructor(scope) {
    super(scope);
    this.scope.$bus.$on('changeLoading', (payload) => {
      this.changeLoading(payload.active)
    },this);
  }

  changeLoading(active) {
    this.scope.isLoading=active
  }
  changeText(text){
    this.scope.loadText=text
  }

}


export default loaderController
