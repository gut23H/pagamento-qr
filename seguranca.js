// Bloquear clique direito
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

// Bloquear teclas de inspeção
document.addEventListener("keydown", function(e) {
    // F12
    if (e.key === "F12") e.preventDefault();

    // Ctrl+Shift+I / Ctrl+Shift+C / Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && ["I","C","J"].includes(e.key.toUpperCase())) {
        e.preventDefault();
    }

    // Ctrl+U (ver código fonte)
    if (e.ctrlKey && e.key.toUpperCase() === "U") {
        e.preventDefault();
    }

    // Ctrl+S (salvar página)
    if (e.ctrlKey && e.key.toUpperCase() === "S") {
        e.preventDefault();
    }
});

// Detectar DevTools aberto (anti-inspecionar)
(function() {
    const threshold = 160;
    setInterval(function() {
        let widthDiff = window.outerWidth - window.innerWidth;
        let heightDiff = window.outerHeight - window.innerHeight;

        if (widthDiff > threshold || heightDiff > threshold) {
            document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px;font-family:Arial'>🔒 Área protegida</h2>";
        }
    }, 500);
})();
