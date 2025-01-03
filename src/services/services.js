import axios from "axios";
const baseUrl = "http://localhost:3001/api/services";

const getAll = () => {
  return axios.get(baseUrl).then((res) => res.data);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then((res) => res.data);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then((res) => res.data);
};

const deleteService = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((res) => res.data);
};

export default {
  getAll,
  create,
  update,
  deleteService,
};
