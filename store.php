<?php
//session_start();
require_once('config.php');

$id=$_POST['id'];
$item_name=$_POST['item_name'];
$item_price=$_POST['item_price'];
$item_quantity=$_POST['item_quantity'];
$total_item_price=$_POST['total_item_price'];

// echo "console.log('$item_name')";
 $sql="INSERT INTO `store` (`id`,`item_name`,`item_price`,`item_quantity`,`total_item_price`) VALUES('$id','$item_name','$item_price','$item_quantity','$total_item_price')"; 
 
//  echo "done";
//  PRICE='$PRICE'";
$result =mysqli_query($connection,$sql);

if($result==true){
echo "<h3>Congratulations Order placed!!!!</h3>";
}
        // if($count == 1){  
        //    header("Location:index.html");
        // }  
        // else{  
// echo '<script>alert("Wrong Username And Password")</script>';
// header("Location:login.html");
// } 

?>