import axios from "axios";

axios.defaults.baseURL = "https://newsit-2qbt.onrender.com/api";

export const getArticles = (page, topic) => {
	const params = { p: page };
	if (topic) params.topic = topic;
	return axios.get("/articles", { params }).then(({ data }) => {
		
		console.log("🚀 ~ file: api.articles.js:12 ~ returnaxios.get ~ data:", data)
		return data
	});
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
