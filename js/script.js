document.addEventListener("DOMContentLoaded", function () {
    const projects = {
        multihimnario: ["img/Himnario.jpg", "img/Himnario2.jpg", "img/Himnario3.jpg"],
        utecgo: ["img/UTEC_GO.jpg", "img/UTEC_GO2.jpg", "img/UTEC_GO3.jpg", "img/UTEC_GO4.jpg", "img/UTEC_GO5.jpg", "img/UTEC_GO6.jpg", "img/UTEC_GO7.jpg"],
        chaveznet: ["img/Net.jpg", "img/Net1.jpg", "img/Net2.jpg", "img/Net3.jpg", "img/Net4.jpg", "img/Net5.jpg"],
        suffixtree: ["img/Paper.jpg", "img/Paper1.jpg", "img/Paper2.jpg", "img/Paper3.jpg", "img/Paper4.jpg"]
    };

    const modal = document.getElementById("imageModal");
    const gallery = document.getElementById("imageGallery");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll(".project").forEach((project) => {
        const projectId = project.getAttribute("data-id");
        let imgIndex = 0;
        const imgElement = project.querySelector(".project-image");
        const prevBtn = project.querySelector(".prev-btn");
        const nextBtn = project.querySelector(".next-btn");

        // Cambiar imágenes dentro de la tarjeta
        function updateImage() {
            imgElement.src = projects[projectId][imgIndex];
        }

        prevBtn.addEventListener("click", function () {
            imgIndex = (imgIndex - 1 + projects[projectId].length) % projects[projectId].length;
            updateImage();
        });

        nextBtn.addEventListener("click", function () {
            imgIndex = (imgIndex + 1) % projects[projectId].length;
            updateImage();
        });

        updateImage(); // Inicializa con la primera imagen

        // Abrir modal con todas las imágenes
        project.addEventListener("click", function () {
            gallery.innerHTML = ""; // Limpia las imágenes anteriores

            projects[projectId].forEach((imageSrc) => {
                const img = document.createElement("img");
                img.src = imageSrc;
                img.classList.add("gallery-image");
                gallery.appendChild(img);
            });

            modal.style.display = "block"; // Muestra el modal
        });
    });

    // Cerrar el modal al hacer clic en la "X"
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
