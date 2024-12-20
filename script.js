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
document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;

    const texts = {
        ar: {
            welcomeMessage: "مرحبا بك في موقعنا",
            loginDescription: "يرجى تسجيل الدخول للوصول إلى حسابك."
        },
        en: {
            welcomeMessage: "Welcome to our website",
            loginDescription: "Please log in to access your account."
        }
    };

    // تحديث النصوص بناءً على اللغة المختارة
    document.querySelector('.welcome-message').textContent = texts[selectedLanguage].welcomeMessage;
    document.querySelector('.login-description').textContent = texts[selectedLanguage].loginDescription;
});
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
    const themeText = document.body.classList.contains('night-mode') ? 'الوضع النهاري' : 'الوضع الليلي';
    this.textContent = themeText;
});
// تغيير الوضع بين النهار والليل
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// تغيير اللغة
document.getElementById('language-select').addEventListener('change', function() {
    let language = this.value;
    if (language === 'ar') {
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.lang = 'en';
    }
});
                                                            
