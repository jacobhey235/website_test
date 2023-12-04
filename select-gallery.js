const bigimg = document.getElementById("bigimg");
const smallimgs = document.querySelectorAll("#smallimg");
smallimgs.forEach(smallimg => { 
    smallimg.addEventListener('click', function () {
        const selectedThumbnail = document.querySelector('.iselected');
        bigimg.src = smallimg.src;
        if (selectedThumbnail) {
        selectedThumbnail.classList.remove('iselected');
        smallimg.classList = 'iselected';
        }
    });
});