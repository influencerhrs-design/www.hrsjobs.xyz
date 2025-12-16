<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $file = 'jobs.json';
    
    // 1. Get Form Data
    $newJob = [
        "company" => $_POST['company'],
        "title" => $_POST['title'],
        "location" => $_POST['location'],
        "company_email" => $_POST['email'],
        "whatsapp" => $_POST['whatsapp'],
        "deadline" => $_POST['deadline'],
        "description" => $_POST['description'],
        "approved" => false // Manual approval required
    ];

    // 2. Save to JSON
    $currentData = json_decode(file_get_contents($file), true) ?: [];
    $currentData[] = $newJob;
    file_put_contents($file, json_encode($currentData, JSON_PRETTY_PRINT));

    // 3. Email Admin
    $to = "raf@gmail.com";
    $subject = "New Job Submission: " . $_POST['title'];
    $message = "A new job has been submitted by " . $_POST['company'] . ". Please edit jobs.json to approve it.";
    mail($to, $subject, $message);

    echo "<h1>Submission Successful!</h1><p>Waiting for admin approval. <a href='index.html'>Go back</a></p>";
}
?>
