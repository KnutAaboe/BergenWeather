/* 
Verdiene du skal hente ut er:
- Weather (navnet)
- From
- Description
- Wind speed
- Temperature
*/

"use strict"

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready();
}




async function ready() {
    const api_url = "https://api.openweathermap.org/data/2.5/forecast?lat=60.3913&lon=5.3221&appid=b5749e8dbc962119cdcddf66a3040c69&units=metric";
    const response = await fetch(api_url);
    const data = await response.json();
    const list = data.list;

    //Noden til tabellen
    const nodeparent = document.getElementById("start");
    
    //Node til City print out
    const nodeP = document.getElementById("by");



    

//Lister gjennom bare list og lager nødvendig plass i tabellen
    var i;
    for (i = 0; i < list.length; i++) {
        
        const node = document.createElement("tr");
        nodeparent.appendChild(node);

        printWeather(i, node);
    }

//Printer ut by
    printCity(nodeP);

    


function printWeather(i, node){
        const idNode = document.createElement("th");
        const weatherNode = document.createElement("th");
        const fromNode = document.createElement("th");
        const descNode = document.createElement("th");
        const wsNode = document.createElement("th");
        const tempNode = document.createElement("th");

        const id = i+1;
        const weather = list[i].weather[0].main;
        const from = list[i].dt_txt;
        const description = list[i].weather[0].description; 
        const ws = list[i].wind.speed;
        const temp =  list[i].main.temp

        idNode.appendChild(document.createTextNode(id));
        node.appendChild(idNode);

        weatherNode.appendChild(document.createTextNode(weather));
        node.appendChild(weatherNode);

        fromNode.appendChild(document.createTextNode(from));
        node.appendChild(fromNode);

        descNode.appendChild(document.createTextNode(description));
        node.appendChild(descNode);

        wsNode.appendChild(document.createTextNode(ws));
        node.appendChild(wsNode);

        //Forrandrer farge etter temperaturen
        if (temp <= 10) {
            tempNode.style.backgroundColor = "lightblue";
            
        } else if (temp >= 15){
            tempNode.style.backgroundColor = "red";
        }
        
        tempNode.appendChild(document.createTextNode(temp));
        node.appendChild(tempNode);
    
}

function printCity(nodeP){
    const nodee = document.createElement("h2");
    nodee.appendChild(document.createTextNode(data.city.country + ": " + data.city.name));
    nodeP.appendChild(nodee);


}

}

