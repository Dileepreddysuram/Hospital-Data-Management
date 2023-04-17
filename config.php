<?php
    $full_name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $doctor = $_POST['doctor'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    
    // Connect to the MySQL database
    $conn = mysqli_connect('localhost', 'root', 'Sdr@2525', 'appointments');
    
    // Prepare the INSERT statement
    $stmt = mysqli_prepare($conn, "INSERT INTO Appointments (full_name, email, phone, doctor, date, time) VALUES (?, ?, ?, ?, ?)");
    mysqli_stmt_bind_param($stmt, "sssss", $full_name, $email, $phone, $doctor, $date, $time);
    
    // Execute the INSERT statement
    mysqli_stmt_execute($stmt);
    
    // Check if the INSERT was successful
    if(mysqli_affected_rows($conn) > 0) {
        // Retrieve the appointment details from the database
        $stmt = mysqli_prepare($conn, "SELECT * FROM Appointments WHERE email = ? AND date = ? AND time = ?");
        mysqli_stmt_bind_param($stmt, "sss", $email, $date, $time);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $row = mysqli_fetch_assoc($result);
        
        // Display the appointment details to the user
        echo "Thank you for booking an appointment.<br>";
        echo "Appointment Details:<br>";
        echo "Name: ".$row['name']."<br>";
        echo "Email: ".$row['email']."<br>";
        echo "Phone: ".$row['phone']."<br>";
        echo "doctor: "$row['doctor']."<br>";
        echo "Date: ".$row['date']."<br>";
        echo "Time: ".$row['time']."<br>";
        
        // Send a confirmation email to the user
        $to = $email;
        $subject = "Appointment Confirmation";
        $message = "Dear ".$name.",\n\nThank you for booking an appointment.\n\nAppointment Details:\nName: ".$name."\nEmail: ".$email."\nPhone: ".$phone."\ndoctor: ".$doctor.\nDate: ".$date."\nTime: ".$time."\n\nWe look forward to seeing you.\n\nBest regards,\nAppointment System";
        $headers = "From: Appointment System <noreply@appointment.com>";
        mail($to, $subject, $message, $headers);
    } else {
        echo "An error occurred while booking the appointment.";
    }
    
    // Close the database connection
    mysqli_close($conn);
?>
