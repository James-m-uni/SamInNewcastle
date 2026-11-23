const welcomeModal = document.getElementById("welcomeModal");
const relax = welcomeModal.querySelector("#relax");
const viewOther = welcomeModal.querySelector("#viewOther");
const close = welcomeModal.querySelector("#close");
/*query selector is needed as getelementbyid belongs to parent document*/
const modalContent = welcomeModal.querySelector(".modalContent");


function quickHideModal() {
    welcomeModal.style.display = "none";
}

close.addEventListener("click", function() {
    quickHideModal();
});
/*if pressing esc on keyboard*/

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        quickHideModal();
    }
});

viewOther.addEventListener("click", function() {
    window.open("https://github.com/James-m-uni");
});

relax.addEventListener("click", function() {

});