/** @format */

const projects = [
	{
		image: "https://i.postimg.cc/FKzNyPRB/g-Flour-Free-New.jpg",
		title: "Banova",
		description:
			"Banova addresses Egypt's critical banana waste problem, where 2.3 million tons of waste are generated annually. This waste is often burned or dumped, causing severe environmental damage and economic losses for farmers.",
		pageUrl: "banova.html",
	},
	{
		image: "https://i.postimg.cc/Px8HcP1b/smart-Labelmain.jpg",
		title: "Smart Labels",
		description:
			"Smart Labels revolutionize Egypt’s fruit export sector, addressing 30% spoilage rates by extending shelf life by 21 days, reducing waste, boosting farmer income by 80%, enhancing market access, and promoting sustainable agriculture.",
		pageUrl: "smartLabels.html",
	},
];

function loadProjects() {
	const container = document.getElementById("projectsContainer");

	projects.forEach((project) => {
		const projectElement = document.createElement("div");
		projectElement.className = "col-md-6 col-lg-3";
		projectElement.innerHTML = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <h3 class="project-title"style="color:#ffd700">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <a href="${project.pageUrl}" class="project-link" target="_blank" style="color:#ffd700">Learn More →</a>
                </div>
            </div>
        `;
		container.appendChild(projectElement);
	});
}

document.addEventListener("DOMContentLoaded", loadProjects);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
