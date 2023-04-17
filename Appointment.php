<?php

if($_SERVER['REQUEST_METHOD'] != "POST")
 exit();

include "booking.php";
$Appointment =$_POST['Appointments'];
// INSERT INTO "table name" (column1, column2, etc.) VALUES (' ".$_POST['textbox1']."','".$_POST['textbox2']."', etc.)";
$sql="INSERT INTO Appointments (name,email,phone,doctor,) VALUES ('".$_POST['name']."','".$_POST['email']."','".$_POST['phone']."','".$_POST['doctor']."')";

$result=mysqli_query($link,$sql) or die(mysqli_error($link));
echo "1 record added";
?>