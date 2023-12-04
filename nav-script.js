document.querySelector('.menu').addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        var confirmed = confirm(`Вы точно хотите перейти на страницу "${event.target.innerText}"?`);
        if (!confirmed) {
            event.preventDefault();
        }
    }
});