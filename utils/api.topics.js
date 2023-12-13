import axios from "axios";

axios.defaults.baseURL = "https://newsit-2qbt.onrender.com/api";

export const getTopics = () => {
	return axios.get(`/topics`).then(({ data }) => data.topics);
};
