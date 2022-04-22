const navToggle = document.querySelector('.nav-toggle');
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector('.close-btn');
const navLinks = [...document.querySelectorAll('.nav-link')]

const modal = document.querySelector('.modal');
const contactBtns = [...document.querySelectorAll('.contact')];
const closeModalBtn = document.querySelector('.modal-close-btn');
const sendMsg = document.querySelector('.send-msg')

navToggle.addEventListener('click', function () {
    overlay.style.width = '100%';
})

closeBtn.addEventListener('click', function () {
    overlay.style.width = '0%';
})


contactBtns.forEach(function (btn) {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    })
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    overlay.style.width = '0%';
  })
})

closeBtn.addEventListener('click', () => modal.style.display = 'none');
sendMsg.addEventListener('click', () => modal.style.display = 'none');

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
})


