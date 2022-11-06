import gsap from "gsap";
import * as React from "react";
import { useGameStore } from "../lib/gameState";
import { css } from "../styles/stitches.config";
import { withStyle } from "../styles/withStyle";

const Track = withStyle(
  "div",
  css({
    padding: "$2",
    borderRadius: "$pill",
    boxShadow: "$inner",
    height: 16,
    display: "flex",
    alignItems: "center",
    position: "relative",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))",
  }),
  { displayName: "Track" }
);

const StyledRope = withStyle(
  "div",
  css({
    position: "relative",
    borderRadius: "$pill",
    background: "linear-gradient(to right, $warning13, $warning9)",
    willChange: "width",
    width: "100%",
    height: "100%",

    "&::before": {
      // glow
      content: "''",
      zIndex: -1,
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: "5%",
      // background: "linear-gradient(to right, $warning1, $warning2)",
      boxShadow:
        "0 0 18px rgb(247 230 30 / 70%), 0 1px 8px rgb(255 38 250 / 50%)",
      // filter: "blur(8px)",
      borderRadius: "$pill",
    },
  }),
  { displayName: "StyledRope" }
);

export const Timer = React.memo(() => {
  const time = useGameStore((state) => state.time);
  const gameState = useGameStore((state) => state.state);
  const timeUp = useGameStore((state) => state.timeUp);
  const ropeRef = React.useRef<HTMLDivElement>(null);
  const timeline = React.useRef(gsap.timeline({ paused: true })).current;

  React.useEffect(() => {
    if (gameState === "playing") {
      timeline.set(ropeRef.current, { width: "100%" });
      timeline.to(ropeRef.current, {
        duration: time,
        width: 0,
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
  }, [time, gameState, timeUp, timeline]);

  return (
    <Track>
      <StyledRope ref={ropeRef} />
    </Track>
  );
});

Timer.displayName = "Timer";
