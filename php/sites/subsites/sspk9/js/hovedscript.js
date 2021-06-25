// Antall poeng for å vinne
var VINNERSUM = 5;

// Spillerens poengsum
var playerPoints = 0;

// Maskinens Poengsum
var botPoints = 0;

// variabler for p elementene
var playerPointsEl = document.getElementById('spiller');
var botPointsEl = document.getElementById('bot');
var infoEl = document.getElementById('info');

// variabler for img elementene
var rockEl = document.getElementById('stein');
var scissorsEl = document.getElementById('saks');
var paperEl = document.getElementById('papir');
var botEl = document.getElementById('botPic');

//Legger til click-event på spiller bildene
rockEl.addEventListener("click", checkResults);
scissorsEl.addEventListener("click", checkResults);
paperEl.addEventListener("click", checkResults);

// Skriver ut "bruksanvisningen" i info-elementet
infoEl.innerHTML = "Velg stein , saks eller papir. Førstemann til " + VINNERSUM + " poeng vinner spillet.";

// Funksjonen som skal håndtere klikkene våre
function checkResults(event) {
  console.log("Du klikket på et bilde.");
  // Finner først bildet som ble klikket på.
  var playerChoice = event.target.id;

  // Skriver valgt bilde til konsollen
  console.log("Spiller valgte: " + playerChoice);

  // Velger tilfeldig for maskinen
  var randomizer = Math.floor(Math.random() * 3) + 1;

  // Lagrer maskinens "valg" i en variabel.
  var botChoice;

  // Gjør om maskinens valg til riktig bildefil.
  if (randomizer === 1) {
    botChoice = "stein";
  } else if (randomizer === 2) {
    botChoice = "saks";
  } else if (randomizer === 3) {
    botChoice = "papir";
  }

  // Skriver maskinens valg til konsollen
  console.log("Maskinen valgte: " + botChoice);

  // Endrer maskinens bilde
  botEl.src = "media/bilder/maskin_"+botChoice+".png";

  // Sammenligner for å avgjøre vinner
  if (playerChoice === botChoice) {
    // Ingen vant , gjør ingenting
  } else if (playerChoice === "stein"){
    if (botChoice === "saks"){
      // Spiller vant
      playerPoints++;
    } else if (botChoice === "papir"){
      // Maskin vant
      botPoints++;
    }
  } else if (playerChoice === "saks"){
    if (botChoice === "papir"){
      // Spiller vant
      playerPoints++;
    } else if (botChoice === "stein"){
      // Maskin vant
      botPoints++; }
    } else if (playerChoice === "papir"){
      if (botChoice === "stein"){
        // Spiller vant
        playerPoints++;
      } else if (botChoice === "saks"){
        // Maskin vant
        botPoints++;
      }
    }
    // Endrer poengsummene i skjermbildet
    playerPointsEl.innerHTML = "<b>Spiller: </b>" + playerPoints;
    botPointsEl.innerHTML = "<b>Maskin: </b>" + botPoints;

    // Skriver ut en avslutningsbeskjed
    if (playerPoints === VINNERSUM) {
      infoEl.innerHTML = "Spilleren vinner.";
      // Fjerner hendelser , slik at man ikke kan klikke på bildene
      rockEl.removeEventListener("click", checkResults);
      scissorsEl.removeEventListener("click", checkResults);
      paperEl.removeEventListener("click", checkResults);
      // Endrer musepekeren , slik at bildene virker "deaktiverte"
      rockEl.style.cursor = "auto";
      scissorsEl.style.cursor = "auto";
      paperEl.style.cursor = "auto";
    } else if (botPoints === VINNERSUM) {
      infoEl.innerHTML = "Maskinen vinner.";
      rockEl.removeEventListener("click", checkResults);
      scissorsEl.removeEventListener("click", checkResults);
      paperEl.removeEventListener("click", checkResults);
      rockEl.style.cursor = "auto";
      scissorsEl.style.cursor = "auto";
      paperEl.style.cursor = "auto";
    }
}
