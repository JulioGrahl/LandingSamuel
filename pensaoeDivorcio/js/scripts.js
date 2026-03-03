document.addEventListener('DOMContentLoaded', function() {
    // Tabs das dúvidas frequentes
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active de todos os botões
            tabBtns.forEach(b => b.classList.remove('ativo'));
            
            // Adiciona active ao botão clicado
            this.classList.add('ativo');
            
            // Esconde todos os painéis
            tabPanels.forEach(panel => panel.classList.remove('ativo'));
            
            // Mostra o painel correspondente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('ativo');
        });
    });
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animação suave nos cards
    const cards = document.querySelectorAll('.area-item, .card-pensao, .caso-real-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});