
const experience = document.querySelector('section:nth-of-type(3)');

experience.addEventListener('click', (event) => {
  if (event.target.tagName === 'STRONG') {
    const job = event.target.parentNode;
    const responsibilities = job.querySelector('ul');
    responsibilities.classList.toggle('hidden');
  }
});


const email = document.querySelector('li:nth-of-type(1)');
const phone = document.querySelector('li:nth-of-type(2)');
const address = document.querySelector('li:nth-of-type(3)');

email.addEventListener('click', () => {
  alert('Email: john.doe@example.com');
});

phone.addEventListener('click', () => {
  alert('Phone: (555) 555-5555');
});

address.addEventListener('click', () => {
  alert('Address: 123 Main St, Anytown USA 12345');
});




const header = document.querySelector('header');

header.addEventListener('mouseover', () => {
  header.style.backgroundColor = 'lightblue';
});

header.addEventListener('mouseout', () => {
  header.style.backgroundColor = '';
});





window.onload = function() {
    const elements = document.querySelectorAll('.fade-in');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.style.opacity = 0;
      element.style.transition = 'opacity 1s';
      setTimeout(() => {
        element.style.opacity = 1;
      }, i * 100);
    }
  }
  

  window.onload = function() {
    const elements = document.querySelectorAll('.slide-in-left');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.style.transform = 'translateX(-100%)';
      element.style.transition = 'transform 1s';
      setTimeout(() => {
        element.style.transform = 'translateX(0)';
      }, i * 100);
    }
  }
  