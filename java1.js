function butterfly() {
  for (let i = 0; i < 50; i++) {
    let butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.textContent = '💋';
    butterfly.style.animationDelay = i * 0.1 + 's';
    butterfly.style.top = Math.random() * 100 + '%';
    butterfly.style.left = Math.random() * 100 + '%';
    document.querySelector('.butterflies').appendChild(butterfly);
  }
}