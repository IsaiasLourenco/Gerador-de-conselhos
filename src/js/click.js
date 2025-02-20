document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".container .click");

    button.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});