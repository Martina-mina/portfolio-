
// script.js

// تأثير كتابة النص الديناميكي في قسم الـHero
const heroTextElement = document.querySelector('.hero p');
const textToType = ".NET Full Stack Developer";
let i = 0;
let typingEffect;

function typeWriter() {
  if (i < textToType.length) {
    heroTextElement.textContent += textToType.charAt(i);
    i++;
    typingEffect = setTimeout(typeWriter, 80); // سرعة الكتابة بالمللي ثانية
  } else {
    // يمكنك إضافة أي إجراء بعد انتهاء الكتابة، مثل إعادة التشغيل أو إيقاف المؤشر
  }
}

// ابدأ التأثير عند تحميل الصفحة
window.onload = function() {
  heroTextElement.textContent = ""; // تأكد من أن النص فارغ في البداية
  typeWriter();
};











// script.js

// إضافة تأثير الظهور السلس عند التمرير
const sections = document.querySelectorAll('.section, .hero');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 }); // النسبة المئوية التي يجب أن يظهر بها العنصر قبل أن يتم تفعيله

sections.forEach(section => {
  section.classList.add('hidden'); // إخفاء الأقسام مبدئياً
  observer.observe(section);
});



// script.js (أضفي هذا الكود في نهاية الملف أو بعد أكوادك الأخرى)

const starBackground = document.querySelector('.star-background');
const numberOfStars = 100; // عدد النجوم التي تريدينها

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // تحديد حجم عشوائي للنجمة
    const size = Math.random() * 3 + 1; // بين 1px و 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // تحديد موقع عشوائي للنجمة
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`; // في البداية لتظهر من أي مكان

    // تحديد سرعة وزمن تأخير عشوائي للحركة
    const animationDuration = Math.random() * 10 + 5; // بين 5s و 15s
    const animationDelay = Math.random() * 10; // تأخير عشوائي لبداية الحركة
    star.style.animationDuration = `${animationDuration}s, ${Math.random() * 3 + 2}s`; // لـ star-fall و star-twinkle
    star.style.animationDelay = `${animationDelay}s, ${Math.random() * 2}s`; // لكل من star-fall و star-twinkle

    // تحديد شفافية مبدئية
    star.style.opacity = Math.random() * 0.8 + 0.2; // بين 0.2 و 1

    starBackground.appendChild(star);
}






