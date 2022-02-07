import api from './api';

const url = '/public/addresses/cep/';

class CepHandler {


  /**
   *
   * @param cep <string:
   */
  static async searchAddress(cep) {

    const foundAddress = await api.get(`${url}${cep}`);
    return foundAddress;
  }

}


export default CepHandler
