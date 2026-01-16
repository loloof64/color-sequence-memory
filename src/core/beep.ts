import { sleepForTimeMs } from "./utils";

async function beep(frequency = 440, duration = 200) {
  const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
  const ctx = new AudioCtx();
  const oscillator = ctx.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  oscillator.connect(ctx.destination);
  oscillator.start();

  await sleepForTimeMs(duration);

  oscillator.stop();
  ctx.close();
}

export default beep;
