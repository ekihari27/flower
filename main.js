onload = () =>{
        document.body.classList.remove("container");
};

// main.js
document.addEventListener('DOMContentLoaded', () => {
  const showButton = document.getElementById('showButton');
  const flowers = document.querySelector('.flowers');
  const night = document.querySelector('.night');
  const content = document.getElementById('content');

  showButton.addEventListener('click', () => {
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      flowers.classList.add('hidden');
      night.classList.add('hidden');
      showButton.textContent = 'Klik lagi disini😁😁';
    } else {
      content.classList.add('hidden');
      flowers.classList.remove('hidden');
      night.classList.remove('hidden');
      showButton.textContent = 'makasihh udah mau bukaa🥰🥰';
    }
  });
});
