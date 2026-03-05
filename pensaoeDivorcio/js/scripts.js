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

// Script para as abas de dúvidas
document.addEventListener('DOMContentLoaded', function() {
    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('ativo'));
            tabPanels.forEach(panel => panel.classList.remove('ativo'));
            
            // Add active class to clicked button
            button.classList.add('ativo');
            
            // Show corresponding panel
            const tabId = button.getAttribute('data-tab');
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
    
    // Animação simples de entrada para cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar cards para animação
    document.querySelectorAll('.area-item, .sobre-familia-card, .caso-real-card, .card-pensao').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});