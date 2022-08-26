// var elSon = document.querySelector('.son')
// var elTip = document.querySelector('.tip')
// var number = prompt('istalgan son kiriting')

// elSon.textContent = number
// if (number%2 == 0){elTip.textContent = 'Juft';}
// else {elTip.textContent = 'Toq';}

var airPlane = 500
var hotel = 250
var museum = 120

var usd = 11000
var euro = 11800

var total = (airPlane + hotel) * usd + euro * museum

var balance = +prompt('Alisherjon Sayohat uchun Qancha pulingiz bor ? So`mda kiriting')

var elTitle = document.querySelector('.title')
if (balance > total) {
    elTitle.textContent = `Oq yol Alisher 👋🏻✈️
     sizda qoshimcha xarjatlarga ${(Math.round((balance - total)/usd))} $ pulingiz bor `;
}
else{elTitle.textContent = `Alisher afsuski sizning mablagingiz yetarli emas !
 Siz yana ${(Math.round((balance - total)/usd))} $ toplashingiz zarur ❗️😞`}
