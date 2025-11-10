let antallFly = 1;
let antallFlyplasser = 1;
let penger = 0;
let reiseKlasse = "ØKONOMI";
let prisFly = 500;
let prisFlyplass = 2000;
let businessClass = false;
let firstClass = false;

function updateUI() {
  document.getElementById("antallFly").textContent = antallFly;
  document.getElementById("antallFlyplasser").textContent = antallFlyplasser;
  document.getElementById("penger").textContent = penger;
  document.getElementById("klasse").textContent = reiseKlasse;
  document.getElementById("prisFly").textContent = prisFly;
  document.getElementById("prisFlyplass").textContent = prisFlyplass;
}

function kjopFly() {
  if (penger >= prisFly) {
    penger -= prisFly;
    antallFly++;
    prisFly = Math.floor(prisFly * 1.5); // pris øker med 50% hver gang
  } else {
    console.log("Du har ikke nok penger til å kjøpe et fly!");
  }
  updateUI();
}

function kjopFlyplass() {
  if (penger >= prisFlyplass) {
    penger -= prisFlyplass;
    antallFlyplasser++;
    prisFlyplass = Math.floor(prisFlyplass * 1.5); // pris øker med 50% hver gang
  } else {
    console.log("Du har ikke nok penger til å kjøpe en flyplass!");
  }
  updateUI();
}

function fly() {
  if (antallFly > 0) {
    let inntekt = 100 * antallFly * antallFlyplasser;

    if (businessClass == true) {
      inntekt = inntekt * 2;
      if (firstClass == true) {
        inntekt = inntekt * 4;
      }
    }
    penger += inntekt;
    console.log(`Du tjente ${inntekt} kr!`);
  } else {
    console.log("Du må ha et fly for å tjene penger!");
  }
  updateUI();
}

function upgradeBusiness() {
  if (penger >= 500) {
    penger = penger - 500;
    reiseKlasse = "BUSINESS";
    businessClass = true;
    upgradeBusiness = Math.floor(prisBusiness * 1.5); // øker med 50%
    console.log(`Businessklasse kjøpt! Ny pris: ${prisBusiness} kr`);
  } else {
    console.log("Du har ikke nok penger til å kjøpe en bussienklasse");
  }
  updateUI();
}

function upgradeFirst() {
  if (businessClass == true && penger >= 1000) {
    penger = penger - 1000;
    reiseKlasse = "FIRST";
    firstClass = true;
    upgradeFirst = Math.floor(prisFirst * 1.5); // øker med 50%
    console.log(`upgradeFirst  kjøpt! Ny pris: ${prisFirst} kr`);
  } else {
    console.log("du har ikke nok penger til kjøpe en firstklasse");
  }
  updateUI();
}
updateUI();
