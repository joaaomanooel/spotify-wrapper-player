import spotify from './Spotify';
import renderAlbuns from './AlbumList';

const albums = spotify.search.albums('Incubus');
const albumList = document.getElementById('album-list');

albums
  .then(data => renderAlbuns(data.albums.items, albumList));
