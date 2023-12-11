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
			console.log(data);
			return data;
		});
};
