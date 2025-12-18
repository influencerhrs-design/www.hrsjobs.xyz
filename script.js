/**
 * hrs.jobs - Core Website Logic
 * Handles: Sidebar Navigation, Job Data Fetching, and Real-time Search
 */

// 1. GLOBAL STATE
let allJobs = []; // Stores approved jobs from JSON

// 2. SIDEBAR NAVIGATION LOGIC
// Controls the "Push" effect for desktop and "Overlay" for mobile
function w3_open() {
    const sidebar = document.getElementById("mySidebar");
    const mainContent = document.getElementById("main-content");
    const openNav = document.getElementById("openNav");
    
    sidebar.style.display = "block";

    // Responsive Width Logic
    if (window.innerWidth <= 768) {
        sidebar.style.width = "100%"; // Full screen on mobile
        mainContent.style.marginLeft = "0";
    } else {
        sidebar.style.width = "300px"; // Fixed width on desktop
        mainContent.style.marginLeft = "300px"; // Push effect
    }
    
    if (openNav) openNav.style.display = 'none';
}

function w3_close() {
    const sidebar = document.getElementById("mySidebar");
    const mainContent = document.getElementById("main-content");
    const openNav = document.getElementById("openNav");

    sidebar.style.width = "0";
    mainContent.style.marginLeft = "0";
    
    // Smoothly hide display after transition
    setTimeout(() => {
        sidebar.style.display = "none";
    }, 500); 
    
    if (openNav) openNav.style.display = 'block';
}

// 3. JOB DATA & RENDERING LOGIC
/**
 * Fetches jobs from the local jobs.json file.
 * Ensure your JSON structure includes: title, company, location, 
 * description, deadline, company_email, and whatsapp.
 */
async function fetchJobs() {
    const container = document.getElementById('jobContainer');
    
    try {
        const response = await fetch('jobs.json');
        if (!response.ok) throw new Error("Failed to load job database");
        
        const data = await response.json();
        
        // SEO & Security: Only show approved jobs
        allJobs = data.filter(job => job.approved === true);
        
        renderJobs(allJobs);
    } catch (error) {
        console.error("Database Error:", error);
        if (container) {
            container.innerHTML = `<p class="no-jobs">Unable to load jobs. Please contact support.</p>`;
        }
    }
}

/**
 * Renders job cards into the HTML container
 * Includes Direct WhatsApp and Email application links
 */
function renderJobs(jobs) {
    const container = document.getElementById('jobContainer');
    const noJobsMessage = document.getElementById('noJobsMessage');
    
    if (!container) return; // Guard for pages without a job list

    container.innerHTML = "";
    
    if (jobs.length === 0) {
        if (noJobsMessage) noJobsMessage.style.display = "block";
        return;
    }
    
    if (noJobsMessage) noJobsMessage.style.display = "none";

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = "job-card";
        jobCard.innerHTML = `
            <h3 style="color: var(--color-primary); margin-bottom: 5px;">${job.title}</h3>
            <p class="company-name" style="font-weight:600; font-size: 0.9em;">
                🏢 ${job.company} | 📍 ${job.location}
            </p>
            <p style="color: #bbb; font-size: 0.9em; margin: 12px 0;">
                ${job.description}
            </p>
            <div class="job-meta" style="margin-bottom: 20px;">
                <span class="meta-tag" style="background:#222; padding: 4px 10px; border-radius: 4px; font-size: 0.8em;">
                    <i class="fa fa-calendar-alt"></i> Apply by: ${job.deadline}
                </span>
            </div>
            <div class="apply-actions" style="display: flex; gap: 10px; flex-wrap: wrap;">
                <a href="mailto:${job.company_email}?subject=Application for ${job.title}" 
                   class="btn-primary" 
                   style="background: #ffffff; color: #000; padding: 8px 16px; font-size: 0.85em;">
                   Email CV
                </a>
                <a href="https://wa.me/${job.whatsapp}?text=Hi, I am interested in the ${job.title} position found on hrs.jobs." 
                   target="_blank" 
                   class="btn-primary" 
                   style="background: #25D366; color: #fff; padding: 8px 16px; font-size: 0.85em;">
                   <i class="fab fa-whatsapp"></i> WhatsApp Apply
                </a>
            </div>
        `;
        container.appendChild(jobCard);
    });
}

// 4. SEARCH & FILTERING LOGIC
function filterJobs() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const term = searchInput.value.toLowerCase().trim();
    
    const filtered = allJobs.filter(job => 
        job.title.toLowerCase().includes(term) || 
        job.company.toLowerCase().includes(term) || 
        job.location.toLowerCase().includes(term)
    );
    
    renderJobs(filtered);
}

// 5. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Initial UI state
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) sidebar.style.display = "none";

    // Load jobs if on the home page
    const jobContainer = document.getElementById('jobContainer');
    if (jobContainer) {
        fetchJobs();
    }

    // Attach search listener for real-time filtering
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterJobs);
    }
});
