const slider = document.querySelector(".slider");
const rangeInput = document.querySelector('input[type="range"]');

rangeInput.addEventListener("input", function () {
  slider.style.setProperty(
    "--value",
    (this.value - this.min) / (this.max - this.min)
  );
});
function sub() {
  alert("You started the trial");
}
