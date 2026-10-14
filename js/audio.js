/**
 * 221B Baker Street - Web Audio Synthesizer Engine
 * Pure Web Audio API: 100% offline, zero external audio asset dependencies.
 */

class VictorianAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.initialized = true;
      }
    } catch (e) {
      console.warn("Web Audio API not supported:", e);
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  ensureContext() {
    if (!this.initialized) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Typewriter key click (metallic click + noise burst)
  playTypewriter() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    
    // High-pitched metal click
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800 + Math.random() * 300, t);
    osc.frequency.exponentialRampToValueAtTime(120, t + 0.04);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.05);

    // Mechanical noise burst
    const bufferSize = this.ctx.sampleRate * 0.03;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.15;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.15, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

    noise.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    noise.start(t);
  }

  // Paper dossier shuffle
  playPaperShuffle() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.15;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, t);
    filter.Q.setValueAtTime(1.5, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(t);
  }

  // Magnifying Loupe Chime (Glass optical shimmer)
  playLoupe() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    [1046.5, 1318.5, 1567.98].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.04);

      gain.gain.setValueAtTime(0.15, t + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.04 + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + idx * 0.04);
      osc.stop(t + idx * 0.04 + 0.45);
    });
  }

  // Watson's consultation (warm cello/brass cadence)
  playWatson() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const notes = [220, 277.18, 329.63]; // A3, C#4, E4 (Warm A major)
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t + idx * 0.06);

      gain.gain.setValueAtTime(0.12, t + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.06 + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + idx * 0.06);
      osc.stop(t + idx * 0.06 + 0.55);
    });
  }

  // Chemical Reagent Bubbling
  playReagent() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    for (let i = 0; i < 5; i++) {
      const startTime = t + i * 0.07;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300 + Math.random() * 200, startTime);
      osc.frequency.exponentialRampToValueAtTime(650 + Math.random() * 300, startTime + 0.05);

      gain.gain.setValueAtTime(0.14, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.07);
    }
  }

  // Correct Deduction (Victorian triumphant violin chord)
  playCorrect() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const chord = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
    chord.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, t + idx * 0.05);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, t);

      gain.gain.setValueAtTime(0.08, t + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.05 + 0.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + idx * 0.05);
      osc.stop(t + idx * 0.05 + 0.85);
    });
  }

  // Flawed Deduction (Dark minor violin sting)
  playIncorrect() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const dissonant = [311.13, 293.66, 220]; // Eb4, D4, A3
    dissonant.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, t + idx * 0.04);
      osc.frequency.linearRampToValueAtTime(freq * 0.85, t + idx * 0.04 + 0.5);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, t);

      gain.gain.setValueAtTime(0.12, t + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.04 + 0.6);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + idx * 0.04);
      osc.stop(t + idx * 0.04 + 0.65);
    });
  }

  // Wax Seal Stamp Thud (Deep resonant impact)
  playStamp() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.18);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.22);
  }

  // Grand Fanfare on Case Solved / Level Complete
  playLevelComplete() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const notes = [
      { f: 523.25, time: 0 },    // C5
      { f: 659.25, time: 0.12 }, // E5
      { f: 783.99, time: 0.24 }, // G5
      { f: 1046.50, time: 0.38 } // C6
    ];

    notes.forEach(n => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, t + n.time);

      gain.gain.setValueAtTime(0.18, t + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, t + n.time + 0.7);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + n.time);
      osc.stop(t + n.time + 0.75);
    });

    setTimeout(() => this.playStamp(), 450);
  }
}

const audioFX = new VictorianAudioEngine();
