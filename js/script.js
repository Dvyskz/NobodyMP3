document.getElementById("play-btn").addEventListener("click", function() {
    let audio = document.getElementById("audio");
    let icono = document.getElementById("icono");

    if (audio.paused) {
        audio.play();
        this.textContent = "⏸ Pause";
        icono.style.animation = "rotate 2s linear infinite";
    } else {
        audio.pause();
        this.textContent = "▶ Play";
        icono.style.animation = "none";
    }
});

// Efecto de rotación cuando la canción está en reproducción
document.head.insertAdjacentHTML(
    "beforeend",
    `<style>
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>`
);
