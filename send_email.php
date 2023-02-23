<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // set the recipient email address
  $to = 'aurelientalbot.web@gmail.com';

  // set the email subject and message
  $subject = 'New message from ' . $name;
  $message_body = "Name: $name\nEmail: $email\nMessage:\n$message";

  // send the email
  $headers = "From: $email\r\nReply-To: $email\r\n";
  mail($to, $subject, $message_body, $headers);

  // display a confirmation message
  echo 'Thank you for your message!';
}
?>
