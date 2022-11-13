import gsap from "gsap";

export class Animation {
  timeline = gsap.timeline();

  constructor() {
    this.timeline.pause();
  }

  levelComplete = (level: number, callback: () => void) => {
    this.timeline.clear();
    this.timeline.to("#game-level", {
      duration: 1,
      onComplete: callback,
    });
    this.timeline.play();
  };
}

export const animationsInstance = new Animation();
