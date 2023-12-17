import axios from "axios";

axios.defaults.baseURL = "https://saiddit.onrender.com/api";

const getArticles = (page, searchParams) => {
	const params = { p: page };

	const topic = searchParams.get("topic");
	const sort_by = searchParams.get("sort_by");
	const order = searchParams.get("order");

	if (topic) params.topic = topic;
	if (sort_by) params.sort_by = sort_by;
	if (order) params.order = order;

	return axios.get("/articles", { params }).then(({ data }) => data);
};

export const getUsers = () => {
	return axios.get("/users").then(({data}) => data.users);
};
