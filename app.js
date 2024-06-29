const openLinks = document.querySelector(".showLinks");
const allLinks = document.querySelector(".navLinks");
const closeButton = document.querySelector(".hideLinks");



openLinks.addEventListener("click", function() {
    allLinks.classList.toggle("active");
    });

    closeButton.addEventListener("click", function() {
        allLinks.classList.remove("active");
        });
