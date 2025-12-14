// --- 1. SAMPLE JOB DATA ---
// In a real application, this data would come from a server API call.
const jobData = [
    {
        id: 1,
        title: "Senior Full-Stack Developer",
        company: "TechSolutions Inc.",
        logo: "assets/logos/techsolutions.png", // Placeholder image path
        experience: "Experienced (5+ yrs)",
        salary: "₹18 LPA - ₹25 LPA",
        location: "Bangalore, India",
        fresher: false,
        keywords: "react, nodejs, aws, senior, full-stack",
        applyLink: "https://example.com/apply/techsolutions1"
    },
    {
        id: 2,
        title: "Entry-Level Data Analyst",
        company: "DataCo Analytics",
        logo: "assets/logos/dataco.png",
        experience: "Fresher (0-1 yr)",
        salary: "₹3.5 LPA - ₹5 LPA",
        location: "Remote",
        fresher: true,
        keywords: "data, analyst, fresher, sql, excel, remote",
        applyLink: "https://example.com/apply/dataco2"
    },
    {
        id: 3,
        title: "Marketing Specialist",
        company: "Global Commerce Ltd.",
        logo: "assets/logos/globalcommerce.png",
        experience: "Experienced (2-4 yrs)",
        salary: "Confidential",
        location: "Mumbai, India / Hybrid",
        fresher: false,
        keywords: "marketing, specialist, digital, content, seo, hybrid",
        applyLink: "https://example.com/apply/globalcommerce3"
    }
];

const jobContainer = document.getElementById('jobContainer');
const searchInput = document.getElementById('searchInput');
const noJobsMessage = document.getElementById('noJobsMessage');

// --- 2. RENDER JOB CARDS ---
function renderJobs(jobs) {
    jobContainer.innerHTML = ''; 

    if (jobs.length === 0) {
        noJobsMessage.style.display = 'block';
        return;
    } else {
        noJobsMessage.style.display = 'none';
    }

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        jobCard.innerHTML = `
            <img src="${job.logo}" alt="${job.company} Logo" class="company-logo" onerror="this.onerror=null;this.src='assets/logos/default.png';">
            <h3>${job.title}</h3>
            <p class="company-name">${job.company}</p>
            <div class="job-meta">
                <span class="meta-tag">${job.location}</span>
                <span class="meta-tag">${job.experience}</span>
                <span class="meta-tag salary-tag">${job.salary}</span>
            </div>
            <div class="apply-link">
                <a href="${job.applyLink}" target="_blank" rel="noopener noreferrer">Apply Now &rarr;</a>
            </div>
        `;
        jobContainer.appendChild(jobCard);
    });
}

// --- 3. FILTER JOBS (Search Functionality) ---
function filterJobs() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (!searchTerm) {
        renderJobs(jobData); 
        return;
    }

    const filteredJobs = jobData.filter(job => {
        return job.title.toLowerCase().includes(searchTerm) ||
               job.company.toLowerCase().includes(searchTerm) ||
               job.location.toLowerCase().includes(searchTerm) ||
               job.keywords.toLowerCase().includes(searchTerm);
    });

    renderJobs(filteredJobs);
}

// --- 4. INITIALIZATION ---
// Load all jobs when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    renderJobs(jobData);
    
    // Add event listener for real-time search (optional, for better UX)
    searchInput.addEventListener('input', filterJobs);
});
        keywords: "marketing, specialist, digital, content, seo, hybrid",
        applyLink: "https://example.com/apply/globalcommerce3"
    }
    // Add more jobs here after receiving posting requests via email
];

const jobContainer = document.getElementById('jobContainer');
const searchInput = document.getElementById('searchInput');
const noJobsMessage = document.getElementById('noJobsMessage');

// --- 2. RENDER JOB CARDS ---
function renderJobs(jobs) {
    jobContainer.innerHTML = ''; // Clear previous jobs

    if (jobs.length === 0) {
        noJobsMessage.style.display = 'block';
        return;
    } else {
        noJobsMessage.style.display = 'none';
    }

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        // Note: The logo path is a placeholder. You would upload and store these logos
        // on your server after the company emails them, then update the data array.
        jobCard.innerHTML = `
            <img src="${job.logo}" alt="${job.company} Logo" class="company-logo" onerror="this.onerror=null;this.src='assets/logos/default.png';">
            <h3>${job.title}</h3>
            <p class="company-name">${job.company}</p>
            <div class="job-meta">
                <span class="meta-tag">${job.location}</span>
                <span class="meta-tag">${job.experience}</span>
                <span class="meta-tag salary-tag">${job.salary}</span>
            </div>
            <div class="apply-link">
                <a href="${job.applyLink}" target="_blank" rel="noopener noreferrer">Apply Now &rarr;</a>
            </div>
        `;
        jobContainer.appendChild(jobCard);
    });
}

// --- 3. FILTER JOBS (Search Functionality) ---
function filterJobs() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (!searchTerm) {
        renderJobs(jobData); // Show all jobs if search is empty
        return;
    }

    const filteredJobs = jobData.filter(job => {
        // Check job title, company name, location, and keywords
        return job.title.toLowerCase().includes(searchTerm) ||
               job.company.toLowerCase().includes(searchTerm) ||
               job.location.toLowerCase().includes(searchTerm) ||
               job.keywords.toLowerCase().includes(searchTerm);
    });

    renderJobs(filteredJobs);
}

// --- 4. INITIALIZATION ---
// Load all jobs when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    renderJobs(jobData);
    
    // Add event listener for real-time search (optional, for better UX)
    searchInput.addEventListener('input', filterJobs);
});

