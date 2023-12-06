const numblock = document.querySelector("#card-num");
const nameblock = document.querySelector("#holder-name")
const validblock = document.querySelector("#valid-date")
const errmes = document.querySelector("#wrongdate")
const bb = document.querySelector(".sub-button");

numblock.addEventListener("input",function(){
    if(numblock.value.length === 4){
        numblock.value += ' ';
    }else if(numblock.value.length > 4){
        if((numblock.value.length + 1) % 5 === 0 && numblock.value.length < 19 && numblock.value[numblock.value.length - 1] !== ' '){
            numblock.value += ' ';
        }
    }
});

numblock.addEventListener("keypress",function onlydig(e) {
    let key;
    const theEvent = e || window.event;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
});

validblock.addEventListener("keypress",function onlydig(e) {
    let key;
    const theEvent = e || window.event;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
});

nameblock.addEventListener("keypress",function onlylet(e) {
    let key;
    const theEvent = e || window.event;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    const regex = /^[A-Za-z\s]*$/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
});

validblock.addEventListener("input",function onlythru(e){
    if(validblock.value.length === 2){
        if(Number(validblock.value[0] + validblock.value[1]) > 12){
            errmes.innerText = "Ошибка";
            bb.disabled = true;
        }
        validblock.value += "/";
    }else if(validblock.value.length === 5){
        if(Number(validblock.value[3] + validblock.value[4]) < 23){
            errmes.innerText = "Ошибка";
            bb.disabled = true;
        }
    }
    if((validblock.value[validblock.length - 1] + validblock.value[validblock.length - 2]) === "//"){
        validblock.value[validblock.length - 1] = '';
    }
});

validblock.addEventListener("keydown",function backspacer(e){
    if(e.key === "Backspace" && validblock.value[validblock.value.length - 1] === '/'){
        validblock.value = validblock.value[0];
        bb.disabled = false;
        errmes.innerHTML = '';
    }
});