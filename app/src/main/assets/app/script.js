var sayac = 0;
document.getElementById('btn').addEventListener('click', function () {
  sayac++;
  this.textContent = 'Sayaç: ' + sayac;
});