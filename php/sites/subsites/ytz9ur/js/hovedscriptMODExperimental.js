console.log("LOADING YATZY SCRIPT");
// ______________________________________________ VARIABLE LIST
var rn1_th = document.getElementById("rn1_th"); // TABELL HEADER
var rn2_th = document.getElementById("rn2_th"); //
var rn3_th = document.getElementById("rn3_th");
console.log("Setting Variables @" + rn1_th + ", " + rn2_th + ", " + rn3_th);
var leaderboardTb = document.getElementById("leaderboard"); // SPILLER LISTE
var rsv = document.getElementById("rsv"); // ROUND SELECTOR VIEWER
var rsbv = document.getElementById("rsbv"); // ROUND SELECTOR VIEWER BUTTON
var rsbPos = document.getElementById("rsbPos"); // ROUND SELECTOR BUTTON POSITIVE (INCREASE)
var rsbNeg = document.getElementById("rsbNeg"); // ROUND SELECTOR BUTTON POSITIVE (DECREASE)
console.log("Setting Variables @" + rsv + ", " + rsbv + ", " + rsbPos + ", " + rsbNeg);
var ktB1 = document.getElementById("kt1"); // KAST TERNING
var ktiB = document.getElementById("kti"); // KAST TERNING IGJEN
var stB1 = document.getElementById("st1"); // START KNAPP FØRSTE
var stB2 = document.getElementById("st2"); // START KNAPP ANDRE
var stB3 = document.getElementById("st3"); // START KNAPP TREDJE
var resB = document.getElementById("res"); // RESET KNAPP (SKAL OMGJØRES)
var conB = document.getElementById("con"); // FORTSETT KNAPP
var nerB = document.getElementById("ner"); // NESTE RUNDE KNAPP
var stBC1 = document.getElementById("page-cover"); // GJENNOMSIKTIG
var rn1_td1 = document.getElementById('rn1_td1'); // INDIVIDUELL CELLE
var rn1_td2 = document.getElementById('rn1_td2'); // INDIVIDUELL CELLE
var rn1_td3 = document.getElementById('rn1_td3'); // INDIVIDUELL CELLE
var rn1_td4 = document.getElementById('rn1_td4'); // INDIVIDUELL CELLE
var rn1_td5 = document.getElementById('rn1_td5'); // INDIVIDUELL CELLE
var rn2_td1 = document.getElementById('rn2_td1'); // INDIVIDUELL CELLE
var rn2_td2 = document.getElementById('rn2_td2'); // INDIVIDUELL CELLE
var rn2_td3 = document.getElementById('rn2_td3'); // INDIVIDUELL CELLE
var rn2_td4 = document.getElementById('rn2_td4'); // INDIVIDUELL CELLE
var rn2_td5 = document.getElementById('rn2_td5'); // INDIVIDUELL CELLE
var freezeT = [freezeT1, freezeT2, freezeT3, freezeT4, freezeT5]; // VALG SELECTOR ARRAY
var rn_tdArr = [rn1_td1, rn1_td2, rn1_td3, rn1_td4, rn1_td5]; // INDIVIDUELL CELLE ARRAY
var rn2_tdArr = [rn2_td1, rn2_td2, rn2_td3, rn2_td4, rn2_td5]; // INDIVIDUELL CELLE ARRAY
var pair_th = document.getElementById('pair_th'); // PAR CELLE HEADER
var pair2_th = document.getElementById('pair2_th'); // DOBBEL PAR CELLE HEADER
var alike3_th = document.getElementById('alike3_th'); // TRE LIKE CELLE HEADER
var alike4_th = document.getElementById('alike4_th'); // FIRE LIKE CELLE HEADER
var ss_th = document.getElementById('ss_th'); // SMALL STRAIGHT CELLE HEADER
var ls_th = document.getElementById('ls_th'); // LARGE STRAIGHT CELLE HEADER
var house_th = document.getElementById('house_th'); // HUS CELLE HEADER
var chance_th = document.getElementById('chance_th'); // SJANSE CELLE HEADER
var yatzy_th = document.getElementById('yatzy_th'); // YATZY CELLE HEADER
var tp_th = document.getElementById('tp_th'); // TOTAL POENG CELLE HEADER
var sum_rn1 = document.getElementById('sum_rn1'); // INDIVIDUELL CELLE SUM DATA
var pair_td = document.getElementById('pair1_td');  // INDIVIDUELL CELLE PAR DATA
var pair2_td = document.getElementById('pair2_td');  // INDIVIDUELL CELLE DOBBEL PAR DATA
var alike3_td = document.getElementById('alike3_td');  // INDIVIDUELL CELLE 3 LIKE DATA
var alike4_td = document.getElementById('alike4_td');  // INDIVIDUELL CELLE 4 LIKE DATA
var ss_td = document.getElementById('ss_td');  // INDIVIDUELL CELLE SMALL STRIAGHT DATA
var ls_td = document.getElementById('ls_td');  // INDIVIDUELL CELLE LARGE STRAIGHT DATA
var house_td = document.getElementById('house_td');  // INDIVIDUELL CELLE HOUSE DATA
var chance_td = document.getElementById('chance_td');  // INDIVIDUELL CELLE SJANSE DATA
var yatzy_td = document.getElementById('yatzy_td');  // INDIVIDUELL CELLE YATZY DATA
var tp_td = document.getElementById('tp_td');  // INDIVIDUELL CELLE TOTAL POENG DATA
var antallKastDisplay = document.getElementById("DATA_th"); // INDIVIDUELL CELLE HEADER
var sAvTerninger = 0; // SUM AV TERNINGER
var antallKast = 0; // ANTALL KAST
var tk1      =  [0,0,0,0,0]; // TERNINGKAST (IGNORER 1eren, FEILET PLAN)
var chosenTk =  [0,0,0,0,0]; // VALGTE TERNINGKAST
var smallStraightRule = [1, 2, 3, 4, 5]; // DEFINASJONS ARRAY FOR SMALL STRAIGHT
var largeStraightRule = [2, 3, 4, 5, 6]; // DEFINASJONS ARRAY FOR LARGE STRAIGHT
var pairDetResArr = []; // SUPPORT ARRAY FOR PAR KOMBINASJON "DETECTION" FUNKSJON
var threeAlikeArr = []; // SUPPORT ARRAY FOR 3 LIKE KOMBINASJON "DETECTION" FUNKSJON
var fourAlikeArr = []; //SUPPORT ARRAY FOR 4 LIKE KOMBINASJON "DETECTION" FUNKSJON
var yatzyArr = [];// SUPPORT ARRAY FOR YATZY KOMBINASJON "DETECTION" FUNKSJON
var pair = false;  // PAR BOLEAN
var doublePair = false; // DOBBEL PAR BOLEAN
var threeAlike = false; // 3 LIKE BOLEAN
var fourAlike = false; // 4 LIKE BOLEAN
var smallStraight = false; // SMALL STRAIGHT BOLEAN
var largeStraight = false; // LARGE STRAIGHT BOLEAN
var house = false; // HOUSE BOLEAN
var chance = false; // SJANSE BOLEAN
var yatzy = false; // YATZY BOLEAN
var spillere = []; // SPILLERE SUPPORT ARRAY
var spillereRelativeScore = []; // SPILLERE POENG RELATIV SUPPORT ARRAY
var playerTurn = []; // SPILLER TUR ARRAY
var playerTurnBolean = [];  // SPILLER TUR BOLEAN ARRAY
var playerProfiles = []; // SPILLER PROFILER
var playerProfileElementNames = []; // SPILLER PROFILER > NAVNER
var playerProfileElementTurns = []; // SPILLER PROFILER > TURN
var playerProfileElementStatus = []; // SPILLER PROFILER > STATUS
var playerProfileElementPoints = []; // SPILLER PROFILER > POENG
var playerPoints = []; // SPILLER POENG SUPPORT ARRAY
var playerRelativityFoundation = 0; // SPILLER GRUNNELGGENDE RELATIVITETS ID (BRUKES TIL Å GI EN INDIVID ID TIL SPILLERE)
var turnNumber = 1; // TURN NUMMER
var roundNumber = 1; // RUNDE NUMMER
var totalRounds = 0; // TOTAL RUNDER (ANGITT AV SPILLERE PÅ STARTEN)
var maxRoundNumber = 10; // MAKS ANTALL RUNDER (KAN ENDRES OM ØNSKET)
var minRoundRumber = 1; // MINIMUM ANTALL RUNDER (KAN IKKE ENDRES)
var maxPlayers = 4; // MAKS ANTALL SPILLERE (KAN ENDRES MEN IKKE ANBEFALT)
var totalPoeng = 1; // MINIMUM ANTAKLL SPILLERE (KAN IKKE ENDRES)
// ______________________________________________ VARIABLE LIST END


// EVENT LIST
stB2.addEventListener("click", selectRoundNumber); // ANDRE START MENY KNAPP
stB3.addEventListener("click", addPlayer); // TREDJE START MENY KNAPP
rsbv.addEventListener("click", selectRoundNumber); // EN TILKNYTTNING TIL ANDRE START MENY KNAPP (FUNKSJONEN ER Å VISE ELLER HJEMME RUNDE SELECTOREN)
rsbNeg.addEventListener("click", decreaseRN); // EN TILKNYTTNING TIL ANDRE START MENY KNAPP (FUNKSJONEN ER Å MINKE ANTALL RUNDER)
rsbPos.addEventListener("click", increaseRN); // EN TILKNYTTNING TIL ANDRE START MENY KNAPP (FUNKSJONEN ER Å ØKE ANTALL RUNDER)
stB1.addEventListener("click", startRound); // FØRSTE START MENY KNAPP (FUNKJONEN ER Å STARTE SPILLET)
ktiB.addEventListener("click", filterFreeze); // KAST TERNING IGJEN (FUNKJONEN EKSKLUDERER VALGTE TERNINGER)
conB.addEventListener("click", combinationDetection); // FORTSETT KNAPPEN (FUNKJSONEN KALKULERER DE FORKJELLIGE KOMBINASJONER OG GIR POENG BASERT PÅ DEM)
ktB1.addEventListener("click", kast); // FØRSTE KAST
nerB.addEventListener("click", continueGame); // NESTE RUNDE/TURN
// EVENT LIST END

// RUNDE SELECTOR VISER
function selectRoundNumber(){
    if (stB2.style.display === "block") {
      // ONCLICK: HVIS ANDRE START KNAPPEN ER VIST, HJEM DEN OG HVIS RUNDE SELEKTOREN
      rsbv.style.display = "block";
      rsbNeg.style.display = "block";
      rsbPos.style.display = "block";
      stB2.style.display = "none";
    } else {
      // ONCLICK: HVIS RUNDE SELEKTOREN ER VIST, HJEM DEN OG HVIS ANDRE START KNAPPEN
      rsbv.style.display = "none";
      rsbNeg.style.display = "none";
      rsbPos.style.display = "none";
      stB2.style.display = "block";
    }
}
// RUNDE SELECTOR VISER SLUTT

function increaseRN(){ // Runde øknings funksjon, når vi kaller denne funksjonen vises minking og øknings knappene
  totalRounds++; // Øker runder
  rsbNeg.style.display = "block";
  rsbPos.style.display = "block";
  console.log(totalRounds);
  if (totalRounds === maxRoundNumber) { // Hvis valgt total runde = max gitt runder, hjem øknings knappen (Slik at folk kan ikke øke mer)
    rsbPos.style.display = "none";
    rsbNeg.style.display = "block";
  }

  rsv.innerHTML = "Antall Runder: "+ totalRounds; //Oppdaterer og viser antall valgte runder I "Antall runder" tall viser.
  rsbv.innerHTML = "Antall Runder: <br> "+ totalRounds; //Oppdaterer og viser antall valgte runder I velgeren

  return totalRounds;
}


function decreaseRN(){ // Runde øknings funksjon, når vi kaller denne funksjonen vises minking og øknings knappene
  totalRounds--; // mink runder
  rsbNeg.style.display = "block";
  rsbPos.style.display = "block";
  console.log(totalRounds);
  if (totalRounds === minRoundRumber) { // Hvis valgt total runde = min gitt runder, hjem minkings knappen (Slik at folk kan ikke minke mer)
    rsbPos.style.display = "block";
    rsbNeg.style.display = "none";
  }
  rsv.innerHTML = "Antall Runder: "+ totalRounds; //Oppdaterer og viser antall valgte runder I "Antall runder" tall viser.
  rsbv.innerHTML = "Antall Runder: <br> "+ totalRounds; //Oppdaterer og viser antall valgte runder I velgeren

  return totalRounds;
}

function addPlayer() { // Spiller leggings funksjonen (Nokk en av det vanskligste jeg har gjort til nå)
    if (spillere.length === maxPlayers) { // Hvis spillerne er over maks antall spillere, vis en feil melding
      alert("Sorry, du kan ikke ha mere en 4 spillere! :("); //Feilmeldingen
      console.log(spillere + "/" + maxPlayers + "STATUS: FULL");
    } else {
    nameReception = prompt("Skriv inn navnet du vil bruke:" , "Navnet ditt?"); // Spør spilleren om valgt navn (Om jeg hadde tid jeg kunne ha lagt til noen  restriksjoner)
    if (nameReception === null) {
      // LEAVE EMPTY
    } else {
      playerRelativityFoundation++; // Hver gang funksjonen kjøres så øker det tallet med 1, det er på en måte en "i" i en "for" metode, bare at det her trengs til å identifisere spillerene
      if (nameReception === "Navnet ditt?") { // Jeg vil ikke at spillerene skal bli kalt for "navnet ditt?" så jeg lagde en liten funksjon som bruker "playerRelativityFoundation" til å identifisere spillere.
        nameReception = "Spiller#" + playerRelativityFoundation; // Her kan vi se at den legger til en spiller, og legger til et tall som er aldri den samme.
      }

      spillere.push(nameReception); // Her legges spilleren i en array
      playerTurn.push(playerRelativityFoundation); // her angis turn nummeret til spilleren (Det trengs når vi skal kjøre gjennom en array for å velge hvem som får poen elelr vise hvem spiller)
      spillereRelativeScore.push(0); // Her legger vi til en "0" i en array for å sikre posisjonen til spilleren i score array

      // Her lages cellene som viser navnet, score, status (Fngerer ikke helt enda, hadde ikke så mye tid til å prioritere det)
      var newPlayerData = leaderboardTb.insertRow(playerRelativityFoundation); // Legger til en rad
      var navnCelle = newPlayerData.insertCell(0); // legger til en navn celle i valgte raden som viser navn
      var poengCelle = newPlayerData.insertCell(1); // legger til en poeng celle i valgte raden som viser antallpoeng
      var statusCelle = newPlayerData.insertCell(2); // legger til en status celle i valgte raden som viser status
      var turnNCelle = newPlayerData.insertCell(3); // legger til en turn celle i valgte raden som viser tur nummeret
// NB: Tallet i paranteset viser hvor cellene skall ligge. Det vil si at newPlayerData er teknisk sett en array også

      // her setter vi inn data i cellene
      navnCelle.innerHTML = nameReception; // Her setter vi navn i cellen
      poengCelle.innerHTML = 0; // her setter vi poengene i cellen (siden spillet har ikke engang startet enda så setter jeg denne på null)
      statusCelle.innerHTML = "Venter"; // Her setter vi status i cellen
      turnNCelle.innerHTML = playerRelativityFoundation; // her setter vi turn i cellen, som du ser så har vi brukt playerRelativityFoundation til å identifisere både navn og turn cellen. senere bruker vi den til å identifisere andre IDer
      // SLUTT

      // Her angis ID til de forskjellige cellene (Vi bruker playerRelativityFoundation til å give forkjellige IDer til spillerne)
      newPlayerData.id = "prf"+ playerRelativityFoundation;
      navnCelle.id = "name"+ playerRelativityFoundation;
      poengCelle.id = "score" + playerRelativityFoundation;
      statusCelle.id = "status" + playerRelativityFoundation;
      turnNCelle.id = "turnCell" + playerRelativityFoundation;
      // slutt


      // Her lager jeg variabler til å inneholde IDene til å ha dem i en array senere.
      playerNameId = navnCelle.id;
      playerScoreId  = poengCelle.id;
      playerStatusId = statusCelle.id;
      playerTurnId = turnNCelle.id;

      // her henter jeg celle elementene ved bruk av den ny satt IDen og setter dem inn i en variable
      playerProfileElementNames.push(document.getElementById(playerNameId));
      playerProfileElementPoints.push(document.getElementById(playerScoreId));
      playerProfileElementStatus.push(document.getElementById(playerStatusId));
      playerProfileElementTurns.push(document.getElementById(playerTurnId));

      // Her henter jeg element variablene og setter dem i en profil array da kan jeg bruke array[i][i] metoden til å hente forkjellige data fra forkjellige array (jeg kunne ha brukt options og jeg har prøvd, men funket ikke akkurat som jeg ville)
      playerProfiles.push(playerProfileElementNames);
      playerProfiles.push(playerProfileElementPoints);
      playerProfiles.push(playerProfileElementStatus);
      playerProfiles.push(playerProfileElementTurns);

      return playerProfiles;
      return playerProfileElement;
      return assignedPlayerProfileElement;
      return playerTurn;
      return spillere;
      return spillereRelativeScore;
    }
  }
}




// her har vi noen små funksjoner som hjelper med en det viktige ting
function random(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;} // Her har vi rabomizeren, som er litt essensiel i et spill som yatzy
function arraySUM(a ,b) {return a + b;} // Summer en array (Det bruker jeg vanligvis til å summere poeng)
function sortNumber(b, a) {return a - b;} // Sorterer fra størst til minst (trengs til kalkurering av peong til å finne vinneren)

function rollCountLimiter(){ // Denne funsjonen er brukt til å stoppe spilleren fra å kaste over et satt antall ganger
  antallKast++;
  antallKastDisplay.innerHTML = "KAST: " + antallKast;

  if (antallKast === 3) { // Her fjernes "kast igjen" knappen når antallKast har kommet opp til 3
    ktiB.style.display = "none";
    antallKastDisplay.style.color = "grey";
  } else { // hvis ikke antallKast har kommet opp til 3 (eller en valgt nummer) så kan spilleren fortsette å kaste
    ktiB.style.display = "inline-block";
    antallKastDisplay.style.color = "rgba(255, 0, 255, 1)";
  }

  return antallKast;
}

function rollCountViewReset(){ // er litt viktig, måtte legge denne til for å passe på at spilleren på andre runden ikke fikk kaste mer en 3. Den resetter antallKast til "0";
    antallKast = 0;
        antallKastDisplay.style.color = "rgba(255, 0, 255, 1)";
    antallKastDisplay.innerHTML = "KAST: " + antallKast;
}

function find_duplicate_in_array(arra1) { // FUNKJONEN HER DA... Var litt vondt å få til. Men endelig fikk jeg en enkel løsning på å finne en duplicat.
  //Må være ærlig, ville ha vært fint om du kunne forklare denne til meg. Jeg forstår fortsatt ikke hvordan den funker.
  var object = {};
  var result = [];

  arra1.forEach(function (item) {
    if(!object[item])
    object[item] = 0;
    object[item] += 1;
  })

  for (var prop in object) {
    if(object[prop] >= 2) { // ALt jeg vet er at her kan jeg sette inn antall dupliserte tall og den finner dem fram
      // denne funksjonen har jeg brukt til å funne fram dobbel par og par kombinasjonene
      result.push(prop);
    }
  }
  return result;
}


function find3_duplicate_in_array(arra1) {       // denne funksjonen har jeg brukt til å funne fram 3 like kombinasjonene
  var object = {};
  var result3 = [];

  arra1.forEach(function (item) {
    if(!object[item])
    object[item] = 0;
    object[item] += 1;
  })

  for (var prop in object) {
    if(object[prop] >= 3) {
      result3.push(prop);
    }
  }
  return result3;
}

function find4_duplicate_in_array(arra1) {       // denne funksjonen har jeg brukt til å funne fram 4 like kombinasjonene
  var object = {};
  var result4 = [];

  arra1.forEach(function (item) {
    if(!object[item])
    object[item] = 0;
    object[item] += 1;
  })

  for (var prop in object) {
    if(object[prop] >= 4) {
      result4.push(prop);
    }
  }
  return result4;
}

function find5_duplicate_in_array(arra1) {       // denne funksjonen har jeg brukt til å funne fram yatzy kombinasjonene
  var object = {};
  var result5 = [];

  arra1.forEach(function (item) {
    if(!object[item])
    object[item] = 0;
    object[item] += 1;
  })

  for (var prop in object) {
    if(object[prop] >= 5) {
      result5.push(prop);
    }
  }
  return result5;
}




function startRound() { // Her skjer det preparasjoner
  if (roundNumber === 1) { // Siden den koden her er bare ment for starten av hele spillet, så måtte jeg legge til en "if" metode for å skjekke om rundenummer er lik "1", hvis det er "true" kjør koden nedenfor.
    if (spillere.length < 1) { // Hvis antall spillere er mindre en 1, legg igjen feil meldingen med en førespørsel om man vil legge til en spiller.
      var pc0Confirmation = confirm("ERROR: No Players! Do you want to add players?");
      if (pc0Confirmation === false) { // hvis spilleren clicker på "cancel" så skjer det ingenting
        //
      } else { // hvis spilleren trykker på "ok" så blir han overført til addPlayer() for å legge til en spiller.
        addPlayer();
      }
    } else if (spillere.length === 1) { // hvis det er bare en spiller, så blir han spurt om han vil spille alene (just incase folk misclicker på start).
      var pc1Confirmation = confirm("Er du sikker på at du vil spille alene?");
      if (pc1Confirmation === false) { // hvis spilleren klikker på "cancel" så skjer det ingenting
      //
    } else { // hvis spillere trykker på ja, så kjører spillet med 1 spiller.
        for (var i = 0; i < spillere.length; i++) { // her finner koden ut hvilken spiller har turen. Ved å ta konstanten turnNumber (som endres hver gang en spiller er ferdig) og kjører den imot playerTurn, hvis de er like, så er det "true" og hvis spilleren er true så er det turen hans.
          if (playerTurn[i] === turnNumber) {
            playerTurnBolean[i] = true;
          } else {
            playerTurnBolean[i] = false;
          }
        }
        console.log(playerTurnBolean);
        for (var i = 0; i < spillere.length; i++) {
          if (playerTurnBolean[i] === true) {
            playerProfiles[2][i].innerHTML = "Spiller!";
            playerProfiles[2][i].style.backgroundColor = "white";
            playerProfiles[2][i].style.color = "black";
          } else {
            playerProfiles[2][i].innerHTML = "Venter!";
            playerProfiles[2][i].style.backgroundColor = "black";
            playerProfiles[2][i].style.color = "white";
          }
        }

        if(playerProfiles.length > 4) {
          for (var i = 4; i < playerProfiles.length; i++) {
            playerProfiles.splice(i, 1)
          }
        }


        ktB1.style.display= "inline-block";
        ktB1.addEventListener("click", kast);

        resB.style.display = "none";

        nerB.style.display = "none";
        stBC1.style.display = "none";
        stB1.style.display = "none";
        stB2.style.display = "none";
        stB3.style.display = "none";
        conB.style.display = "none";
        rsbv.style.display = "none";
        rsbNeg.style.display = "none";
        rsbPos.style.display = "none";
        for (var i = 0; i < spillere.length; i++) {
          playerPoints.push(0);
        }

        console.log(playerPoints);
        console.log(playerProfiles);
        console.log(playerTurn);
        console.log(spillere);
        console.log(spillere);
        console.log(spillereRelativeScore);
      }
    } else if (spillere.length > 1) {
          roundNumber = 1;
          turnNumber = 1;

          for (var i = 0; i < spillere.length; i++) { // her finner koden ut hvilken spiller har turen. Ved å ta konstanten turnNumber (som endres hver gang en spiller er ferdig) og kjører den imot playerTurn, hvis de er like, så er det "true" og hvis spilleren er true så er det turen hans.
            if (playerTurn[i] === turnNumber) {
              playerTurnBolean[i] = true;
            } else {
              playerTurnBolean[i] = false;
            }
          }
          console.log(playerTurnBolean);
          for (var i = 0; i < spillere.length; i++) {
            if (playerTurnBolean[i] === true) {
              playerProfiles[2][i].innerHTML = "Spiller!";
              playerProfiles[2][i].style.backgroundColor = "white";
              playerProfiles[2][i].style.color = "black";
            } else {
              playerProfiles[2][i].innerHTML = "Venter!";
              playerProfiles[2][i].style.backgroundColor = "black";
              playerProfiles[2][i].style.color = "white";
            }
          }

          if(playerProfiles.length > 4) {
            for (var i = 4; i < playerProfiles.length; i++) {
              playerProfiles.splice(i, 1)
            }
          }
          ktB1.style.display= "inline-block";
          ktB1.addEventListener("click", kast);

          resB.style.display = "none";

          nerB.style.display = "none";
          stBC1.style.display = "none";
          stB1.style.display = "none";
          stB2.style.display = "none";
          stB3.style.display = "none";
          conB.style.display = "none";
          rsbv.style.display = "none";
          rsbNeg.style.display = "none";
          rsbPos.style.display = "none";
          for (var i = 0; i < spillere.length; i++) {
            playerPoints.push(0);
          }
          console.log(playerPoints);
          console.log(playerProfiles);
          console.log(playerTurn);
          console.log(spillere);
          console.log(spillereRelativeScore);
    }
  }
}

function continueGame() {
      for (var i = 0; i < rn_tdArr.length; i++) {
        rn_tdArr[i].style.backgroundColor = "black";
        rn_tdArr[i].style.color = "white";
        rn_tdArr[i].innerHTML = "<img class='dice' src='media/bilder/null.gif' alt='NULL'>";
        rn2_tdArr[i].innerHTML = "LØS";
      }

      for (var i = 0; i < spillere.length; i++) { // her finner koden ut hvilken spiller har turen. Ved å ta konstanten turnNumber (som endres hver gang en spiller er ferdig) og kjører den imot playerTurn, hvis de er like, så er det "true" og hvis spilleren er true så er det turen hans.
        if (playerTurn[i] === turnNumber) {
          playerTurnBolean[i] = true;
        } else {
          playerTurnBolean[i] = false;
        }
      }
      console.log(playerTurnBolean);
      for (var i = 0; i < spillere.length; i++) {
        if (playerTurnBolean[i] === true) {
          playerProfiles[2][i].innerHTML = "Spiller!";
          playerProfiles[2][i].style.backgroundColor = "white";
          playerProfiles[2][i].style.color = "black";
        } else {
          playerProfiles[2][i].innerHTML = "Venter!";
          playerProfiles[2][i].style.backgroundColor = "black";
          playerProfiles[2][i].style.color = "white";
        }
      }

      if(playerProfiles.length > 4) {
        for (var i = 4; i < playerProfiles.length; i++) {
          playerProfiles.splice(i, 1);
        }
      }
      ktB1.style.display= "inline-block";
      ktB1.addEventListener("click", kast);

      resB.style.display = "none";

      ktiB.style.display = "none";
      nerB.style.display = "none";
      stBC1.style.display = "none";
      stB1.style.display = "none";
      stB2.style.display = "none";
      stB3.style.display = "none";
      conB.style.display = "none";
      rsbv.style.display = "none";
      rsbNeg.style.display = "none";
      rsbPos.style.display = "none";

      console.log(playerProfiles);
      console.log(playerTurn);
      console.log(spillere);
      console.log(spillereRelativeScore);
  }

  function kast(){
    rollCountLimiter();

    for (var i = 0; i < rn_tdArr.length; i++) {
      y = i + 1;
      rn_tdArr[i].addEventListener("click", freezeT[i]);
    }
    ktiB.style.display = "inline-block";
    conB.style.display = "inline-block";
    ktB1.style.display= "none";


    console.log("FULL RANDOMIZATION START");
    for (var i = 0; i < tk1.length; i++) {
      tk1[i] = random(1,6);
      y = i + 1;
      console.log("THROWING DICE " + y + "!" + " RESULT: " + tk1[i]);
    }
    console.log("FULL RANDOMIZATION END");


    console.log("DICE ASSIGNMENT TO HTML ELEMENT START");
    for (var i = 0; i < tk1.length; i++) {
      rn_tdArr[i].innerHTML = "<img class='dice' src='media/bilder/"+ tk1[i] +".png' alt='NULL'>";
      // switch (tk1[i]) { // KOMMENTAR: FUNGERER MEN ØVERSTE METODE ER MEST EFFEKTIV
      //   case 1:
      //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/1.png' alt='NULL'>";
      //     break;
      //   case 2:
      //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/2.png' alt='NULL'>";
      //     break;
      //   case 3:
      //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/3.png' alt='NULL'>";
      //     break;
      //   case 4:
      //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/4.png' alt='NULL'>";
      //     break;
      //   case 5:
      //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/5.png' alt='NULL'>";
      //     break;
      //   case 6:
      //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/6.png' alt='NULL'>";
      //     break;
      //   default:
      // }
      y = i + 1;
      console.log("HANDLING DICE " + y + "!" + " RESULT: " + tk1[i]);
    }
      console.log("DICE ASSIGNMENT TO HTML ELEMENT END");



    sAvTerninger = tk1.reduce(arraySUM, 0)
    sum_rn1.innerHTML = sAvTerninger;
    return sAvTerninger;
    console.log("CALCULATING SUM!" + "RETURNED: " + sAvTerninger);

    return tk1;
    console.log("RETURNING DICE!" + "RETURNED: " + tk1);
  }

  function freezeT1(){
    rn1_td1.style.backgroundColor = "darkgrey";
    rn1_td1.style.color = "black";
    rn2_td1.innerHTML = "VALGT";
    rn1_td1.innerHTML =  "<img class='dice' src='media/bilder/"+ tk1[0] +".png' alt='NULL'>";;
    chosenTk.splice(0, 1, tk1[0]);
    return tk1;
    return chosenTk;
  }
  function freezeT2(){
    rn1_td2.style.backgroundColor = "darkgrey";
    rn1_td2.style.color = "black";
    rn1_td2.innerHTML =  "<img class='dice' src='media/bilder/"+ tk1[1] +".png' alt='NULL'>";
    rn2_td2.innerHTML = "VALGT";
    chosenTk.splice(1, 1, tk1[1]);
    return tk1;
    return chosenTk;
  }
  function freezeT3(){
    rn1_td3.style.backgroundColor = "darkgrey";
    rn1_td3.style.color = "black";
    rn1_td3.innerHTML =  "<img class='dice' src='media/bilder/"+ tk1[2] +".png' alt='NULL'>";
    rn2_td3.innerHTML = "VALGT";
    chosenTk.splice(2, 1, tk1[2]);
    return tk1;
    return chosenTk;
  }
  function freezeT4(){
    rn1_td4.style.backgroundColor = "darkgrey";
    rn1_td4.style.color = "black";
    rn1_td4.innerHTML =  "<img class='dice' src='media/bilder/"+ tk1[3] +".png' alt='NULL'>";
    rn2_td4.innerHTML = "VALGT";
    chosenTk.splice(3, 1, tk1[3]);
    return tk1;
    return chosenTk;
  }
  function freezeT5(){
    rn1_td5.style.backgroundColor = "darkgrey";
    rn1_td5.style.color = "black";
    rn1_td5.innerHTML = "<img class='dice' src='media/bilder/"+ tk1[4] +".png' alt='NULL'>";
    rn2_td5.innerHTML = "VALGT";
    chosenTk.splice(4, 1, tk1[4]);
    return tk1;
    return chosenTk;
  }

  function filterFreeze(){
    rollCountLimiter()
    console.log("RANDOMIZATION EXCLUSION PROCESS STARTED!");
    for (var i = 0; i < tk1.length; i++) {
      y = i + 1
      console.log("HANDLING DICE: " + y);
      if (tk1[i] === chosenTk[i]) {
        tk1.splice(i, 1, 0);
      }
    }
    console.log("RANDOMIZATION EXCLUSION PROCESS ENDED!");


    console.log("RANDOMIZATION OF LOOSE DICES HAS STARTED!");
    for (var i = 0; i < tk1.length; i++) {
      y = i + 1;
      console.log("HANDLING DICE: " + y);
      if(tk1[i] === 0) {
        tk1[i] = chosenTk[i];
      } else {
        tk1[i] = random(1, 6);
      }
    }

    for (var i = 0; i < tk1.length; i++) {
      rn_tdArr[i].innerHTML = "<img class='dice' src='media/bilder/"+ tk1[i] +".png' alt='NULL'>"
            // switch (tk1[i]) {
            //   case 1:
            //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/1.png' alt='NULL'>";
            //     break;
            //   case 2:
            //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/2.png' alt='NULL'>";
            //     break;
            //   case 3:
            //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/3.png' alt='NULL'>";
            //     break;
            //   case 4:
            //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/4.png' alt='NULL'>";
            //     break;
            //   case 5:
            //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/5.png' alt='NULL'>";
            //     break;
            //   case 6:
            //         rn_tdArr[i].innerHTML =  "<img class='dice' src='media/bilder/6.png' alt='NULL'>";
            //     break;
            //   default:
            // }
      var y = i + 1;
      console.log("THROWING DICE " + y + "!" + " RESULT: " + tk1[i]);
    }
    console.log("RANDOMIZATION OF LOOSE DICES HAS ENDED!");

    sAvTerninger = tk1.reduce(arraySUM, 0);
    sum_rn1.innerHTML = sAvTerninger;
    return sAvTerninger;
    console.log("CALCULATING SUM!" + "RETURNED: " + sAvTerninger);

    return tk1;
    console.log("RETURNING DICE!" + "RETURNED: " + tk1);
  }



  function  combinationDetection() {
    totalPoeng = 0;
    ktiB.style.display = "none";
    conB.style.display = "none";
    nerB.style.display = "inline-block";
    var pinc, pinc2, pinc2a, pinc3, pinc4, pinc5, pinc6, pinc7, pinc8;
    pinc2a = 0;
    chance_td.innerHTML = "+" + sAvTerninger;
    console.log("SET CHANCE!");

    console.log("Combination Detection Started!");

    pairDetResArr = find_duplicate_in_array(tk1);
    var sortedPair = pairDetResArr.sort(sortNumber);
    threeAlikeArr = find3_duplicate_in_array(tk1);
    fourAlikeArr = find4_duplicate_in_array(tk1);
    yatzyArr = find5_duplicate_in_array(tk1);
    var arraLOG1 = [pairDetResArr, sortedPair, threeAlikeArr, threeAlikeArr, fourAlikeArr, yatzyArr]

      for (var i = 0; i < arraLOG1.length; i++) {
        y = i + 1;
        console.log("ARRAY " + y +" DUPLICATION DETECTION: " + arraLOG1[i]);
      }


      if(pairDetResArr.length === 2) {
        pair = true;
        var pinc = sortedPair[0] * 2;
        pair1_td.innerHTML = "+"+pinc;
        console.log("Pair = " + pair + ", " + pinc + " POINTS HAVE BEEN GIVEN!");
      } else if (pairDetResArr.length === 1) {
        pair = true;
        var pinc = pairDetResArr[0] * 2;
        pair1_td.innerHTML = "+" + pinc;
        console.log("Pair = " + pair);
        console.log("Pair = " + pair + ", " + pinc + " POINTS HAVE BEEN GIVEN!");
      } else {
        pair = false;
        pinc = 0;
        pair_td.innerHTML = "+" + pinc;
        console.log("Pair = " + pair + ", " + pinc + " POINTS HAVE BEEN GIVEN!");
      }

      if(pairDetResArr.length === 2) {
        doublePair = true;
        var pinc2 = (pairDetResArr[0] * 2) + (pairDetResArr[1] * 2);
        pair2_td.innerHTML = "+" + pinc2;
        console.log("Double Pair = " + doublePair + ", " + pinc2 + " POINTS HAVE BEEN GIVEN!");
      } else {
        doublePairArrpair = false;
        pinc2 = 0;
        pair2_td.innerHTML = "+" + pinc2;
        console.log("Double Pair = " + doublePair + ", " + pinc2 + " POINTS HAVE BEEN GIVEN!");
      }

        if(threeAlikeArr.length === 1) {
          threeAlike = true;
          var pinc3 = (threeAlikeArr[0] * 3);
          alike3_td.innerHTML = "+" + pinc3;
          console.log("3 Alike = " + threeAlike + ", " + pinc3 + " POINTS HAVE BEEN GIVEN!");
        } else {
          threeAlike = false;
          pinc3 = 0;
          alike3_td.innerHTML = "+" + pinc3;
          console.log("3 Alike = " + threeAlike + ", " + pinc3 + " POINTS HAVE BEEN GIVEN!");
        }

        if(fourAlikeArr.length === 1) {
          fourAlike = true;
          var pinc4 = (fourAlikeArr[0] * 4);
          alike4_td.innerHTML = "+" + pinc4;
          console.log("4 Alike = " + fourAlike + ", " + pinc4 + " POINTS HAVE BEEN GIVEN!");
        } else {
          fourAlike = false;
          pinc4 = 0;
          alike4_td.innerHTML = "+" + pinc4;
          console.log("4 Alike = " + fourAlike + ", " + pinc4 + " POINTS HAVE BEEN GIVEN!");
        }

        if(fourAlike === true && doublePair === false) {
          doublePair = true;
          pinc2a = pairDetResArr[0] * 4;
          pair2_td.innerHTML = "+" + pinc2a;
          console.log("Double Pair = " + doublePair + ", " + pinc2a + " POINTS HAVE BEEN GIVEN!");
        }

        if( tk1[0] === smallStraightRule[0] &&
            tk1[1] === smallStraightRule[1] &&
            tk1[2] === smallStraightRule[2] &&
            tk1[3] === smallStraightRule[3] &&
            tk1[4] === smallStraightRule[4]) {
          smallStraight = true;
          var pinc5 = 15;
          ss_td.innerHTML = "+" + pinc5;
          console.log("Small Straight = " + smallStraight + ", " + pinc5 + " POINTS HAVE BEEN GIVEN!");
        } else {
          smallStraight = false;
          pinc5 = 0;
          ss_td.innerHTML = "+" + pinc5;
          console.log("Small Straight = " + smallStraight + ", " + pinc5 + " POINTS HAVE BEEN GIVEN!");
        }

        if( tk1[0] === largeStraightRule[0] &&
            tk1[1] === largeStraightRule[1] &&
            tk1[2] === largeStraightRule[2] &&
            tk1[3] === largeStraightRule[3] &&
            tk1[4] === largeStraightRule[4]) {
          largeStraight = true;
          var pinc6 = 20;
          ls_td.innerHTML = "+" + pinc6;
          console.log("Large Straight= " + largeStraight + ", " + pinc6 + " POINTS HAVE BEEN GIVEN!");
        } else {
          largeStraight = false;
          pinc6 = 0;
          ls_td.innerHTML = "+" + pinc6;
          console.log("Large Straight= " + largeStraight + ", " + pinc6 + " POINTS HAVE BEEN GIVEN!");
        }

        if(threeAlike === true && pair === true && pairDetResArr[0] != threeAlikeArr[0]){
          house = true;
          var pinc7 = pinc3 + pinc;
          house_td.innerHTML = "+" + pinc7;
          console.log("HOUSE = " + house + ", " + pinc7 + " POINTS HAVE BEEN GIVEN!");
        } else {
          house = false;
          pinc7 = 0;
          house_td.innerHTML = "+" + pinc7;
          console.log("HOUSE = " + house + ", " + pinc7 + " POINTS HAVE BEEN GIVEN!");
        }

        if(yatzyArr.length === 1) {
          yatzy = true;
          var pinc8 = 50;
          yatzy_td.innerHTML = "+" + pinc8;
          console.log("YATZY = " + yatzy + ", " + pinc8 + " POINTS HAVE BEEN GIVEN!");
        } else {
          yatzy = false;
          pinc8 = 0;
          yatzy_td.innerHTML = "+" + pinc8;
          console.log("yatzy = " + yatzy + ", " + pinc8 + " POINTS HAVE BEEN GIVEN!");
        }

        totalPoeng = sAvTerninger + pinc + pinc2 + pinc2a + pinc3 + pinc4 + pinc5 + pinc6 + pinc7 + pinc8;
        tp_td.innerHTML = totalPoeng;


        rsv.innerHTML = "Antall Runder: "+ totalRounds;
        rsbv.innerHTML = "Antall Runder: <br> "+ totalRounds;



        if (turnNumber === playerTurn.length) {
            turnNumber = 1;
            rollCountViewReset();
            for (var i = 0; i < spillere.length; i++) {
              if (playerTurnBolean[i] === true) {
                playerPoints[i] += totalPoeng;
                playerProfiles[1][i].innerHTML = playerPoints[i];
              }
            }
            if (roundNumber < totalRounds) {
                roundNumber++;
                rollCountViewReset();
              } else {
                endGame();
              }
        } else {
          turnNumber++;
          rollCountViewReset();

          for (var i = 0; i < spillere.length; i++) {
            if (playerTurnBolean[i] === true) {
              playerPoints[i] += totalPoeng;
              playerProfiles[1][i].innerHTML = playerPoints[i];
            }
          }
        }

        return playerPoints;
        return playerProfiles;
        return turnNumber;
        return totalPoeng;
        return antallKast;
        return roundNumber;
      }


      function endGame() {
        for (var i = 0; i < spillere.length; i++) {
            playerProfiles[2][i].innerHTML = "Venter!";
            playerProfiles[2][i].style.backgroundColor = "black";
            playerProfiles[2][i].style.color = "white";
        }
        stBC1.style.display = "block";
        nerB.style.display = "none";
        // leaderboardTb.style.display = "none";
        leaderboardTb.style.top = "250px";
        leaderboardTb.style.left = "525px";
        leaderboardTb.style.backgroundColor = "black";
        leaderboardTb.style.fontSize = "20px";
        rsv.innerHTML = "Resultater:";
        rsv.style.top = "180px";
        rsv.style.left = "525px";


        var realRelativeScoreArray = [];
        for (var i = 0; i < spillere.length; i++) {
          realRelativeScoreArray.push(0);
        }

        for (var i = 0; i < playerPoints.length; i++) {
          realRelativeScoreArray.splice(i, 1, playerPoints[i]);
        }
        console.log(realRelativeScoreArray);

        var sortedRelativeScoreArray = playerPoints.sort(sortNumber);
        console.log(sortedRelativeScoreArray);

        var tieCheck = find_duplicate_in_array(sortedRelativeScoreArray);
        console.log(tieCheck);

        for (var i = 0; i < spillere.length; i++) {
          if (realRelativeScoreArray[i] === sortedRelativeScoreArray[0]) {
          if (tieCheck >= 1) {
              for (var i = 0; i < realRelativeScoreArray.length; i++) {
                if (tieCheck[i] === sortedRelativeScoreArray) {
                  playerProfiles[0][i].style.backgroundColor = "white";
                  playerProfiles[1][i].style.backgroundColor = "white";
                  playerProfiles[2][i].style.backgroundColor = "white";
                  playerProfiles[3][i].style.backgroundColor = "white";
                  playerProfiles[0][i].style.color = "black";
                  playerProfiles[1][i].style.color = "black";
                  playerProfiles[2][i].style.color = "black";
                  playerProfiles[3][i].style.color = "black";

                  playerProfiles[2][i].innerHTML = "Uavgjort!";
                  rsv.innerHTML = "Uavgjort!";
            } else if (realRelativeScoreArray[i] === sortedRelativeScoreArray[0]) {
                  playerProfiles[0][i].style.backgroundColor = "white";
                  playerProfiles[1][i].style.backgroundColor = "white";
                  playerProfiles[2][i].style.backgroundColor = "white";
                  playerProfiles[3][i].style.backgroundColor = "white";
                  playerProfiles[0][i].style.color = "black";
                  playerProfiles[1][i].style.color = "black";
                  playerProfiles[2][i].style.color = "black";
                  playerProfiles[3][i].style.color = "black";

                  playerProfiles[2][i].innerHTML = "VINNER!!!";
                  rsv.innerHTML = "Vinneren er " + spillere[i];
                }
              }
            } else {
            if (realRelativeScoreArray[i] === sortedRelativeScoreArray[0]) {
              playerProfiles[0][i].style.backgroundColor = "white";
              playerProfiles[1][i].style.backgroundColor = "white";
              playerProfiles[2][i].style.backgroundColor = "white";
              playerProfiles[3][i].style.backgroundColor = "white";
              playerProfiles[0][i].style.color = "black";
              playerProfiles[1][i].style.color = "black";
              playerProfiles[2][i].style.color = "black";
              playerProfiles[3][i].style.color = "black";


              playerProfiles[2][i].innerHTML = "VINNER!!!";
              rsv.innerHTML = "Vinneren er " + spillere[i];
            }
          }
        }
      }
        //playerProfiles Array Content and Position Number:
        //playerProfileElementNames = 0
        //playerProfileElementPoints = 1
        //playerProfileElementStatus = 2
        //playerProfileElementTurns = 3
      }




      // DEVELOPER LOG >
      // TO DO LIST:
      // -MORE ANIMATION? (FIXED ISH)
      // -FINETUNE CSS (FIXED)
      // -FIX BUG: ON TIE 2 PLAYERS ARE WINNERS (APPARENTLY) (FIXED IGNORE COMMENT!)
      // -Noen knapper må klikkes to ganger for å registrere?
      // NB DAGEN MIN VAR VELDIG FYLT OPP IDAG; FIKK NESTEN IKKE BLI FERDIG MED ALLE KOMMENTARENE; LURER DU PÅ NOE, SEND MEG EN MELDING.
