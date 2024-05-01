<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form data
    $name = trim($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $number = trim($_POST['number']);
    $comment = trim($_POST['comment']);

    // Check if all required fields are filled
    if (empty($name) || empty($email) || empty($number) || empty($comment)) {
        echo "Please fill in all fields.";
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Set email recipient
    $to = "nor.jws@gmail.com";

    // Set email subject
    $subject = "New Message from Website";

    // Construct email message
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone Number: $number\n";
    $message .= "Message:\n$comment\n";

    // Set additional headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Unable to send email. Please try again later.";
    }
} else {
    // If not a POST request, show an error message
    echo "Invalid request method.";
}
?>