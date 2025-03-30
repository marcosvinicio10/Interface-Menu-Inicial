function showContent(option) {
    const content = document.getElementById('content');
    let html = '';
    let gradient = '';

    switch (option) {
        case 'jogar':
            html = `
                <img src="logo.png" class="game-logo2" alt="Nome do Jogo">
                <h2 class="blinking-text">Pressione "Espaço" para começar!</h2>
            `;
            gradient = 'linear-gradient(to right, #0f0f0f, #005f73)';
            break;
        case 'configuracoes':
            html = `
                <h2>Configurações</h2>
                <div class="config"> <p>Volume: <input type='range' min='0' max='100' value='50'></p>
                </div>

                <div class="config"> <p>Gráficos: <select><option>Baixo</option><option>Médio</option><option>Alto</option></select></p>
                </div>

                <div class="config"> <p>Controles: <button>Configurar</button></p>
                </div>  
            `;
            gradient = 'linear-gradient(to right, #0f0f0f, #005f73)';
            break;
        case 'creditos':
            html = `
                <h2>Creditos</h2>
              
                    <ul>
                    <div class="dicas">  <p>Beatriz - Design & Art</p>
                    </div>

                    <div class="dicas">  <p1>Marcos Vinicio - Programação</p>
                    </div>

                    <div class="dicas"> <p>Jão - Programação</p>
                    </div>

                    <div class="dicas"> <p>Erike - Som & Art</p>
                    </div>
                    </ul>
              
            `;
            gradient = 'linear-gradient(to right, #0f0f0f, #005f73)';
            break;
        default:
            html = '<h2>Selecione uma opção</h2>';
            gradient = 'linear-gradient(to right, #0f0f0f, #005f73)';
            break;
    }

    content.innerHTML = html;
    document.body.style.background = gradient;
}
