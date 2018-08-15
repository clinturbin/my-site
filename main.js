var expandCollapseArrows = document.querySelectorAll(".section-arrow");

expandCollapseArrows.forEach(function (arrow) {
    arrow.addEventListener("click", function () {
        this.classList.toggle("expand-button");
        this.classList.toggle("collapse-button");
        this.parentNode.nextElementSibling.classList.toggle("hide");
        this.parentNode.nextElementSibling.classList.toggle("show");
    })
})