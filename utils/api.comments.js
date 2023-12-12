import axios from "axios";

axios.defaults.baseURL = "https://newsit-2qbt.onrender.com/api";

export const getCommentsByArticleId = (article_id, page) => {
	return axios
		.get(`/articles/${article_id}/comments`, {
			params: {
				p: page,
			},
		})
		.then(({ data }) => {
			const { comments, pages } = data;
			return { comments, pages };
		});
};

export const postCommentByArticleId = (article_id, username, body) => {
	return axios
		.post(`/articles/${article_id}/comments`, {
			params: {
				username,
				body,
			},
		})
		.then(({ data }) => data);
};
