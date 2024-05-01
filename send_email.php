<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $comment = $_POST['comment'];

    $to = "YOUR_EMAIL";
    $subject = "New Message from Contact Form";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone Number: $number\n";
    $message .= "Message:\n$comment\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email using an API (example using Mailgun)
    $api_key = 'YOUR_API_KEY';
    $api_url = 'https://api.mailgun.net/v3/YOUR_DOMAIN/messages';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $api_url);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, 'api:' . $api_key);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, [
        'from' => $email,
        'to' => $to,
        'subject' => $subject,
        'text' => $message
    ]);
    $result = curl_exec($ch);
    curl_close($ch);

    if ($result) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Unable to send email. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
