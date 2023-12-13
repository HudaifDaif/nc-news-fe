import { useEffect, useState } from "react";
import { getTopics } from "../../../utils/api.topics";
import { useNavigate } from "react-router-dom";
import "./Toolbar.css";

const ToolBar = () => {
	const [hasFilter, setHasFilter] = useState(false);
	const [topics, setTopics] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		getTopics().then((topics) => {
			setTopics(topics);
		});
	}, []);

	const handleFilter = () => {
		setHasFilter((current) => !current);
	};

	const handleNavToFilter = (e) => {
		e.preventDefault();
		const topicQuery = e.target.elements.topicFilter.value;
		topicQuery && navigate(`/topics/${topicQuery}`);
	};

	return (
		<section className="toolbar">
			<button onClick={handleFilter}>filter</button>
			<form onSubmit={handleNavToFilter}>
				{hasFilter && (
					<>
						<select name="topicFilter" id="topicFilter">
							<option value="">Select Filter</option>
							{topics.map((topic) => (
								<option key={topic.slug} value={topic.slug}>
									{topic.slug}
								</option>
							))}
						</select>
						<button>Apply</button>
					</>
				)}
			</form>
		</section>
	);
};

export default ToolBar;
