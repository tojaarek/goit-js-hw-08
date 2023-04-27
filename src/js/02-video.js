import Player from "@vimeo/player/src/player";
import throttle from "lodash.throttle";

const player = new Player('vimeo-player');

const saveTimeToLocalStorage = localStorage.setItem('videoplayer-current-time', 'time');

player.on('timeupdate', saveTimeToLocalStorage);

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime);

