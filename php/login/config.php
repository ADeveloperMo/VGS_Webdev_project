
<?php

/* Database Definasjon  */
define('DB_SERVER', 'localhost'); // database Server navn
define('DB_USERNAME', 'root'); // database bruker navn passord
define('DB_PASSWORD', ''); // Passord for database brukeren (vanligvis tom)
define('DB_NAME', 'informationdatabaseonit'); // Database navn.

/* prøve å knytte til database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Skjekker om knyttningen til databasen
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>
