// const teamMembers = [
//     {
//         name: "Sarah Johnson",
//         role: "Project Lead",
//         image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//     },
//     {
//         name: "Michael Chen",
//         role: "Operations Manager",
//         image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//     },
//     {
//         name: "Emily Rodriguez",
//         role: "Community Liaison",
//         image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//     },
//     {
//         name: "David Kim",
//         role: "Technical Specialist",
//         image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//     }
// ];

// function loadTeamMembers() {
//     const container = document.getElementById('teamContainer');
    
//     teamMembers.forEach(member => {
//         const memberElement = document.createElement('div');
//         memberElement.className = 'col-md-3';
//         memberElement.innerHTML = `
//             <div class="team-member">
//                 <img src="${member.image}" alt="${member.name}">
//                 <h4>${member.name}</h4>
//                 <p>${member.role}</p>
//             </div>
//         `;
//         container.appendChild(memberElement);
//     });
// }

document.addEventListener('DOMContentLoaded', () => {
    loadTeamMembers();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate timeline items on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease-out';
        observer.observe(item);
    });
});