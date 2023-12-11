import axios from "axios";

axios.defaults.baseURL = "https://newsit-2qbt.onrender.com/api";

export const getArticles = (page) => {
	return axios
		.get("/articles", {
			params: {
				p: page,
			},
		})
		.then(({ data }) => data);
};

export const getArticleById = (id) => {
	return axios
		.get(`/articles/${id}`)
		.then(({ data }) => data);
};
