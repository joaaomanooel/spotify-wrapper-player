import { expect } from 'chai';
import 'jsdom-global/register';
import renderAlbumTracks from '../src/AlbumTracks';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('Album Tracks', () => {
  const data = [{
    duration_ms: 353613,
    explicit: false,
    external_urls: {
      spotify: 'https://open.spotify.com/track/4dnY5nVBGk2qkjmZWS9rgD',
    },
    href: 'https://api.spotify.com/v1/tracks/4dnY5nVBGk2qkjmZWS9rgD',
    id: '4dnY5nVBGk2qkjmZWS9rgD',
    is_local: false,
    name: 'Bang - Ao Vivo',
    preview_url: 'https://p.scdn.co/mp3-preview/01904d9bc49f3e45aa6ec7105addfec2fdda5d19?cid=774b29d4f13844c495f206cafdad9c86',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4dnY5nVBGk2qkjmZWS9rgD',
  }];

  const data2 = [{
    disc_number: 1,
    duration_ms: 353613,
    explicit: false,
    external_urls: {
      spotify: 'https://open.spotify.com/track/4dnY5nVBGk2qkjmZWS9rgD',
    },
    href: 'https://api.spotify.com/v1/tracks/4dnY5nVBGk2qkjmZWS9rgD',
    id: '4dnY5nVBGk2qkjmZWS9rgD',
    is_local: false,
    name: 'Bang - Ao Vivo',
    preview_url: 'https://p.scdn.co/mp3-preview/01904d9bc49f3e45aa6ec7105addfec2fdda5d19?cid=774b29d4f13844c495f206cafdad9c86',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:4dnY5nVBGk2qkjmZWS9rgD',
  }, {
    disc_number: 1,
    duration_ms: 205200,
    explicit: false,
    external_urls: {
      spotify: 'https://open.spotify.com/track/5H3g4QdufKxNZcdqrWR1LF',
    },
    href: 'https://api.spotify.com/v1/tracks/5H3g4QdufKxNZcdqrWR1LF',
    id: '5H3g4QdufKxNZcdqrWR1LF',
    is_local: false,
    name: 'Gueto / Os Mlk é Liso - Ao Vivo',
    preview_url: 'https://p.scdn.co/mp3-preview/22d6890d6743e5dec9758b168141b79cedff2a46?cid=774b29d4f13844c495f206cafdad9c86',
    track_number: 2,
    type: 'track',
    uri: 'spotify:track:5H3g4QdufKxNZcdqrWR1LF',
  }];

  const markup = `
    <div class="music" data-track-preview="${data[0].preview_url}">
      <p class="music-number">${data[0].track_number}</p>
      <p class="music-title">${data[0].name}</p>
      <p class="music-duration">${convertToHumanTime(data[0].duration_ms)}</p>
    </div>`;
  const markup2 = `
    <div class="music" data-track-preview="${data2[0].preview_url}">
      <p class="music-number">${data2[0].track_number}</p>
      <p class="music-title">${data2[0].name}</p>
      <p class="music-duration">${convertToHumanTime(data2[0].duration_ms)}</p>
    </div>
    <div class="music" data-track-preview="${data2[1].preview_url}">
      <p class="music-number">${data2[1].track_number}</p>
      <p class="music-title">${data2[1].name}</p>
      <p class="music-duration">${convertToHumanTime(data2[1].duration_ms)}</p>
    </div>`;

  it('Shouls create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });
  it('Shouls create and append the markup when more than 1 item', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data2, element);
    expect(element.innerHTML).to.be.eql(markup2);
  });
});
