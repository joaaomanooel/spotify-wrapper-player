import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify', () => {
  it('Should be an object', () => expect(spotify).to.be.an('object'));
  it('Should have search method', () => expect(spotify.search).to.be.exist);
});
