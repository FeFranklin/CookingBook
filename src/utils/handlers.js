import axios from "axios";

const http = axios.create({
  baseURL: "/api",
  headers: {
    "Content-type": "application/json"
  }
});

const get = () => {
  return http.get('/tasty/recipe');
};

const getAll = () => {
  return http.get("/");
};

const create = data => {
  return http.post("/create/pet", data);
};

const update = (id, data) => {
  return http.put(`/update/${id}`, data);
};

const remove = id => {
  return http.delete(`/delete/${id}`);
};

export default { create, get, getAll, update, remove };