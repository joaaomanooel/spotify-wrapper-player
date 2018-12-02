const albumTracks = document.getElementById('album-musics');
let audioObject = null;
const ACTIVE = 'active';
export default function playlistTrigger() {
  albumTracks.addEventListener('click', (e) => {
    const target = e.target.parentNode;
    if (target.classList.contains(ACTIVE)) {
      audioObject.pause();
      return;
    }
    if (audioObject) {
      audioObject.pause();
    }
    audioObject = new Audio(target.getAttribute('data-track-preview'));
    audioObject.play();
    target.classList.add(ACTIVE);
    audioObject.addEventListener('pause', () => {
      target.classList.remove(ACTIVE);
    });
  });
}
