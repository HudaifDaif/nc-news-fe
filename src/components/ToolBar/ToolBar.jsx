import { useEffect, useState } from "react";
import { getTopics } from "../../../utils/api.topics";
import "./Toolbar.css";

const ToolBar = ({ setArticleQueries }) => {
	const [hasFilter, setHasFilter] = useState(false);
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then((topics) => {
			setTopics(topics);
		});
	}, []);

	const handleFilter = () => {
		setHasFilter((current) => !current);
	};

	const handleSetQuery = (e, param) => {
		e.preventDefault();

		console.log(e.target.value);
		setArticleQueries((current) => {
			const copiedQuery = { ...current };
			copiedQuery[param] = e.target.value;
			return copiedQuery;
		});
	};

	return (
		<section className="toolbar">
			<button onClick={handleFilter}>filter</button>
			<form>
				{hasFilter && (
					<select name="topic-filter" id="topic-filter">
						<option value="">Select Filter</option>
						{topics.map((topic) => (
							<option
								key={topic.slug}
								value={topic.slug}
								onClick={(e) => handleSetQuery(e, "topic")}
							>
								{topic.slug}
							</option>
						))}
					</select>
				)}
			</form>
		</section>
	);
};

export default ToolBar;
