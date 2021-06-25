<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/master.css">
  <title>Stein Saks Papir!</title>
</head>
<body>


<div class="content">
  <div class="spiller">
    <div class="playerBackgroundWrapper">
    <p id="spiller"><b>Spiller: 0</b></p>
   </div>
    <img src="media/bilder/spiller_stein.png" width="150" height="150" alt="player rock" id="stein">
    <img src="media/bilder/spiller_saks.png" width="150" height="150" alt="player scissors" id="saks">
    <img src="media/bilder/spiller_papir.png" width="150" height="150" alt="player paper" id="papir">
  </div>
  <p id="info"></p>
  <div class="bot">
    <div class="botBackgroundWrapper">
    <p id="bot"><b>Maskin: 0</b></p>
    </div>
    <img src="media/bilder/maskin_ukjent.png" width="150" height="150" alt="Bot Choice Unknown" id="botPic">
  </div>
</div>

<br>
<a class="button" onclick="location.reload();">New Game?</a>
<a class="button" href="../../../../php/">Go Back To Main Page?</a>


<script src="js/hovedscript.js"></script>
</body>
</html>
