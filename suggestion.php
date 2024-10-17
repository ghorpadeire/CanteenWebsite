<?php
require_once('config.php');
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$text_area=$_POST['text_area'];

$sql="INSERT INTO `suggestion` (`name`,`email`,`phone`,`text_area`) VALUES('$name','$email','$phone','$text_area')"; 
 
//  echo "done";
//  PRICE='$PRICE'";
$result =mysqli_query($connection,$sql);

if($result==true){
echo "<script>alert('Your suggestion placed!!!!')</script>";

}
else{
    echo "alert('Your suggestion not placed!!!!')";
    
}
header("Location:index.html");


?>