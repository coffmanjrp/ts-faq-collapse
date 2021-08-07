const toggleBtn = document.querySelectorAll(
  '.faq-toggle'
) as NodeListOf<HTMLButtonElement>;

toggleBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    (<HTMLDivElement>btn.parentNode).classList.toggle('active');
  });
});
