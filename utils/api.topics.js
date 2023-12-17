import axios from "axios";

axios.defaults.baseURL = "https://saiddit.onrender.com/api";

export const getTopics = () => {
	return axios.get(`/topics`).then(({ data }) => data.topics);
};
