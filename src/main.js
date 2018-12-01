import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';
import spotify from './Spotify';
import searchEnterTrigger from './SpotifyTrigger';

const album = spotify.album.getAlbum('6nFULR21EyYSzxPUr60S3a');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-musics');

searchEnterTrigger();

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
