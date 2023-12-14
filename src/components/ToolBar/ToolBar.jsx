import { useEffect, useState } from "react";
import { getTopics } from "../../../utils/api.topics";
import { useNavigate, useParams } from "react-router-dom";
import "./Toolbar.css";

const ToolBar = () => {
	const [hasToolbar, setHasToolbar] = useState(false);
	const [topics, setTopics] = useState([]);
	const navigate = useNavigate();

	let { topic } = useParams();

	useEffect(() => {
		getTopics().then((topics) => {
			setTopics(topics);
		});
	}, []);

	const toggleToolbar = () => {
		setHasToolbar((current) => !current);
	};

	const handleNavToFilter = (e) => {
		e.preventDefault();
		const topicQuery = e.target.value;
		topicQuery ? navigate(`/topics/${topicQuery}`) : navigate("/");
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
						<option value="">
							{topic ? "All Topics" : "Select Topic"}
						</option>
						{topics.map((topic) => (
							<option key={topic.slug} value={topic.slug}>
								{topic.slug}
							</option>
						))}
					</select>
				</>
			)}
		</section>
	);
};

export default ToolBar;
