import axios from "axios";

axios.defaults.baseURL = "https://newsit-2qbt.onrender.com/api";

export const getArticles = (page, articleQueries) => {
	const params = {
		p: page,
	};

	Object.keys(articleQueries).forEach((key) => {
		params[key] = articleQueries[key];
	});

	return axios.get("/articles", { params }).then(({ data }) => data);
};

export const getArticleById = (id) => {
	return axios.get(`/articles/${id}`).then(({ data }) => data);
};

export const patchArticleById = (id, opinion) => {
	return axios
		.patch(`/articles/${id}`, {
			inc_votes: opinion,
		})
		.then(({ data }) => data);
};
