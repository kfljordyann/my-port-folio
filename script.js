// Changement d'apparence de la navbar au scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        navbar.style.padding = "0.8rem 5%";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.padding = "1rem 5%";
    }
});

// Animation simple pour l'entrée des cartes
const cards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});







// === Configuration (modifie ici si besoin) ..................................................===
const PHONE = "+229 01 567 351 83"; // numéro affiché et copiable
const EMAIL = "malyselkfl@gmail.com"; // email affiché et copiable
// Helper: copy text content of a selector to clipboard and show a small toast
function copyText(selector) {
    const el = document.querySelector(selector);
    if (!el) return;
    const text = el.textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copié: $ {
                    text
                }
                `);
    }, (err) => {
        showToast("Impossible de copier");
        console.error(err);
    });
}

// Open phone dialer on click
function openTel() {
    window.location.href = `tel:$ {
                PHONE.replace(/\\s+/g, '')
            }
            `;
}

// Open default mail client
function openMail() {
    window.location.href = `mailto:$ {
                EMAIL
            }
                `;
}

// Simple toast notification
function showToast(msg) {
    if (document.getElementById('site-toast')) {
        clearTimeout(window._toastTimer);
        document.getElementById('site-toast').remove();
    }
    const t = document.createElement('div');
    t.id = 'site-toast';
    t.textContent = msg;
    Object.assign(t.style, {
        position: 'fixed',
        right: '18px',
        bottom: '18px',
        padding: '10px 14px',
        background: 'rgba(10,12,20,0.9)',
        color: '#fff',
        borderRadius: '10px',
        border: '1px solid rgba(255,255,255,0.03)',
        boxShadow: '0 6px 22px rgba(0,0,0,0.5)',
        zIndex: 9999,
        fontSize: '13px'
    });
    document.body.appendChild(t);
    window._toastTimer = setTimeout(() => {
        t.remove();
    }, 2200);
}

// Initialize dynamic values on the page
(function init() {
        const phoneEl = document.getElementById('phoneText');
        const emailEl = document.getElementById('emailText');
        if (phoneEl) phoneEl.textContent = PHONE;
        if (emailEl) emailEl.textContent = EMAIL;
        // allow click on social links to open in new tab via keyboard
        document.querySelectorAll('.social-link').forEach(a => {
            a.addEventListener('keydown', e => {
                if (e.key === 'Enter') a.click();
            });
        });
    }

)();