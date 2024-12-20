/** @format */

window.addEventListener("scroll", function () {
	const navbar = document.getElementById("navbar");
	if (window.scrollY > 57) {
		// Add class when scrolled down 50px
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});
if (window.location.hash) {
	history.pushState(
		"",
		document.title,
		window.location.pathname + window.location.search
	);
}
