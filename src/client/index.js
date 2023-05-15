// Learn more about this file at:
// https://victorzhou.com/blog/build-an-io-game-part-1/#3-client-entrypoints
import { connect, play } from './networking';
import { startRendering, stopRendering } from './render';
// import { startCapturingInput, stopCapturingInput } from './input';
import { downloadAssets } from './assets';
import { initState } from './state';
import { setLeaderboardHidden } from './leaderboard';

// I'm using a tiny subset of Bootstrap here for convenience - there's some wasted CSS,
// but not much. In general, you should be careful using Bootstrap because it makes it
// easy to unnecessarily bloat your site.
import './css/bootstrap-reboot.css';
import './css/main.css';

const playCheckerboard = document.getElementById('play-checkerboard');
const playButton = document.getElementById('play-button');
const usernameInput = document.getElementById('username-input');

Promise.all([
  connect(),
  downloadAssets(),
]).then(() => {
  // playCheckerboard.classList.remove('hidden');
  usernameInput.focus();
  drawChessboard();
  // playButton.onclick = () => {
  //   // Play!
  //   play(usernameInput.value);
  //   playMenu.classList.add('hidden');
  //   initState();
  //   startCapturingInput();
  //   startRendering();
  //   setLeaderboardHidden(false);
  // };
}).catch(console.error);

function onGameOver() {
  stopCapturingInput();
  stopRendering();
  playCheckerboard.classList.remove('hidden');

}
