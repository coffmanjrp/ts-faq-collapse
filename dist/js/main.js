"use strict";
var faqContainer = document.getElementById('faq-container');
var faqs = [
    {
        id: 1,
        title: 'What is the code editor you prefer?',
        text: 'VScode',
    },
    {
        id: 2,
        title: 'What is your favorite javascript framework?',
        text: 'React',
    },
    {
        id: 3,
        title: 'Give me an example of your favorite react library that you have worked with?',
        text: 'Recoil is my favorite react state management library',
    },
    {
        id: 4,
        title: 'What is: 1 + 1?',
        text: '10',
    },
];
faqContainer.innerHTML = faqs
    .map(function (faq) {
    return "\n<div class=\"faq ".concat(faq.id === 1 && 'active', "\">\n  <h3 class=\"faq-title\">").concat(faq.title, "</h3>\n  <p class=\"faq-text\">").concat(faq.text, "</p>\n  <button class=\"faq-toggle\">\n    <i class=\"fas fa-chevron-down\"></i>\n    <i class=\"fas fa-times\"></i>\n  </button>\n</div>");
})
    .join('');
var toggleBtn = document.querySelectorAll('.faq-toggle');
toggleBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        btn.parentNode.classList.toggle('active');
    });
});
