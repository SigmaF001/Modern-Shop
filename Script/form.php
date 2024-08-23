<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
          // collect form data
          $username = $_POST["Username"];
          $password = $_POST["Password"];

          // Display data
          echo "Username : " . $username . "<br>";
          echo "Password : " . $password;
}
?>