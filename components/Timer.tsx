import gsap from "gsap";
import * as React from "react";
import { useGameStore } from "../lib/gameState";
import { Track, StyledRope } from "./Timer.styles";

export const Timer = React.memo(() => {
  const time = useGameStore((state) => state.time);
  const gameState = useGameStore((state) => state.state);
  const timeUp = useGameStore((state) => state.timeUp);
  const ropeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timeline = gsap.timeline({ paused: true });

    if (gameState === "playing") {
      timeline.clear();
      timeline.set(ropeRef.current, { width: "100%" });
      timeline.to(ropeRef.current, {
        duration: time,
        width: "0%",
        delay: 0.25,
        ease: "linear",
        onComplete: () => {
          // shake screen keyframes
          timeline.to("#__next", {
            duration: 0.4,
            keyframes: {
              x: [5, -8, 7, -6, 0],
              y: [3, -7, -4, 3, 0],
            },

            ease: "linear",
            onComplete: () => {
              timeUp();
            },
          });
        },
      });

      timeline.play();
    } else if (gameState === "won") {
      timeline.pause();
    }

    return () => {
      timeline.kill();
    };
  }, [time, gameState, timeUp]);

  return (
    <Track>
      <StyledRope ref={ropeRef} />
    </Track>
  );
});

Timer.displayName = "Timer";
