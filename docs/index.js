function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    sidebar.classList.toggle('-translate-x-full');

    // Toggle button visibility and position
    if (sidebar.classList.contains('-translate-x-full')) {
        toggleBtn.classList.remove('opacity-0', 'pointer-events-none');
        toggleBtn.classList.remove('translate-x-64');
        prevArrow.classList.remove('hidden');
        nextArrow.classList.remove('hidden');
    } else {
        toggleBtn.classList.add('opacity-0', 'pointer-events-none');
        toggleBtn.classList.add('translate-x-64');
        prevArrow.classList.add('hidden');
        nextArrow.classList.add('hidden');
    }
}

function navigate(direction) {
    const container = document.querySelector('.snap-x');
    const slides = Array.from(document.querySelectorAll('.snap-start'));
    const currentIndex = Math.round(container.scrollLeft / container.offsetWidth);

    // Calculate next slide index with circular navigation
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = slides.length - 1; // Wrap to the last slide
    if (nextIndex >= slides.length) nextIndex = 0; // Wrap to the first slide

    // Scroll to the next slide
    slides[nextIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
    });

    // Update navigation after scroll
    updateNavigation((nextIndex + 1).toString());
}

function updateNavigation(currentSlide) {
    // Update navigation dots
    document.querySelectorAll('[data-slide]').forEach(dot => {
        const isActive = dot.getAttribute('data-slide') === currentSlide;
        dot.classList.toggle('bg-sky-900', isActive);
        dot.classList.toggle('bg-black', !isActive);
    });

    // Update sidebar links
    document.querySelectorAll('#sidebar a').forEach(link => {
        const isActive = link.getAttribute('href') === `#slide${currentSlide}`;
        link.classList.toggle('bg-sky-300 rounded', isActive); 
        link.classList.toggle('text-blue-950', !isActive);
    });
}

// Initialize the observer for slide changes
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const slideNumber = entry.target.id.replace('slide', '');
                updateNavigation(slideNumber);
            }
        });
    },
    { threshold: 0.5 }
);

// Start observing all slides
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.snap-start').forEach(slide => {
        observer.observe(slide);
    });
});

function animateDonut(element, percentage) {
    const circle = element.querySelector('circle:nth-child(2)');
    circle.style.transition = 'stroke-dashoffset 1s ease';
    circle.style.strokeDashoffset = 100 - percentage;
}

function resetDonut(element) {
    const circle = element.querySelector('circle:nth-child(2)');
    circle.style.transition = 'stroke-dashoffset 0.3s ease';
    circle.style.strokeDashoffset = 100;
}
// Close the sidebar if click is outside the sidebar and toggle button
document.addEventListener("click", function (e) {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");
    // If the sidebar is open (i.e. not having -translate-x-full) and the click target is not within sidebar or toggleBtn:
    if (
        !sidebar.classList.contains("-translate-x-full") &&
        !sidebar.contains(e.target) &&
        !toggleBtn.contains(e.target)
    ) {
        toggleSidebar();
    }
});

fetch('../data/leetcode_stats.json')
    .then(res => res.json())
    .then(data => {
        const stats = data.data;
        const rating = stats.userContestRanking.rating.toFixed(0);
        const topPercentage = stats.userContestRanking.topPercentage;
        const globalRanking = stats.userContestRanking.globalRanking;
        const totalParticipants = stats.userContestRanking.totalParticipants;
        const badge = stats.userContestRanking.badge?.name; // Safely access badge name

        // Update rating, rank, and total participants
        document.getElementById('lc-rating').textContent = rating;
        document.getElementById('lc-rank').textContent = globalRanking;
        document.getElementById('lc-total').textContent = totalParticipants;

        // Update badge dynamically
        const badgeImg = document.getElementById('lc-badge');
        const badgeText = document.getElementById('lc-badge-text');

        if (badge) {
            console.log(`Badge found: ${badge}`); // Debugging: Log badge name
            badgeImg.src = `../media/${badge.toLowerCase()}-badge.gif`; // Dynamically set badge image
            badgeImg.alt = `${badge} Badge`;
            badgeImg.classList.remove('hidden'); // Show badge image

            badgeText.textContent = badge; // Set badge text
            badgeText.classList.remove('hidden'); // Show badge text
        } else {
            console.log('No badge found'); // Debugging: Log if no badge
            badgeImg.classList.add('hidden'); // Hide badge image if no badge
            badgeText.classList.add('hidden'); // Hide badge text if no badge
        }
    })
    .catch(err => console.error('Error fetching LeetCode stats:', err)); // Debugging: Log fetch errors

fetch('../data/codechef_stats.json')
    .then(res => res.json())
    .then(data => {
        document.getElementById('cc-rating').textContent = data.rating;
        document.getElementById('cc-global').textContent = data.global_rank;
        document.getElementById('cc-country').textContent = data.country_rank;

        const starColors = ["GRAY", "GREEN", "BLUE", "PURPLE", "YELLOW", "ORANGE", "RED"];
        const starsContainer = document.getElementById('cc-stars');
        starsContainer.innerHTML = "";

        // Add dynamic text for ${color} CODER
        const color = starColors[data.stars - 1] || "GRAY"; // Default to GRAY if no stars
        const coderLevel = document.getElementById('cc-coder-level');
        coderLevel.textContent = `${color} CODER`;
        coderLevel.className = `text-${color.toLowerCase()}-400 text-sm text-center font-bold`; // Match text color

        // Add hover animation for stars
        const codechefSection = document.querySelector('.codechef-section');
        codechefSection.addEventListener('mouseenter', () => {
            starsContainer.innerHTML = ""; // Clear stars before animating
            for (let i = 0; i < data.stars; i++) {
                setTimeout(() => {
                    const star = document.createElement("span");
                    star.innerHTML = "★";
                    star.className = `text-${color.toLowerCase()}-400 star hidden`; // Add "hidden" class initially
                    starsContainer.appendChild(star);

                    // Trigger fade-in and scale-up animation
                    setTimeout(() => {
                        star.classList.remove('hidden');
                        star.classList.add('fade-in');
                    }, 50); // Slight delay to trigger CSS transition
                }, i * 500); // Delay of 500ms for each star
            }
        });

        // Optional: Clear stars on mouseleave (if desired)
        codechefSection.addEventListener('mouseleave', () => {
            starsContainer.innerHTML = ""; // Clear stars when hover ends
        });
    });

// skill page
const skills = [
    { name: "DSA", icon: "../media/dsa.png", percent: 90, title: "DS and Algo" },
    { name: "Python", icon: "https://img.icons8.com/3d-fluency/1500/python.png", percent: 80, title: "Python" },
    { name: "C++", icon: "https://img.icons8.com/fluency/1500/c-plus-plus-logo.png", percent: 60, title: "C++" },
    { name: "Java", icon: "https://img.icons8.com/3d-fluency/1500/java-coffee-cup-logo.png", percent: 50, title: "Java" },
    { name: "MySQL", icon: "https://img.icons8.com/color/1500/mysql-logo.png", percent: 70, title: "MySQL" },
    { name: "MongoDB", icon: "https://img.icons8.com/color/1500/mongodb.png", percent: 70, title: "MongoDB" },
    { name: "JavaScript", icon: "https://img.icons8.com/arcade/1500/javascript.png", percent: 40, title: "JavaScript" },
    { name: "HTML", icon: "https://img.icons8.com/3d-fluency/1500/source-code.png", percent: 60, title: "HTML" },
    { name: "Django", icon: "https://img.icons8.com/external-tal-revivo-green-tal-revivo/100/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-green-tal-revivo.png", percent: 40, title: "Django" },
    { name: "NodeJS", icon: "https://img.icons8.com/color/1500/nodejs.png", percent: 60, title: "NodeJS" },
    { name: "ReactJS", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png", percent: 65, title: "ReactJS" },
    { name: "PyTorch", icon: "https://img.icons8.com/arcade/1500/pytorch.png", percent: 70, title: "PyTorch" },
    { name: "Langchain", icon: "../media/langchain-color.png", percent: 50, title: "Langchain" },
    { name: "Hadoop", icon: "https://img.icons8.com/color/1500/hadoop-distributed-file-system.png", percent: 30, title: "Hadoop" },
];

function createSkillCard({ icon, percent, title }) {
    return `
        <div class="group relative w-[100px] h-[100px] mx-auto flex items-center justify-center transition-all duration-300 hover:scale-110"
             onmouseover="animateDonut(this, ${percent})" onmouseout="resetDonut(this)">
            <img src="${icon}" alt="${title}" title="${title}"
                 class="w-12 h-12 z-10 transition-all duration-300 group-hover:w-8 group-hover:h-8" />
            <svg viewBox="0 0 36 36"
                 class="absolute w-[100px] h-[100px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                <circle class="text-black" stroke-width="4" stroke="currentColor"
                        fill="transparent" r="16" cx="18" cy="18" />
                <circle class="text-blue-500" stroke-width="4" stroke="currentColor"
                        fill="transparent" r="16" cx="18" cy="18" stroke-dasharray="100"
                        stroke-dashoffset="100"
                        style="transform: rotate(-90deg); transform-origin: center;" />
            </svg>
        </div>`;
}


// projects page

  const projects = [
    {
      link: "https://github.com/icode100/lape",
      description: "Created a model using Laplace distribution for answering complex queries over Knowledge graphs that performs better than the current state of the art probabilistic model.",
      image: "../media/CQR_Project.png"
    },
    {
      link: "https://github.com/icode100/anicygan",
      description: "Used CycleGAN to generate anime images from real images. The model is trained on a dataset of 1000 anime images and 1000 real images.",
      image: "../media/anicygan.png"
    },
    {
      link: "https://github.com/icode100/portgenio",
      description: "A portfolio generator that creates a portfolio website using information given by the user. User can choose from several designs available.",
      image: "../media/portgen.png"
    },
    {
      link: "https://github.com/icode100/epic1",
      description: "A hostel management system made using Django and React.js with SQLite as database.",
      image: "../media/homan.png"
    }
  ];

  const container = document.getElementById('projectGrid');

  projects.forEach(project => {
    container.innerHTML += `
      <a href="${project.link}" target="_blank"
         class="w-40 h-40 bg-sky-300 border-4 border-red-200 rounded-lg transform transition-all duration-300 hover:scale-125 hover:shadow-xl relative group overflow-hidden">
        <div class="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300">
          <img src="${project.image}" alt=""
               class="w-full h-full object-cover rounded-lg" />
        </div>
        <div class="absolute inset-0 flex items-center justify-center p-2 text-xs text-center text-sky-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ${project.description}
        </div>
      </a>`;
  });




window.onload = function () {
    const container = document.getElementById("skills-grid");
    container.innerHTML = skills.map(createSkillCard).join("");
};


