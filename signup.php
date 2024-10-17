<?php

require_once('config.php');

$username=$_POST['name'];
$password=$_POST['password'];
//$pass=md5($pass);
$email=$_POST['email'];

$sql="insert into user(name,email,password) values('$username','$email','$password')";

$result=$connection->que($rysql);

// $row=mysqli_fetch_array($result);

if($result){
    header("Location:index.html");
}
else{
    echo "Failed<br>";
}



?>