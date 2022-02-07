import router from '@/routes.js';

class AbstractController {
  constructor(scope) {
    this.scope = scope;
    this.router = router;
  }



  addComponentMethods(controller,component){
    this.scope[component] = controller;
  }

}
export default AbstractController;
