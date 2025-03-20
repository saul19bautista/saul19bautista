particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 5, random: true },
        move: { speed: 3, direction: "none", out_mode: "out" }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } }
    }
});
