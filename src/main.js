import spotify from './Spotify';
import renderAlbuns from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('Emicida');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6nFULR21EyYSzxPUr60S3a');
const albumInfo = document.getElementById('album-info');

albums
  .then(data => renderAlbuns(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumInfo));
