function showContent(option) {
    const content = document.getElementById('content');
    let html = '';
    let gradient = '';

    switch (option) {
        case 'jogar':
            html = `
                <h1>Nome do Jogo</h1>
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
        case 'equipe':
            html = `
                <h2>Equipe</h2>
                <div class='cards'>
                    <div class='card'><h3>Marcos Vinicio</h3><p>Software Developer</p></div>
                    <div class='card'><h3>Jao</h3><p>Software Developer</p></div>
                    <div class='card'><h3>Erik</h3><p>Audio e Art</p></div>
                    <div class='card'><h3>Onivaldo Pereira</h3><p>Game Design</p></div>
                    <div class='card'><h3>Beatriz</h3><p>Design & Arts</p></div>
                </div>
            `;
            gradient = 'linear-gradient(to right, #0f0f0f, #005f73)';
            break;
        case 'como_jogar':
            html = `
                <h2>Dicas</h2>
              
                    <ul>
                    <div class="dicas">  <p1>Use <b>WASD</b> para se movimentar</li>
                    </div>

                    <div class="dicas">  <p1>Pressione <b>espaço</b> para pular</li>
                    </div>

                    <div class="dicas"> <p1>Aperte <b>Shift</b> para correr</li>
                    </div>

                    <div class="dicas"> <p1>Evite inimigos escondidos na escuridão</li>
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
