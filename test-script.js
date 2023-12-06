const he2 = document.querySelector("#rh");
const ans0 = document.querySelector("#response0");
const ans1 = document.querySelector("#response1");
const ans2 = document.querySelector("#response2");
const ans3 = document.querySelector("#response3");
const but = document.querySelector("#finalbutton");

but.addEventListener("click", function(){
    let points = 0;
    if(ans0.value.toLowerCase() === "do you play" || ans0.value.toLowerCase() === "do/play" || ans0.value.toLowerCase() === "do play"){
        points++;
    }
    if(ans1.value.toLowerCase() === "are"){
        points++;
    }
    if(ans2.value.toLowerCase() === "does"){
        points++;
    }
    if(ans3.value.toLowerCase() === "was written"){
        points++;
    }
    he2.innerHTML = "Ваш результат: " + (points) + "/4";
});