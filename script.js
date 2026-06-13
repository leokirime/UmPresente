// Criar partículas de fundo
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            particle.style.width = particle.style.height = (5 + Math.random() * 10) + 'px';
            particlesContainer.appendChild(particle);
        }

        function openEnvelope() {
            const envelope = document.getElementById('envelope');
            const letter = document.getElementById('letter');
            if (!envelope.classList.contains('open')) {
                envelope.classList.add('open');
                letter.classList.add('open');
                createHearts();
            }
        }

        function closeEnvelope(event) {
            event.stopPropagation();
            const envelope = document.getElementById('envelope');
            const letter = document.getElementById('letter');
            envelope.classList.remove('open');
            letter.classList.remove('open');
        }

        function createHearts() {
            const heartsContainer = document.getElementById('hearts');
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart';
                    heart.innerHTML = '❤';
                    heart.style.left = (20 + Math.random() * 60) + '%';
                    heart.style.top = (30 + Math.random() * 30) + '%';
                    heart.style.fontSize = (16 + Math.random() * 24) + 'px';
                    heart.style.animationDuration = (3.5 + Math.random() * 1.5) + 's';
                    heartsContainer.appendChild(heart);
                    
                    setTimeout(() => heart.remove(), 4500);
                }, i * 80);
            }
        }

        // Abrir automaticamente após 3 segundos (opcional)
        // setTimeout(openEnvelope, 3000);