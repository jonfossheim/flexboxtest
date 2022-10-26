let submit = document.getElementById('submitbtn');

const login = () => {
  let uInput = document.getElementById('username').value;
  let pInput = document.getElementById('password').value;
  console.log(uInput);
  if (uInput === 'guest' && pInput === 'loveisforever') {
    localStorage.setItem('auth', 'loveisreal');
    window.location.href = '/index.html';
  }
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  login();
});
