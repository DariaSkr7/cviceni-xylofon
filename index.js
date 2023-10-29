console.log('Funguju');

const header = document.querySelector('h1');

const kameny = document.querySelectorAll('.kamen');
kameny.forEach((kamen) => {
  kamen.addEventListener('click', () => {
    header.textContent = kamen.textContent;
    const zvuk = new Audio(`tony/${kamen.textContent}.mp3`);
    zvuk.play();
  });
});

document.addEventListener('keydown', (event) => {
  if (event.code.includes('Digit')) {
    const cislo = Number(event.code.slice(5));
    const zvuk = new Audio(`tony/${kameny[cislo].textContent}.mp3`);
    zvuk.play();
  }
});
