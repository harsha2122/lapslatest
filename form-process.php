<?php
/**
 * LAPS Contact Form Mail Handler
 * Receives POST data from #contactForm and sends an email to
 * littleangelssadulpur@gmail.com
 */

header('Content-Type: text/plain; charset=UTF-8');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method not allowed.';
    exit;
}

// -----------------------------------------------------------------------
// Helper: sanitize a plain text value
// -----------------------------------------------------------------------
function clean(string $value): string {
    return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

// -----------------------------------------------------------------------
// Collect & sanitise fields
// -----------------------------------------------------------------------
$student_name  = clean($_POST['student_name']  ?? '');
$student_class = clean($_POST['student_class'] ?? '');
$parent_name   = clean($_POST['parent_name']   ?? '');
$current_school = clean($_POST['current_school'] ?? '');
$email   = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = clean($_POST['phone']   ?? '');
$message = clean($_POST['message'] ?? '');
$query_category = clean($_POST['query_category'] ?? '');

// -----------------------------------------------------------------------
// Validate required fields
// -----------------------------------------------------------------------
if (empty($student_name) || empty($student_class) || empty($parent_name) || empty($email) || empty($phone) || empty($query_category)) {
    http_response_code(400);
    echo 'Please fill in all required fields.';
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'Please enter a valid email address.';
    exit;
}

// -----------------------------------------------------------------------
// Build email body
// -----------------------------------------------------------------------
$lines = [];
$lines[] = "New enquiry from Little Angels Public School website";
$lines[] = str_repeat('-', 50);
$lines[] = "Student Name:   {$student_name}";
$lines[] = "Student Class:  {$student_class}";
$lines[] = "Parent's Name:  {$parent_name}";
$lines[] = "Email:          {$email}";
$lines[] = "Phone:          {$phone}";
$lines[] = "Query Category: {$query_category}";
if (!empty($current_school)) {
    $lines[] = "Current School: {$current_school}";
}
if (!empty($message)) {
    $lines[] = str_repeat('-', 50);
    $lines[] = "Message:\n{$message}";
}

$body = implode("\n", $lines);

// -----------------------------------------------------------------------
// Send email via PHP mail()
// -----------------------------------------------------------------------
$to      = 'littleangelssadulpur@gmail.com';
$subject = "LAPS Enquiry: {$student_name}";

// Use a domain address in From so the host MTA accepts it.
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$host = preg_replace('/[^a-z0-9.-]+/i', '', $host);
$from_name    = 'LAPS Website';
$from_address = 'noreply@' . ($host ?: 'localhost');

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: {$from_name} <{$from_address}>\r\n";
$headers .= "Reply-To: {$parent_name} <{$email}>\r\n";
$headers .= "X-Mailer: PHP/" . PHP_VERSION;

if (mail($to, $subject, $body, $headers)) {
    echo 'success';
} else {
    http_response_code(500);
    echo 'Sorry, there was a problem sending your message. Please try again.';
}
