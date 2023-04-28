import Player from '@vimeo/player/src/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on(
  'timeupdate',
  throttle(time => {
    localStorage.setItem('videoplayer-current-time', time.seconds);
  }),
  1000
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
