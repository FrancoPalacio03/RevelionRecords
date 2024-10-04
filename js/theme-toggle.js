document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
});

// Cambia los estilos para el tema claro
const lightStyles = `
    body.light-theme {
        background-color: #ffffff;
        color: #000000;
    }
    body.light-theme .navbar {
        background-color: #f8f9fa;
    }
    body.light-theme .nav-link {
        color: #000000;
    }
    body.light-theme .btn-outline-light {
        color: #000000;
        border-color: #000000;
    }
`;

// Añadir los estilos para el tema claro
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = lightStyles;
document.head.appendChild(styleSheet);
