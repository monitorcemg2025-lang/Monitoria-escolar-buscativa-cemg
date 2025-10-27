async function login(username, password) {
    try {
        console.log('Tentando login com usuário:', username);
        const response = await fetch('data/mock-api.json', { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status} - Falha ao carregar mock-api.json`);
        }
        const data = await response.json();
        const isValid = data.monitors.find(
            monitor => monitor.username === username && monitor.password === password
        ) !== undefined;
        console.log('Login válido:', isValid);
        return isValid;
    } catch (error) {
        console.error('Erro ao acessar mock API:', error.message);
        return false;
    }
}

document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Formulário de login submetido');
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (await login(username, password)) {
        console.log('Login bem-sucedido, redirecionando para main.html');
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'main.html';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
        console.log('Login falhou');
    }
});
