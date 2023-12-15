import "./Toolbar.css";

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Button from "@mui/joy/Button";
import ListItemButton from "@mui/joy/ListItemButton";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import { getTopics } from "../../../utils/api.topics";

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

	const handleNavToQuery = (e, queryValue, queryParam) => {
		queryValue
			? searchParams.set(queryParam, queryValue)
			: searchParams.delete(queryParam);

		navigate(`/articles/?${searchParams.toString()}`);
	};

	return (
		<section>
			<ListItemButton
				variant="outlined"
				onClick={toggleToolbar}
				sx={{
					margin: "8px",
					padding: "10px",
					borderInline: "none",
				}}
			>
				Sort and Filter
			</ListItemButton>
			{hasToolbar && (
				<>
					<Select
						onChange={(e, value) =>
							handleNavToQuery(e, value, "topic")
						}
						placeholder="Filter by topic"
					>
						<Option value="">All Topics</Option>
						{topics.map((topic) => (
							<Option key={topic.slug} value={topic.slug}>
								{topic.slug}
							</Option>
						))}
					</Select>
					<div className="sort-options">
						<Select
							placeholder="Sort By"
							onChange={(e, value) =>
								handleNavToQuery(e, value, "sort_by")
							}
						>
							<Option value="created_at">Date Created</Option>
							<Option value="votes">Popularity</Option>
						</Select>
						<Select
							placeholder="Order"
							name="order"
							onChange={(e, value) =>
								handleNavToQuery(e, value, "order")
							}
						>
							<Option value="desc">Descending</Option>
							<Option value="asc">Ascending</Option>
						</Select>
					</div>
				</>
			)}
		</section>
	);
};

export default ToolBar;
