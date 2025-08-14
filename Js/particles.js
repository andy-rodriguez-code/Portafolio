class ParticleSystem {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.smokeParticles = [];
        this.animationId = null;
        this.init();
    }

    init() {
        // Detectar si es dispositivo móvil o de bajo rendimiento
        this.isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Crear canvas para partículas
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'particles-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        this.canvas.style.opacity = this.isMobile ? '0.4' : '0.6';
        
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.resize();
        this.createParticles();
        this.createSmokeParticles();
        this.animate();
        
        // Redimensionar canvas cuando cambie el tamaño de ventana
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        // Ajustar cantidad según dispositivo
        const baseCount = this.isMobile ? 30000 : 20000;
        const particleCount = Math.floor((window.innerWidth * window.innerHeight) / baseCount);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 1.5 + 0.3,
                opacity: Math.random() * 0.3 + 0.1,
                color: this.getElectronicColor(),
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.015 + 0.005
            });
        }
    }

    createSmokeParticles() {
        // Ajustar humo según dispositivo
        const baseCount = this.isMobile ? 50000 : 35000;
        const smokeCount = Math.floor((window.innerWidth * window.innerHeight) / baseCount);
        
        for (let i = 0; i < smokeCount; i++) {
            this.smokeParticles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 12 + 3,
                opacity: Math.random() * 0.06 + 0.01,
                life: Math.random() * 300 + 200,
                maxLife: 500
            });
        }
    }

    getElectronicColor() {
        const colors = [
            '#00FFFF', // Cyan
            '#FF9142', // Orange (accent)
            '#00FF00', // Green
            '#FFFFFF', // White
            '#FFD700', // Gold
            '#FF69B4'  // Pink
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    updateParticles() {
        this.particles.forEach(particle => {
            // Movimiento suave
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Efecto de pulso
            particle.pulse += particle.pulseSpeed;
            particle.opacity = (Math.sin(particle.pulse) * 0.3 + 0.5) * 0.4;
            
            // Rebote en bordes
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
            }
            
            // Mantener dentro de los límites
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
        });
    }

    updateSmokeParticles() {
        this.smokeParticles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life--;
            
            // Fade out gradual
            particle.opacity = (particle.life / particle.maxLife) * 0.08;
            
            // Crecimiento gradual
            particle.size += 0.02;
            
            // Reiniciar partícula cuando muere
            if (particle.life <= 0) {
                particle.x = Math.random() * this.canvas.width;
                particle.y = Math.random() * this.canvas.height;
                particle.life = particle.maxLife;
                particle.size = Math.random() * 15 + 5;
                particle.opacity = Math.random() * 0.1 + 0.02;
            }
            
            // Rebote suave en bordes
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -0.8;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -0.8;
            }
        });
    }

    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = particle.color;
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = particle.color;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.restore();
        });
    }

    drawSmokeParticles() {
        this.smokeParticles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = '#FFFFFF';
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.restore();
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateSmokeParticles();
        this.updateParticles();
        
        this.drawSmokeParticles();
        this.drawParticles();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// Inicializar sistema de partículas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const particleSystem = new ParticleSystem();
    
    // Opcional: pausar animación cuando la pestaña no está visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (particleSystem.animationId) {
                cancelAnimationFrame(particleSystem.animationId);
            }
        } else {
            particleSystem.animate();
        }
    });
});