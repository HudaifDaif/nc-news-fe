import { useEffect, useState } from "react";
import { getTopics } from "../../../utils/api.topics";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./Toolbar.css";

const ToolBar = () => {
	const [hasToolbar, setHasToolbar] = useState(false);
	const [topics, setTopics] = useState([]);

	const [searchParams] = useSearchParams();
	const [sortQuery, setSortQuery] = useState(searchParams.get("sort_by"));
	const [orderQuery, setOrderQuery] = useState(searchParams.get("order"));

	const navigate = useNavigate();

	let { topic } = useParams();

	useEffect(() => {
		getTopics(searchParams).then((topics) => {
			setTopics(topics);
		});
	}, []);

	const toggleToolbar = () => {
		setHasToolbar((current) => !current);
	};

	const handleNavToFilter = (e) => {
		e.preventDefault();
		const topicQuery = e.target.value;
		topicQuery ? navigate(`/topics/${topicQuery}/articles`) : navigate("/");
	};

	const handleNavToQuery = (e) => {
		const queryParam = e.target.name;
		const queryValue = e.target.value;

		queryParam === "sort_by" && setSortQuery(sortQuery);
		queryParam === "order" && setOrderQuery(orderQuery);

		searchParams.set(queryParam, e.target.value);

		const topicFilter = document.getElementById("topicFilter");


		topicFilter.selectedIndex = 0;

		navigate(`/articles/?${searchParams.toString()}`);
	};

	return (
		<section className="toolbar">
			<button onClick={toggleToolbar}>Tools</button>
			{hasToolbar && (
				<>
					<select
						name="topicFilter"
						id="topicFilter"
						onChange={handleNavToFilter}
					>
						<option value="" id="defaultTopic">
							{topic ? "All Topics" : "Select Topic"}
						</option>
						{topics.map((topic) => (
							<option key={topic.slug} value={topic.slug}>
								{topic.slug}
							</option>
						))}
					</select>
					<div className="sort-options">
						<p>Sort By:</p>
						<select
							name="sort_by"
							id="sort_by"
							onChange={handleNavToQuery}
						>
							<option value="created_at">Date Created</option>
							<option value="votes">Popularity</option>
						</select>
						<select
							name="order"
							id="order"
							onChange={handleNavToQuery}
						>
							<option value="DESC">Descending</option>
							<option value="ASC">Ascending</option>
						</select>
					</div>
				</>
			)}
		</section>
	);
};

export default ToolBar;
