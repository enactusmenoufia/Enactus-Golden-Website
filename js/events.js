/** @format */

// Initialize AOS
AOS.init({
	duration: 800,
	offset: 100,
	once: true,
});

// Filter functionality
document.querySelectorAll(".filter-btn").forEach((button) => {
	button.addEventListener("click", () => {
		// Remove active class from all buttons
		document.querySelectorAll(".filter-btn").forEach((btn) => {
			btn.classList.remove("active");
		});

		// Add active class to clicked button
		button.classList.add("active");

		const filter = button.getAttribute("data-filter");

		// Filter events
		document.querySelectorAll("[data-category]").forEach((event) => {
			if (filter === "all" || event.getAttribute("data-category") === filter) {
				event.style.display = "block";
			} else {
				event.style.display = "none";
			}
		});
	});
});
