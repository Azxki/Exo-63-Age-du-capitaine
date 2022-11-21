let a = 35

if (a < 50) {
    document.getElementById('capitaine').innerHTML = "Le capitaine a " + a + " ans.";
}

if (18 < a < 50) {
    document.getElementById('capitaine').innerHTML = "Le capitaine a " + a + " ans. Le capitaine n'est pas très vieux.";
}

if (50 < a) {
    document.getElementById('capitaine').innerHTML = "Le capitaine est vieux.";
}