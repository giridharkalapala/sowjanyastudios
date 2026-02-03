<?php
// ===== BASIC SECURITY =====
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Method Not Allowed");
}

// ===== GET DATA =====
$name    = trim($_POST["name"] ?? "");
$email   = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

// ===== VALIDATION =====
if ($name === "" || $email === "" || $message === "") {
    exit("Please fill all required fields.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    exit("Invalid email address.");
}

// ===== SANITIZE =====
$name    = htmlspecialchars($name);
$email   = htmlspecialchars($email);
$message = htmlspecialchars($message);

// ===== YOUR RECEIVER EMAIL =====
$to = "mrgk63027@gmail.com";   // change if needed

$subject = "New Contact Message From Website";

// ===== EMAIL BODY =====
$body = "
Name: $name
Email: $email

Message:
$message
";

// ===== HEADERS =====
$headers  = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

/* ===== send ===== */
if (mail($to, $subject, $body, $headers)) {
    header("Location: success.html");
    exit();
} else {
    header("Location: error.html");
    exit();
}
?>