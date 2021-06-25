<?php
/*
// Starter en sesjon.
session_start();

// skjekker om brukeren er allerede logget in, hvis brukeren er logget inn, blir brukeren sendt til hoved siden.
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
*/
  header("location: welcome.php");
/*
  exit;
}

// Inkludering  av tilknytnings filen.
require_once "config.php";

// Definer variablene som en potensiell dataplass.
$username = $password = "";
$username_err = $password_err = "";

// Prossesser dataen tatt imot fra formen.
if($_SERVER["REQUEST_METHOD"] == "POST"){

    // Skjekker om innloggings fanen er tom.
    if(empty(trim($_POST["username"]))){
        $username_err = "Tast inn et brukernavn.";
    } else{
        $username = trim($_POST["username"]);
    }

    // kjekker om passord fanen er tom.
    if(empty(trim($_POST["password"]))){
        $password_err = "Task inn et passord.";
    } else{
        $password = trim($_POST["password"]);
    }

    // Kjekker gitt informasjon.
    if(empty($username_err) && empty($password_err)){
        // SQL førespørsel om å finne fram brukeren.
        $sql = "SELECT id, username, password FROM users WHERE username = ?";
        $sql2 =  "SELECT users.username, rank.rankName
                  FROM users
                  INNER JOIN rank ON users.rankId = rank.rankId
                  WHERE username = ?";


        if($stmt = mysqli_prepare($link, $sql)){
            // Samler opp variabler til preparerte funksjoner og parameterer
            mysqli_stmt_bind_param($stmt, "s", $param_username);

            // Setter parameterer
            $param_username = $username;

            // Prøve å sende inn funkjonen.
            if(mysqli_stmt_execute($stmt)){
                // lagre resultat
                mysqli_stmt_store_result($stmt);

                // Kjekker om bruker navnet eksisterer, så kjekker om passordet er riktig.
                if(mysqli_stmt_num_rows($stmt) == 1){
                    // Samler alle resultatene til variablene.
                    mysqli_stmt_bind_result($stmt, $id, $username, $hashed_password);
                    if(mysqli_stmt_fetch($stmt)){
                        if(password_verify($password, $hashed_password)){
                            // Passordet er correct -> Start en new sesjon.
                            session_start();

                            // Lagrer innloggings variablene.
                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["username"] = $username;

                            // Sender brukerer til hover siden.
                            header("location: welcome.php");
                        } else{
                            // Viser en feilmelding om passordet er feil.
                            $password_err = "Passordet du tastet inn var feil!";
                        }
                    }
                } else{
                    // Viser en feilmelding om brukeren ikke eksisterer.
                    $username_err = "Brukeren existerer ikke!";
                }
            }else{
                echo "Noe gikk galt! Prøv igjen senere.  ";
            }
        }

        // Lukker ned funksjonen.
        mysqli_stmt_close($stmt);
    }

    // Lukker ned tilknyttningen til databasen.
    mysqli_close($link);
}*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="../../css/innlogging.css">
</head>

<body>
    <div class="wrapper">
        <h2>Logg inn:</h2>
        <p>Tast inn informasjonen din til å logge inn.</p>
        <form  class="form-main" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <div class="form-group <?php echo (!empty($username_err)) ? 'has-error' : ''; ?>">
                <br><label>Brukernavn</label><br><br>
                <input type="text" name="username" class="form-control" value="<?php echo $username; ?>">
                <span class="help-block"><?php echo $username_err; ?></span>
            </div>
            <div class="form-group <?php echo (!empty($password_err)) ? 'has-error' : ''; ?>">
                <br><br><label>Passord</label><br><br>
                <input type="password" name="password" class="form-control">
                <span class="help-block"><?php echo $password_err; ?></span>
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Login">
            </div>
        </form>
        <p>Har du ikke en bruker? <br> <a href="register.php">Registrer deg nå!</a></p>
    </div>
</body>
</html>
