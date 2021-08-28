function display(n) {
          calculator.screen.value = calculator.screen.value + n;
}
document.getElementById('ac').addEventListener('click', function () {
          calculator.screen.value = "";
})