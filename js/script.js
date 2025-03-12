document.addEventListener("DOMContentLoaded", function () {
    const projects = {
        multihimnario: ["img/Himnario.jpg", "img/Himnario2.jpg", "img/Himnario3.jpg"],
        utecgo: ["img/UTEC GO.jpg", "img/UTEC GO2.jpg","img/UTEC GO3.jpg", "img/UTEC GO4.jpg","img/UTEC GO5.jpg", "img/UTEC GO6.jpg","img/UTEC GO7.jpg"],
        chaveznet: ["img/Net.jpg", "img/Net1.jpg","img/Net2.jpg","img/Net3.jpg","img/Net4.jpg","img/Net5.jpg"],
        suffixtree: ["img/Paper.jpg", "img/Paper1.jpg","img/Paper2.jpg","img/Paper3.jpg","img/Paper4.jpg"]
    };

    document.querySelectorAll(".project").forEach((project) => {
        const projectId = project.getAttribute("data-id");
        if (!projects[projectId] || projects[projectId].length === 0) return; // Evita errores si no hay imágenes

        let imgIndex = 0;
        const imgElement = project.querySelector(".project-image");
        const prevBtn = project.querySelector(".prev-btn");
        const nextBtn = project.querySelector(".next-btn");

        function updateImage() {
            imgElement.style.opacity = "0"; // Agrega animación de cambio
            setTimeout(() => {
                imgElement.src = projects[projectId][imgIndex];
                imgElement.style.opacity = "1";
            }, 150); // Pequeño delay para transición
        }

        prevBtn.addEventListener("click", function () {
            imgIndex = (imgIndex - 1 + projects[projectId].length) % projects[projectId].length;
            updateImage();
        });

        nextBtn.addEventListener("click", function () {
            imgIndex = (imgIndex + 1) % projects[projectId].length;
            updateImage();
        });

        // Pre-cargar imágenes para mejorar experiencia
        projects[projectId].forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        updateImage(); // Inicializa con la primera imagen
    });
});
