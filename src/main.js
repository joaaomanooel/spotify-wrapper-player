import renderAlbumInfo from './AlbumInfo';
import renderAlbuns from './AlbumList';
import renderAlbumTracks from './AlbumTracks';
import spotify from './Spotify';

const albums = spotify.search.albums('Emicida');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6nFULR21EyYSzxPUr60S3a');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-musics');
albums
  .then(data => renderAlbuns(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
