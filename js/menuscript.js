
var element = document.getElementById("sidecontent");
var ton = document.getElementById("ton");
var toff = document.getElementById("toff");
var trueflex ="true";



function timedMenyInnUt() {
  var trueflex ="true";
  var ton = document.getElementById("ton");
  var toff = document.getElementById("toff");
  var element = document.getElementById("sidecontent");
  var cover = document.getElementById("page-menu-onclick-cover");
  function parameterDelayTonN()  {  ton.style.display = "none";}
  function parameterDelayToffN() { toff.style.display = "none";}
  function parameterDelayEDN() {   element.style.display="none"; toff.style.display = "block"; trueflex ="true"; };
  function parameterDelayEDF() {  element.style.opacity = "1.0"; element.style.left = "10px"; ton.style.opacity = "0.0"; ton.style.top = "0px"; toff.style.display = "block"; toff.style.opacity = "1.0"; toff.style.left = "310px"; trueflex ="false"; cover.style.display = "block";}



    if (element.style.display === "none") {
        setTimeout(parameterDelayEDF,0);
        if (trueflex = "true") {
        element.style.display="flex";
        ton.style.display="block";
        cover.style.opacity = "0.5";
      }

        } else {
                setTimeout(parameterDelayEDN,500);
                if (trueflex = "false") {
                element.style.opacity = "0.0";
                element.style.left = "1000px";

                ton.style.opacity = "1.0";
                ton.style.top = "220px";

                toff.style.opacity = "0.0";
                toff.style.left = "1310px";

                cover.style.opacity = "0.0";
                cover.style.display = "none";
            }
          }
        };

console.log(timedMenyInnUt());


/*


element.style.display = "none";

  */





//var array = [1, 2, 3, 4, 5, 6, 7];
//var index = Math.floor(Math.random * 6);
//console.log(array[index]);
