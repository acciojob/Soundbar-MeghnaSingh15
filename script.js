document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const sound = button.getAttribute('data-sound');
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  });
});
