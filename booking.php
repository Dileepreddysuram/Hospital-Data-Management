<?php 
// server to connect to 
$server = "localhost"; 
 
// name of the database 
$database = "s_dsuram"; 
 
// mysql username to access the database 
$db_user = "s_dsuram"; 
 
// mysql password to access the database 
$db_pass = "qyhmPFAK"; 

 
//connect to mysql server 
$link = mysqli_connect($server, $db_user, $db_pass, $database) or die("Could not connect to Database because ".mysqli_connect_error()); 
?>
