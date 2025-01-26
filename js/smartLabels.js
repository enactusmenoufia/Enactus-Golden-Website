/** @format */

const projects = [
	{
		title: "Flour Production",
		description:
			"Empowering local communities through sustainable flour production using innovative milling techniques.",
		image:
			"https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
		link: "flour.html",
	},
	{
		title: "Hydrogels",
		description:
			"Developing eco-friendly hydrogels for sustainable agriculture and water conservation.",
		image:
			"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
		link: "hydrogels.html",
	},
	{
		title: "Natural Pigments",
		description:
			"Creating sustainable natural pigments from agricultural waste for eco-friendly coloring solutions.",
		image:
			"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
		link: "pigments.html",
	},
];

const teamMembers = [
	{
		name: "Sarah Johnson",
		role: "Project Lead",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
	},
	{
		name: "Michael Chen",
		role: "Research Lead",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
	},
	{
		name: "Emily Rodriguez",
		role: "Community Manager",
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
	},
];

function loadProjects() {
	const container = document.getElementById("projectsContainer");

	projects.forEach((project) => {
		const projectElement = document.createElement("div");
		projectElement.className = "col-md-4";
		projectElement.innerHTML = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="btn-learn-more">Learn More</a>
                </div>
            </div>
        `;
		container.appendChild(projectElement);
	});
}

function loadTeamMembers() {
	const container = document.getElementById("teamContainer");

	teamMembers.forEach((member) => {
		const memberElement = document.createElement("div");
		memberElement.className = "col-md-4";
		memberElement.innerHTML = `
            <div class="team-member">
                <img src="${member.image}" alt="${member.name}">
                <h4>${member.name}</h4>
                <p>${member.role}</p>
            </div>
        `;
		container.appendChild(memberElement);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	loadProjects();
	loadTeamMembers();

	// Smooth scrolling for navigation links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});
});
