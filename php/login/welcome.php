<?php
// Starter en sesjon.
// session_start();

// Skjekker om brukeren er allerede logget inn, hvis den er possitive da sender serveren brukeren til hoved siden!
/*if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: ../../index.php");
    exit;
}
*/
// NEW COMMENT: Login Verification has been bypassed since the database has been lost. - Mohamed Kwaik 2021
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <link rel="stylesheet" href="../../css/mainlogged.css">
    <script src="../../js/menuscript.js"></script>
</head>

<body>



    <div class="page-header">
      <div class="header-title">
        <h1>Hi, <b><?php /*echo htmlspecialchars($_SESSION["username"]); // this doesnt work, database missing*/?> User </b>. Welcome to IT2 IC.</h1>
      </div>
      <div class="header-settings">
        <a href="reset-password.php" class="passchange">Reset Your Password</a>
        <a href="logout.php" class="logout">Sign Out of Your Account</a>
      </div>
  </div>


  <button type="button" id="ton" onclick="timedMenyInnUt();" style="cursor: pointer;">Toggle Menu ON</button>
  <button type="button" id="toff" onclick="timedMenyInnUt();" style="cursor: pointer;">Toggle Menu OFF</button>
<div id="page-menu-onclick-cover"></div>   <!-- Dont Tourch This DIV Element It Belongs To Menu Cover -->
<div id="sidecontent">
  <div class="border-educational-support">
    <b>Educational Support:</b>
    <ul class="page-educational-support">
      <li><a href="https://lokus.no/direkte/IT2//" target="_blank">Læreboks Side</a></li>
      <li><a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">HTML Referanse Side</a></li>
      <li><a href="https://www.w3schools.com/css/css_intro.asp" target="_blank">CSS Referanse Side</a></li>
      <li><a href="https://www.w3schools.com/php/php_intro.asp" target="_blank">PHP Referanse Side</a></li>
      <li><a href="https://www.w3schools.com/sql/sql_intro.asp" target="_blank">SQL Referanse Side</a></li>
      <li><a href="https://www.w3schools.com/js/js_intro.asp" target="_blank">JavaScript Referanse Side</a></li>
      <li><a href="https://www.w3schools.com/python/python_intro.asp" target="_blank">Python Referanse Side</a></li>
    </ul>
  </div>
  <div class="border-educational-projects">
    <b>Your Projects:</b>
    <ul class="page-educational-projects">
      <li><a href="..\sites\subsites\sspk9">Stein, Saks, Papir! (Spill!)</a></li>
      <li><a href="..\sites\subsites\ytz9ur">Yatzhee! (Spill!)</a></li>
      <li><a href="#">Empty Slot</a></li>
      <li><a href="#">Empty Slot</a></li>
      <li><a href="#">Empty Slot</a></li>
    </ul>
  </div>
</div>

<div class="page-content">
  <h1>THIS IS A TEST SITE</h1>
  <h4>This website has been officially declared as a test site for this company: <b>MK Degital Solutions</b> <br> Any intereference or illegal access will be shutdown!</h4>
</div>

<div class="page-footer">
  <h2>Log unavailable - Database missing</h2>
</div>


</body>
</html>
