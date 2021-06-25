<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/master.css">
  <title>Yatzy!</title>
</head>
<body>

<div id="page-cover"></div>
<button type="button" id="st1" class="button">Start!</button>
<button type="button" id="st2" class="button">Rediger Runder</button>
<button type="button" id="st3" class="button">Rediger Spillere</button>
<table id="leaderboard">
  <tr>
  <th id="Pname">Navn</th><th id="Pscore">Poeng</th><th id="Pstatus">Status</th><th id="Pturnn">Tur Nummer</th>
</tr>
</table>
<h1 id="rsv">Antall Runder: 1</h1>
<button type="button" id="rsbNeg" class="button"><-</button>
<h1 id="rsbv">Antall Runder: <br> 1</h1>
<button type="button" id="rsbPos" class="button">+></button>

          <!-- pair2_td.style.color = "rgba(25, 255, 100, 1)"; -->
          <!-- <img class="dice" src="media/bilder/null.gif" alt="NULL"> -->
<div class="wrapper">
      <button type="button" id="kti" class="button">Kast Igjen?</button>
      <button type="button" id="kt1" class="button">Kast Terning?</button>
      <button type="button" id="con" class="button">Fortsett?</button>
      <button type="button" id="ner" class="button">Neste Runde?</button>
      <button type="button" id="res" class="button" onclick="location.reload()">reset?</button>
      <h3 id="DATA_th">KAST: 0</h3>
      <table class="yatzyTabel">
        <tr>
          <td id="rn1_td1"><img class="dice" src="media/bilder/null.gif" alt="NULL"></td>
          <td id="rn1_td2"><img class="dice" src="media/bilder/null.gif" alt="NULL"></td>
          <td id="rn1_td3"><img class="dice" src="media/bilder/null.gif" alt="NULL"></td>
          <td id="rn1_td4"><img class="dice" src="media/bilder/null.gif" alt="NULL"></td>
          <td id="rn1_td5"><img class="dice" src="media/bilder/null.gif" alt="NULL"></td>
        </tr>
        <tr>
          <td id="rn2_td1">LØS</td>
          <td id="rn2_td2">LØS</td>
          <td id="rn2_td3">LØS</td>
          <td id="rn2_td4">LØS</td>
          <td id="rn2_td5">LØS</td>
        </tr>
        <tr>
          <th id="sum_th">SUM</th><td id="sum_rn1">*</td>
        </tr>
      </table>

        <table class="yatzyTabel">
        <tr>
          <th id="pair1_th">Ett Par</th><td id="pair1_td">*</td>
        </tr>
        <tr>
          <th id="pair2_th">To Par</th><td id="pair2_td">*</td>
        </tr>
        <tr>
          <th id="alike3_th">Tre Like</th><td id="alike3_td">*</td>
        </tr>
        <tr>
          <th id="alike4_th">Fire Like</th><td id="alike4_td">*</td>
        </tr>
        <tr>
          <th id="ss_th">Liten Straight</th><td id="ss_td">*</td>
        </tr>
        <tr>
          <th id="ls_th">Store Straight</th><td id="ls_td">*</td>
        </tr>
        <tr>
          <th id="house_th">Hus</th><td id="house_td">*</td>
        </tr>
        <tr>
          <th id="chance_th">Sjanse</th><td id="chance_td">*</td>
        </tr>
        <tr>
          <th id="yatzy_th">Yatzy!</th><td id="yatzy_td">*</td>
        </tr>
        <tr>
          <th id="tp_th">Total Poeng</th><td id="tp_td">*</td>
        </tr>
      </table>
</div>

<div class="rul_gen_wrapper_static">
<button type="button" id="rul_btn" class="button" >Hjelp med regler og kombinasjoner?</button>
    <div id="container" stlye="displa none;">
      <h1 id="rules_header">RULES:</h1>
        <ul class="rul">
          <li class="rli">Man kan kaste 3 ganger på 1 runde, og man velger selv hvilke man beholder.</li>
          <li class="rli">Hvis man først beholder en terning, kan man ikke bytte hvis man får noe bedre. Fair play!</li>
        </ul>
    <h1 id="combinations_header">COMBINATIONS:</h1>
        <ul class="rul">
          <li class="rli">Enere – Gir samme antall poeng som antall øyne på enere.</li>
          <li class="rli">Toere – Gir samme antall poeng som antall øyne på toere.</li>
          <li class="rli">Treere – Gir samme antall poeng som antall øyne på treere.</li>
          <li class="rli">Firere – Gir samme antall poeng som antall øyne på firere.</li>
          <li class="rli">Femmere – Gir samme antall poeng som antall øyne på femmere.</li>
          <li class="rli">Seksere – Gir samme antall poeng som antall øyne på seksere.</li>
          <li class="rli">SUM: Hvis du har 63 eller flere poeng fra 1,2,3,4,5,6 ("over streken"), får du 50 poeng i bonus.</li>
          <li class="rli">(63 poeng tilsvarer 3 enere, 3 toere, 3 treere, 3 firere, 3 femmere og 3 seksere.)</li>
          <li class="rli">Ett par – To like terninger, gir samme antall poeng som øyne på terningene som inngår i (det mest verdifulle) paret.</li>
          <li class="rli">To par – Kombinasjon av to like terninger og to like terninger av en annen verdi, gir samme antall poeng som øyne på de fire terningene som inngår i parene.</li>
          <li class="rli">Tre like – Tre like terninger, gir samme antall poeng som øyne på de tre like terningene.</li>
          <li class="rli">Fire like – Fire like terninger, gir samme antall poeng som øyne på de fire like terningene.</li>
          <li class="rli">Liten straight – Kombinasjonen 1-2-3-4-5, gir 15 poeng.</li>
          <li class="rli">Stor straight – Kombinasjonen 2-3-4-5-6, gir 20 poeng.</li>
          <li class="rli">Hus – Kombinasjon av tre like terninger og to like terninger av en annen verdi. Gir samme antall poeng som øyne.</li>
          <li class="rli">Sjanse – Vilkårlig kombinasjon, gir samme antall poeng som øyne.</li>
          <li class="rli">Yatzy – Fem like terninger, gir 50 poeng.</li>
        </ul>
    </div>
</div>

<!-- <script src="js/hovedscriptMOD.js"></script> -->
<script src="js/hovedscriptMODExperimental.js"></script>
<script src="js/showRulKomList.js"></script>
</body>
</html>
