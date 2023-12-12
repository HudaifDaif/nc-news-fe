export const scroll = (id) => {
	const element = document.querySelector(id);
	element.scrollIntoView({ behavior: "smooth", block: "start" });
};
