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
          timeUp();
        },
      });

      timeline.play();
    } else if (gameState === "won") {
      timeline.pause();
    } else if (gameState === "over") {
      timeline.clear();
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
