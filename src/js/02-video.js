import Player from '@vimeo/player';

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

try {
  const savedCurrentTime = JSON.parse(
    localStorage.getItem(VIDEOPLAYER_CURRENT_TIME)
  );

  if (savedCurrentTime) {
    player.setCurrentTime(savedCurrentTime);
  }
} catch {
  console.error('Set state error: ', error.message);
}

player.on('timeupdate', throttle(hundlerTimeUpdate, 1000));

/**
 * Зберігає поточний час відтворення Vimeo плеєра у локальне сховище
 * @param {EventCurrentTime} evt 
 */
function hundlerTimeUpdate(evt) {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, JSON.stringify(evt.seconds));
}
