const showMoreBtn = document.getElementById("showMoreBtn");
const extraWorks = document.querySelectorAll(".extra-work");

showMoreBtn.addEventListener("click", () => {

    const showing = extraWorks[0].classList.contains("show");

    extraWorks.forEach(work => {
        work.classList.toggle("show");
    });

    if (showing) {
        showMoreBtn.textContent = "Mostrar más trabajos";
    } else {
        showMoreBtn.textContent = "Mostrar menos";
    }

});
