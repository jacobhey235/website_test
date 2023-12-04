const Card0 = document.getElementById("first-card");
const Card1 = document.getElementById("second-card");
const Card2 = document.getElementById("third-card");
const Card3 = document.getElementById("fourth-card");
function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.substring(0, maxLength) + "…";
    }
}
let maxlen = window.prompt("Введите максимальное количество символов на карточках:")
Card0.innerText = truncate(Card0.innerText, parseInt(maxlen));
Card1.innerText = truncate(Card1.innerText, parseInt(maxlen));
Card2.innerText = truncate(Card2.innerText, parseInt(maxlen));
Card3.innerText = truncate(Card3.innerText, parseInt(maxlen));