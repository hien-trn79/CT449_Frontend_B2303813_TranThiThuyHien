import { jsonClient, formClient } from "./api.service.js";

class contactService {
  constructor(baseUrl = "/api/contacts") {
    this.api = jsonClient(baseUrl);
    this.formApi = formClient(baseUrl);
  }

  // [GET] http://localhost:8080/api/contacts/
  async getAll() {
    return (await this.api.get("/")).data;
  }

  // [POST] http://localhost:8080/api/contacts/
  async create(data) {
    return (await this.api.post("/", data)).data;
  }

  // [DELETE] http://localhost:8080/api/contacts/
  async deleteAll() {
    return (await this.api.delete("/")).data;
  }

  async getAllFavorite() {
    return (await this.api.get("/favorite")).data;
  }

  async get(id) {
    return (await this.api.get(`/${id}`)).data;
  }

  async update(id, data) {
    return (
      await this.formApi.put(`/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data;
  }

  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }
}

export default new contactService();
