document.addEventListener('DOMContentLoaded', function() {
    // FAQ DUPLO (novo formato)
    const faqPerguntas = document.querySelectorAll('.faq-duplo-pergunta');
    
    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            // Fecha outros itens abertos
            faqPerguntas.forEach(p => {
                if (p !== this) {
                    p.classList.remove('ativo');
                    p.nextElementSibling.classList.remove('ativo');
                }
            });
            
            // Alterna o item clicado
            this.classList.toggle('ativo');
            const resposta = this.nextElementSibling;
            resposta.classList.toggle('ativo');
        });
    });
    
    // FAQ antigo (manter se ainda existir)
    const faqAntigo = document.querySelectorAll('.faq-pergunta');
    faqAntigo.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            const resposta = this.nextElementSibling;
            resposta.classList.toggle('ativa');
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
});