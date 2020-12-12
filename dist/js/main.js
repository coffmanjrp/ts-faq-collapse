"use strict";
var toggleBtn = document.querySelectorAll('.faq-toggle');
toggleBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        btn.parentNode.classList.toggle('active');
    });
});
