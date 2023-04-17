<?php
// Read the email and password from the form data
$email = $_POST['email'];
$password = $_POST['password'];

// Open the text file with the list of valid email and password combinations
$file = fopen('users.txt', 'r');

// Loop through each line in the file and compare the email and password
while ($line = fgets($file)) {
  // Extract the email and password from the line
  list($valid_email, $valid_password) = explode(',', trim($line));

  // Check if the email and password match the valid combination
  if ($email == $valid_email && $password == $valid_password) {
    // Authentication succeeded, redirect to a secure page
    header('Location: http://localhost:3000/getall');
    exit;
  }
}

// Authentication failed, display an error message
echo 'Invalid email or password';
?>
