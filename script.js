document.getElementById('toggle-theme').addEventListener('click', function () {
    document.body.classList.toggle('night-mode');
});

document.getElementById('language-select').addEventListener('change', function () {
    const language = this.value;
    console.log(`Selected Language: ${language}`);
});
// خاصية التبديل بين الوضع النهاري والليلي
document.getElementById('toggle-theme').addEventListener('click', function () {
    document.body.classList.toggle('night-mode');
});

// تحسين التفاعل مع قائمة اللغات
document.getElementById('language-select').addEventListener('change', function () {
    const language = this.value;
    alert(`تم اختيار اللغة: ${language}`);
});

// إضافة تأثير عند التمرير فوق العناصر في قائمة التنقل
document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
