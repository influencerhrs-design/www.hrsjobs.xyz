# 🎯 Simple Job Portal (Dark & Yellow Edition)

A lightweight, PHP-based job posting system with manual admin approval. No SQL database required—uses a simple JSON flat-file system.

## 🎨 Theme Colors
* **Background:** `#121212` (Dark)
* **Primary Accent:** `#FFD833` (Yellow)
* **Text:** `#FFFFFF` (White)

---

## 📂 Project Structure
* `index.html`: The main job board. Fetches and displays only approved jobs.
* `post-job.html`: The submission form for recruiters.
* `style.css`: The UI/UX styling (Dark theme with yellow highlights).
* `script.js`: (Optional) Logic for handling the frontend fetch requests.
* `submit-job.php`: The backend engine. Processes form data, saves to JSON, and emails the admin.
* `jobs.json`: The "database" where all job listings are stored.

---

## ⚙️ How It Works

### 1. For Recruiters
* Recruiters visit `/post-job.html`.
* They fill in details (Company, Title, WhatsApp, Deadline, etc.).
* Upon submission, the job is saved with `"approved": false`.

### 2. For Admin (You)
* You receive an email at **raf@gmail.com** whenever a new job is submitted.
* **To Approve:**
    1. Open `jobs.json`.
    2. Find the new entry (usually at the bottom).
    3. Change `"approved": false` to `"approved": true`.
    4. Save the file.

### 3. For Job Seekers
* Only jobs marked `true` appear on `index.html`.
* **Apply via Email:** Opens the user's default mail app with the company's email pre-filled.
* **Apply via WhatsApp:** Uses a `wa.me` link to open a direct chat with the recruiter.

---

## 🚀 Deployment Instructions

1.  **Hosting:** Upload all files to a server that supports **PHP 7.0+**.
2.  **Permissions:** Ensure the server has "Write" permissions for `jobs.json` so the PHP script can update the file.
3.  **Email:** Some free hosting providers disable the `mail()` function. If you don't receive emails, check your hosting's "Email Functions" settings.

---

## 🛠 Maintenance
* **Delete a Job:** Simply open `jobs.json` and delete the specific block `{...}` associated with that job.
* **Edit a Job:** You can manually fix typos or change deadlines directly inside the `jobs.json` file.

---

## 🚫 Limitations
* No password protection for the `jobs.json` file (Admin should manage this via FTP/Control Panel).
* File-based storage is best for small to medium sites (up to a few hundred jobs).
