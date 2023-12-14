import { useEffect, useState } from "react";
import { getTopics } from "../../../utils/api.topics";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Toolbar.css";

const ToolBar = () => {
	const [hasToolbar, setHasToolbar] = useState(false);
	const [topics, setTopics] = useState([]);

	const [searchParams] = useSearchParams();
	const [sortQuery, setSortQuery] = useState(searchParams.get("sort_by"));
	const [orderQuery, setOrderQuery] = useState(searchParams.get("order"));
	const [topicQuery, setTopicQuery] = useState(searchParams.get("topic"));

	const navigate = useNavigate();

	useEffect(() => {
		getTopics(searchParams).then((topics) => {
			setTopics(topics);
		});
	}, []);

	const toggleToolbar = () => {
		setHasToolbar((current) => !current);
	};

	const handleNavToQuery = (e) => {
		const queryParam = e.target.name;
		const queryValue = e.target.value;

		queryParam === "topic" && setTopicQuery(topicQuery);
		queryParam === "sort_by" && setSortQuery(sortQuery);
		queryParam === "order" && setOrderQuery(orderQuery);

		searchParams.set(queryParam, e.target.value);

		navigate(`/articles/?${searchParams.toString()}`);
	};

	return (
		<section className="toolbar">
			<button onClick={toggleToolbar}>Tools</button>
			{hasToolbar && (
				<>
					<select name="topic" id="topic" onChange={handleNavToQuery}>
						<option value="" id="defaultTopic">
							{topicQuery ? "All Topics" : "Select Topic"}
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
							<option value="desc">Descending</option>
							<option value="asc">Ascending</option>
						</select>
					</div>
				</>
			)}
		</section>
	);
};

export default ToolBar;
