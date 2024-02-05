function soma(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var res = num1 + num2;
    document.getElementById("resSoma").textContent = res.toFixed(2);
}

function media(){
    var media1 = document.getElementById("media1").valueAsNumber;
    var media2 = document.getElementById("media2").valueAsNumber;
    var media3 = document.getElementById("media3").valueAsNumber;
    var resMedia = (media1 + media2 + media3) / 3;
    document.getElementById("resMedia").textContent = resMedia.toFixed(2);
}

function limpar(){
    window.location.reload();
}