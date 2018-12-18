
function TonyLine(){
    var tony = document.getElementById('line1').value
    var speak = document.getElementById('tony').innerHTML = tony;
    responsiveVoice.speak(tony, "UK English Male");
}

function GennyLine(){
    var genny = document.getElementById('line2').value
    var speak = document.getElementById('genny').innerHTML = genny;
    responsiveVoice.speak(genny, "UK English Female");
}

