import http from "../http-common";

class ClassDataService {
  create(data) {
    return http.post("/classes", data);
  }

  getAll() {
    return http.get("/classes");
  }

  getById(id) {
    return http.get(`/classes/${id}`);
  }
}

export default new ClassDataService();
