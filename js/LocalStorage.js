// Verifica se já existe um valor de contador no localStorage
if(localStorage.getItem('visitas')) {
    // Se existir, incrementa o valor em 1
    localStorage.setItem('visitas', parseInt(localStorage.getItem('visitas')) + 1);
} else {
    // Se não existir, define o valor inicial como 1
    localStorage.setItem('visitas', 1);
}

// Atualiza o conteúdo da página com o valor do contador
document.getElementById('contador').innerText = localStorage.getItem('visitas');