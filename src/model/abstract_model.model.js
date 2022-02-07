import api from '$services/api_service.services';

class AbstractModel {
  constructor() {
    this.api = api;
  }
}

export default AbstractModel;
