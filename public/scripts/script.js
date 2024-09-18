document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message Sent!');
  });
const project1 = document.getElementById('one');
const project2 = document.getElementById('two');
const project3 = document.getElementById('three');

project1.addEventListener('click', () => {
    window.open('https://github.com/TheGoodCoder12/FlyMusica.git', '_blank');
});
project2.addEventListener('click', () => {
    window.open('https://github.com/TheGoodCoder12/The-Mind-Map.git', '_blank');
});
project3.addEventListener('click', () => {
    window.open('https://github.com/TheGoodCoder12/TryDrobe.git', '_blank');
});