var btn = document.getElementById("rul_btn");



var rulWrapperId = document.getElementById("container").id;
console.log("Getting Element Name @" + rulWrapperId)

var rulWrapper = document.getElementById("container");
console.log("Getting Element " + rulWrapperId + " @" + rulWrapper)


btn.addEventListener("click", switchVis);

function switchVis(){
  console.log("Function Start");

  if (rulWrapper.style.display === "none") {
    console.log(rulWrapperId + "'s Display Status Before Change = " + rulWrapper.style.display);
    rulWrapper.style.display = "block";
    console.log("Successfully changed " + rulWrapperId + " display setting to " + rulWrapper.style.display);
    console.log(rulWrapperId + "'s Display Status After Change = " + rulWrapper.style.display);

  } else {
    console.log(rulWrapperId + "'s Display Status Before Change = " + rulWrapper.style.display);
    rulWrapper.style.display = "none";
    console.log("Successfully changed " + rulWrapperId + " display setting to " + rulWrapper.style.display);
    console.log(rulWrapperId + "'s Display Status After Change = " + rulWrapper.style.display);
  }
  console.log("Reached end of function!");
}
