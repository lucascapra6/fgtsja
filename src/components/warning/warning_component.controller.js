import AbstractController from "$services/abstract-controller_service.services";

const AVAILABLETYPES = ['info', 'success', 'error'];

class WarningController extends AbstractController {

  constructor(scope) {
    super(scope);
    this.scope.$bus.$on('show', (payload) => {
      this.show({message:payload.message,typeCode:payload.typeCode})
    },this);
  }

  show({message,typeCode}) {
    typeCode = typeCode.toLowerCase();
    if (AVAILABLETYPES.includes(typeCode)) this.scope.type = typeCode;
    this.scope.message = message;
    this.scope.showSnack = true;
    this.scope.type = typeCode;
  }

}


export default WarningController;
