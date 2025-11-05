document.getElementById('openInvite').addEventListener('click', function() {
  const overlay = document.getElementById('overlay');
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 1000);
});