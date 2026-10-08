import { ref } from "vue";

// The game's theme music. It only starts when the visitor turns it on (browsers block autoplay anyway),
// and pauses while a trailer plays.
const playing = ref(false);
let audio = null;

function ensure() {
  if (!audio) {
    audio = new Audio("/media/brand/theme.mp3");
    audio.loop = true;
    audio.volume = 0.35;
  }
  return audio;
}

export function useMusic() {
  const toggle = async () => {
    const a = ensure();
    if (playing.value) {
      a.pause();
      playing.value = false;
    } else {
      try {
        await a.play();
        playing.value = true;
      } catch {
        playing.value = false;
      }
    }
  };
  const pause = () => {
    if (audio && playing.value) {
      audio.pause();
      playing.value = false;
    }
  };
  return { playing, toggle, pause };
}
