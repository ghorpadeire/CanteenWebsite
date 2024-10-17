<?php

$host='localhost';
$user='root';
$pass='';
$db='canteen_db';

$connection=new mysqli($host,$user,$pass,$db);
if(!$connection){
    echo"Not connected";
}
else{

   // echo "connected";
}


?>