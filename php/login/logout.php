<?php
// Starter et sesjon
session_start();

// Nuetralisere alle variabler.
$_SESSION = array();

// terminerer sesjon
session_destroy();

// Sender brukeren til hoved siden.
header("location: ../../index.php");
exit;
?>
