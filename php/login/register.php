<?php
echo "This does not work, database missing";
// // Inkulder tilknyttnings filen.
// require_once "config.php";
//
// // Definer varoablene som en potensiell dataplass.
// $username = $password = $confirm_password = "";
// $username_err = $password_err = $confirm_password_err = "";
//
// // Prossesser dataen tatt imot fra formen
// if($_SERVER["REQUEST_METHOD"] == "POST"){
//
//     // KJekker om bruker navnet eksisterer allerede.
//     if(empty(trim($_POST["username"]))){
//         $username_err = "Please enter a username.";
//     } else{
//         // Setter opp en SQL forspørsel.
//         $sql = "SELECT id FROM users WHERE username = ?";
//
//         if($stmt = mysqli_prepare($link, $sql)){
//             // Samler opp variabler til preparerte funksjoner og parameterer
//             mysqli_stmt_bind_param($stmt, "s", $param_username);
//
//             // Setter parameterer
//             $param_username = trim($_POST["username"]);
//
//             // Prøer å kjøre funksjonen.
//             if(mysqli_stmt_execute($stmt)){
//                 /* Lagrer resultater */
//                 mysqli_stmt_store_result($stmt);
//
//                 if(mysqli_stmt_num_rows($stmt) == 1){
//                     $username_err = "This username is already taken.";
//                 } else{
//                     $username = trim($_POST["username"]);
//                 }
//             } else{
//                 echo "Noe gikk galt! Prøv igjen senere...";
//             }
//         }
//
//         // Lukking av funksjonen
//         mysqli_stmt_close($stmt);
//     }
//
//     // Validering av passord.
//     if(empty(trim($_POST["password"]))){
//         $password_err = "Tast inn et passord.";
//     } elseif(strlen(trim($_POST["password"])) < 6){
//         $password_err = "Passordet må minst ha 6 bokstaver.";
//     } else{
//         $password = trim($_POST["password"]);
//     }
//
//     // Inntasting av passordet på nytt for komfirmasjons skyld.
//     if(empty(trim($_POST["confirm_password"]))){
//         $confirm_password_err = "Please confirm password.";
//     } else{
//         $confirm_password = trim($_POST["confirm_password"]);
//         if(empty($password_err) && ($password != $confirm_password)){
//             $confirm_password_err = "Password did not match.";
//         }
//     }
//
//     // Kjekker for feil.
//     if(empty($username_err) && empty($password_err) && empty($confirm_password_err)){
//
//         // Sender en INSERT førespørsel
//         $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
//
//         if($stmt = mysqli_prepare($link, $sql)){
//             // Samler opp variabler til preparerte funksjoner og parameterer
//             mysqli_stmt_bind_param($stmt, "ss", $param_username, $param_password);
//
//             // Setter parameterer
//             $param_username = $username;
//             $param_password = password_hash($password, PASSWORD_DEFAULT); // Creates a password hash
//
//             // Kjører funksjonen
//             if(mysqli_stmt_execute($stmt)){
//                 // Sender bruker til hoved siden.
//                 header("location: login.php");
//             } else{
//                 echo "Noe gikk galt! Prøv igjen senere.";
//             }
//         }
//
//         // Lukk funkjonen
//         mysqli_stmt_close($stmt);
//     }
//
//     // Lukk tilknytningen
//     mysqli_close($link);
//}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign Up</title>
    <link rel="stylesheet" href="../../css/innlogging.css">
</head>
<body>

  <!--
    <div class="wrapper">
        <h2>Sign Up</h2>
        <p>Please fill this form to create an account.</p>
        <form class="form-main" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <div class="form-group <?php echo (!empty($username_err)) ? 'has-error' : ''; ?>">
                <br><label>Username</label><br><br>
                <input type="text" name="username" class="form-control" value="<?php echo $username; ?>">
                <span class="help-block"><?php echo $username_err; ?></span>
            </div>
            <div class="form-group <?php echo (!empty($password_err)) ? 'has-error' : ''; ?>">
                <br><br><label>Password</label><br><br>
                <input type="password" name="password" class="form-control" value="<?php echo $password; ?>">
                <span class="help-block"><?php echo $password_err; ?></span>
            </div>
            <div class="form-group <?php echo (!empty($confirm_password_err)) ? 'has-error' : ''; ?>">
                <br><br><label>Confirm Password</label><br><br>
                <input type="password" name="confirm_password" class="form-control" value="<?php echo $confirm_password; ?>">
                <span class="help-block"><?php echo $confirm_password_err; ?></span>
            </div>
            <div class="form-group"><br>
                <input type="submit" class="btn btn-primary" value="Submit">
                <input type="reset" class="btn btn-primary" value="Reset">
            </div>
        </form>
-->
        <p>Allerede har en bruker? <br> <a href="login.php">Login her!</a></p>
    </div>
</body>
</html>
