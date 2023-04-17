import { series } from './data.js';
var seriestable = document.getElementById("series");
var avgText = document.getElementById("Avg");
var cardText = document.getElementById("info");
var showEvent;
function load() {
    showEvent = document.getElementsByName("click");
    showEvent.forEach(function (c) { c.onclick = function () { return showSerie(Number(c.id)); }; });
}
showSeries(series);
showSeasonAvg(series);
function showSeries(series) {
    var tbodySerie = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        tbodySerie.innerHTML +=
            "<tr name=\"click\" id=".concat(serie.id, " >\n         <td>").concat(serie.id, "</td>\n         <td><a href=\"").concat(serie.url, "\"> ").concat(serie.nombre, "</a></td> \n         <td>").concat(serie.productora, "</td>\n         <td>").concat(serie.temporadas, "</td>\n         </tr>");
        console.log(serie);
        console.log(serie.imagen);
    }
    seriestable.appendChild(tbodySerie);
    load();
}
function showSeasonAvg(series) {
    var avg = 0;
    var avgAdd = document.createElement("h2");
    var tot = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        avg += serie.temporadas;
        tot++;
    }
    avgAdd.innerHTML = (series.length > 0) ? "Season Average ".concat(avg / tot) : "No hay series";
    avgText.appendChild(avgAdd);
}
// Parte Taller 2
function showSerie(number) {
    console.log("asdibasda");
    cardText.childNodes.forEach(function (c) { cardText.removeChild(c); });
    var serie = series[number - 1];
    var cardBody = document.createElement("div");
    cardBody.innerHTML = "\n    <img class=\"card-img-top\" src=".concat(serie.imagen, " alt=\"Card image\">\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">").concat(serie.nombre, "</h4>\n        <p class=\"card-text\">").concat(serie.reseña, "</p>\n        <a href=\"").concat(serie.url, "\" >").concat(serie.url, "</a>\n    </div>    \n    ");
    cardText.appendChild(cardBody);
}
