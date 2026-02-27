// FAQ Interativo
document.addEventListener('DOMContentLoaded', function() {
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');
    
    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            const resposta = this.nextElementSibling;
            resposta.classList.toggle('ativa');
            
            // Muda o ícone visual (opcional)
            if (resposta.classList.contains('ativa')) {
                this.innerHTML = this.innerHTML + ' <span style="float:right;">−</span>';
            } else {
                this.innerHTML = this.innerHTML.replace('−', '+');
            }
        });
        
        // Adiciona indicador de expansão
        pergunta.innerHTML = pergunta.innerHTML + ' <span style="float:right;">+</span>';
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