const parallax0 = document.querySelector("#intro0");
const parallax1 = document.querySelector("#intro1");
window.addEventListener("scroll", function(){
    if(this.innerWidth > 1000) {
        parallax0.style.backgroundPositionY = (-0.16 * this.window.innerHeight + (this.window.scrollY * 0.7)) + "px";
        parallax1.style.backgroundPositionY = (0.16 * this.window.innerHeight + (this.window.scrollY * 0.7)) + "px";
    }
});