import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// player.on('play', function() {
//   console.log('played the video!');
// });

const localStorageKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(event => {
  localStorage.setItem(localStorageKey, event.seconds);
}, 1000));


const savedTime = localStorage.getItem(localStorageKey);
if (savedTime) {
  player.setCurrentTime(savedTime);
}


