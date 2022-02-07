import AbstractModel from "./abstract_model.model";

class UserModel extends AbstractModel {
  async create(user) {
    try {
      const response = await this.api.post(`/public/users`, user);
      return { error: false, ...response };
    } catch (e) {
      return { error: true, ...e };
    }
  }
  
  async getUser(){
    try {
      const response = await this.api.get(`/user?includes=people`);
      return { error: false, ...response.data.user };
    } catch (e) {
      return { error: true, ...e };
    }
  }
  async login(user) {
    try {
      const response = await this.api.post(`/public/users?mock=person`, user);
      return { error: false, ...response };
    } catch (e) {
      return { error: true, ...e };
    }
  }
  async list({includes = undefined}) {
    try {
      const response = await this.api.get('users', {
        params: {
          includes,
        },
      });
      return { error: false, ...response.data };
    } catch (e) {
      return { error: false, ...e };
    }
  }
  async getByID(id){
    try {
      const response = await this.api.get(`/users/${id}?includes=people`);
      return { error: false, ...response.data.response };
    } catch (e) {
      return { error: true, ...e };
    }
  }
  
  async getRole(){
    try {
      const response = await this.api.get(`/user/roles`);
      return response.data.roles;
    } catch (e) {
      return { error: true, ...e };
    }
  }
  
  
  async update(user){
    try {
      const response = await this.api.put(`/user`,user);
      return response.data.roles;
    } catch (e) {
      return { error: true, ...e };
    }
  }
}

export default new UserModel();
