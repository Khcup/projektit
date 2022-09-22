var kaveriLista = [];
var lisattavamaara = 10;

function lisaaHenkilo(){
    var nimi = document.getElementById("nimi").value;
    if(nimi.length == 0){
        alert("Kenttä pitää täyttää");
    }else{
        kaveriLista.push(nimi);
        if(!(lisattavamaara == 0)){
            lisattavamaara -= 1;
        }
        
        document.getElementById("ylateksti").innerHTML = "Lisää " + lisattavamaara + " kaveria";
    }
    if(kaveriLista.length == 10){
        text = "<ol>";
        for (let i = 0; i <kaveriLista.length; i++) {

         text += "<li>" + kaveriLista[i] + "</li>";

        }
        text += "</ol>";

        document.getElementById("tekstikentta").innerHTML = text;
    }
    document.getElementById("kaverilista").reset();
}