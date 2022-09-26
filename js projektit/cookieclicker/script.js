let count = 0;
let cps = 0;
let clicks = 1;
let scale = 0;
let firstLevelAMOUNT = 0;



document.getElementById("keksit").innerHTML = count+" Keksiä";

function Clicked() {
  count+=clicks;
  scale+=0.1;
  let word = " Keksiä";
  document.getElementById("keksit").innerHTML = "";
  let cookieCount = document.getElementById("keksit").innerHTML = count+word;
};

function firstLevel() {
  if (count >= 100) {
    clicks+=1
    count-=100
    let word = " Keksiä";
    let cookieCount = document.getElementById("keksit").innerHTML = count+word;
    firstLevelAMOUNT+=1
    document.getElementById("ensimmainenTaso").innerHTML = firstLevelAMOUNT+" ostettu!";
  }
  else {
    alert("Sinulla ei ole tarpeeksi keksejä!")
  }
};