/** @format */

document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("contactForm");
	const submitBtn = document.getElementById("submitBtn");
	const notification = document.getElementById("notification");

	const FORM_ENDPOINT =
		"https://script.google.com/macros/s/AKfycbxAK8n8Yu8M2NKbaDPjSQs_tNpjGOQ1XJH2GbRK4YkM-gMNtR2I5HnAjo-9dgRc5VfR/exec";

	function showNotification(message, isSuccess) {
		notification.textContent = message;
		notification.className = `alert ${
			isSuccess ? "alert-success" : "alert-danger"
		} mt-3`;
		notification.style.display = "block";

		setTimeout(function () {
			notification.style.display = "none";
		}, 3000);
	}

	form.addEventListener("submit", function (e) {
		e.preventDefault();
		submitBtn.disabled = true;

		const formData = new FormData(form);
		const data = new URLSearchParams(formData);

		fetch(FORM_ENDPOINT, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: data.toString(),
		})
			.then(function (response) {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				showNotification("Message sent successfully!", true);
				form.reset();
			})
			.catch(function (error) {
				console.error("Error:", error);
				showNotification("Failed to send message. Please try again.", false);
			})
			.finally(function () {
				submitBtn.disabled = false;
			});
	});
});
