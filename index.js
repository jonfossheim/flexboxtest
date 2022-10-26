const checkAuth = () => {
  console.log(localStorage.getItem('auth'));
  if (localStorage.getItem('auth') === 'loveisreal') {
    return;
  }
  window.location.href = '/login.html';
};

checkAuth();
