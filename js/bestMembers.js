/** @format */

const monthBest = [
	{
		image: "https://i.postimg.cc/s27KNzvQ/Mahmoud-Nayel.png",
		team: "Project Board",
		name: "Mahmoud Nayel",
		TeamRole: "project Head",
		Monthbest: "Team Dynmo For December",
		achievements: ["Driving Innovation", "Creating Impact"],
	},
	{
		image: "https://i.postimg.cc/fWKqsM5Y/Begad-Mohamed.png",
		team: "HR Board",
		name: "Begad Elnakeep",

		TeamRole: "Vice Head HR",
		Monthbest: "Best Vice Head For December",
		achievements: [
			"Exceptional Leadership and Support",
			"Strategic Decision-Making",
		],
	},
	{
		image: "https://i.postimg.cc/RFmGrYHP/Manar-Alaa.png",
		team: "Logistics Board",
		name: "Manar Alaa",

		TeamRole: "Logistics Head",
		Monthbest: "Best Head For December",
		achievements: [
			"Efficient Operations Management",
			"Streamlined Processes and Improved Efficiency",
		],
	},
	{
		image: "https://i.postimg.cc/RVZsV2by/Beshoy-Ashraf.png",
		team: "Graphic Design Board",
		name: "Beshoy Ashraf",

		TeamRole: "Graphic Desigen Head",
		Monthbest: "Head Of The Best Team - December",
		achievements: ["Maximizing Team Strengths", "Achieving Milestones"],
	},

	{
		image: "https://i.postimg.cc/L5HyPW4q/Amr-Elsheshiny.png",
		team: "PR-FR Board",
		name: "Amr Elsheshiny",

		TeamRole: "PR-FR Head",
		Monthbest: "Best Interviewer",
		achievements: [
			"Effective Questioning Techniques",
			"Time Management in Interviews",
		],
	},
	{
		image: "https://i.postimg.cc/cLVXhC4G/Ibrahim-Elkalashy.png",
		team: "Project",
		name: "Ibrahim Elkalashy",

		TeamRole: "project Member",
		Monthbest: "Best Recruiter",
		achievements: [
			"Exceptional Candidate Experience",
			"Streamlined Recruitment Process",
		],
	},
	{
		image: "https://i.postimg.cc/MK64fnXs/Ahmed-Safan.png",
		team: "Projecet",
		name: "Ahmed Safan",

		TeamRole: "Project Member",
		Monthbest: "Best Recruiter",
		achievements: ["High Conversion Rate"],
	},
	{
		image: "https://i.postimg.cc/ncSdsTyz/Ganna-Bahaa.png",
		team: "HR",
		name: "Ganna Bahaa",

		TeamRole: "HR Member",
		Monthbest: "Most dedicated interviewer",
		achievements: ["Exceeded Recruitment Targets", "High Candidate Engagement"],
	},
	{
		image: "https://i.postimg.cc/mgcm7C4S/Hager-Mohamed.png",
		team: "Digital Marketing",
		name: "Hager Mohamed",

		TeamRole: "Digital Marketing Member",
		Monthbest: "Most Dedicated Recruiter",
		achievements: ["High Candidate Engagement", "High Candidate Engagement"],
	},

	{
		image: "https://i.postimg.cc/7hsN2YQc/Mostafa-Abdou.png",
		team: "PR-FR",
		name: "Mostafa Abdou",

		TeamRole: "PR-FR Member",
		Monthbest: "Most Dedicated Recruiter",
		achievements: ["High Candidate Engagement", "High Candidate Engagement"],
	},
	{
		image: "https://i.postimg.cc/3rn16nJB/Rahma-Elabd.png",
		team: "HR",
		name: "Rahma Elabd",

		TeamRole: "HR Member",
		Monthbest: "Best interviewer",
		achievements: [
			"Exceptional Candidate Experience",
			"Streamlined Recruitment Process",
		],
	},
	{
		image: "https://i.postimg.cc/wTM2dL1d/Yara-Ashraf.png",
		team: "Digital Marketing",
		name: "Yara Ashraf",

		TeamRole: "Digital Marketing Member",
		Monthbest: "Most dedicated interviewer",
		achievements: ["High Candidate Engagement", "High Candidate Engagement"],
	},
];

function createStarCard(star) {
	return `
        <div class="col-md-4 mb-4">
            <div class="star-card">
                <div class="star-card-inner">
                    <div class="star-card-front">
                        <div class="star-image-container">
                            <img src="${star.image}" alt="${
		star.name
	}" class="star-image">
                            <div class="star-team-badge">${star.team}</div>
                        </div>
                        <h3 class="star-name">${star.name}</h3>
                        
                    </div>
                    <div class="star-card-back">
                        <div class="back-content">
                            <div class="quote-section">
                                <div class="quote-icon">❝</div>
                                <p class="quote text-white">${star.TeamRole}</p>
                            </div>
                            
                            <div class="impact-stats">
                                <div class="impact-number ">${
																	star.Monthbest
																}</div>
                               
                            </div>

                            <div class="achievements-section">
                                <div class="achievements-title">Achievements</div>
                                <div class="achievements">
                                    ${star.achievements
																			.map(
																				(achievement) =>
																					`<span class="achievement-badge">${achievement}</span>`
																			)
																			.join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initializeStarsPage() {
	const container = document.getElementById("starsContainer");
	container.innerHTML = monthBest.map((star) => createStarCard(star)).join("");
}

document.addEventListener("DOMContentLoaded", initializeStarsPage);
