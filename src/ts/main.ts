const faqContainer = document.getElementById('faq-container') as HTMLDivElement;

const faqs = [
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
    title:
      'Give me an example of your favorite react library that you have worked with?',
    text: 'Recoil is my favorite react state management library',
  },
  {
    id: 4,
    title: 'What is: 1 + 1?',
    text: '10',
  },
];

faqContainer.innerHTML = faqs
  .map((faq) => {
    return `
<div class="faq ${faq.id === 1 && 'active'}">
  <h3 class="faq-title">${faq.title}</h3>
  <p class="faq-text">${faq.text}</p>
  <button class="faq-toggle">
    <i class="fas fa-chevron-down"></i>
    <i class="fas fa-times"></i>
  </button>
</div>`;
  })
  .join('');

const toggleBtn = document.querySelectorAll(
  '.faq-toggle'
) as NodeListOf<HTMLButtonElement>;

toggleBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    (<HTMLDivElement>btn.parentNode).classList.toggle('active');
  });
});
