import axios from "axios";

axios.defaults.baseURL = "https://saiddit.onrender.com/api";
// axios.defaults.baseURL = "http://localhost:9090/api";

export const getUsers = () => {
	return axios.get("/users").then(({data}) => data.users);
};
