import axios from "axios";

axios.defaults.baseURL = "https://newsit-2qbt.onrender.com/api";

export const getCommentsByArticleId = (article_id, page) => {
	return axios
		.get(`/articles/${article_id}/comments`, {
			params: {
				p: page,
			},
		})
		.then(({ data }) => data);
};

export const postCommentByArticleId = (article_id, username, body) => {
	return axios
		.post(`/articles/${article_id}/comments`, {
			username,
			body,
		})
		.then(({ data }) => data);
};

export const deleteCommentById = (comment_id) => {
	return axios.delete(`/comments/${comment_id}`).then(({ data }) => data);
};
