const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (email === 'albx.dev@outlook.com' && password === 'Admin123') {
        
        window.location.href = 'horarios.html';
    } else {
        alert('Credenciales incorrectas.');
    }
});