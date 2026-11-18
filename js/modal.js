const welcomeModal = document.getElementById("welcomeModal");
const relax = welcomeModal.querySelector("#relax");
const viewOther = welcomeModal.querySelector("#viewOther");
const close = welcomeModal.querySelector("#close");
/*query selector is needed as getelementbyid belongs to parent document*/


close.addEventListener("click", function() {
    welcomeModal.style.display = "none";
});

viewOther.addEventListener("click", function() {
    window.open("https://github.com/James-m-uni")
})

relax.addEventListener("click", function() {

})