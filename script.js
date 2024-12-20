document.getElementById('toggle-theme').addEventListener('click', function () {
    document.body.classList.toggle('night-mode');
});

document.getElementById('language-select').addEventListener('change', function () {
    const language = this.value;
    console.log(`Selected Language: ${language}`);
});
