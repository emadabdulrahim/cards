import * as React from "react";
import { Tween } from "react-gsap";
import { useGameStore } from "../lib/gameState";
import { withStyle, css } from "../styles/stitches.config";
import { StyledButton } from "./Button";
import { Heading } from "./Heading";
import { Stack } from "./Stack";
import { Text } from "./Text";

const Overlay = withStyle(
  "div",
  css({
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
    display: "flex",
    visibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
    padding: "$gutter",
  }),
  { displayName: "Overlay" }
);

const Dialog = withStyle(
  "div",
  css({
    gradientBottomRight: "$primary9, $primary8",
    borderRadius: "$lg",
    padding: "$32",
    transform: "translateY(-60px)",
    visibility: "hidden",
    maxWidth: 500,
    width: "100%",
    textAlign: "center",
  })
);

export const LevelOverlay = React.memo(() => {
  const level = useGameStore((store) => store.level);
  const advanceToNextLevel = useGameStore((store) => store.advanceToNextLevel);

  return (
    <Tween to={{ autoAlpha: 1 }} duration={0.25}>
      <Overlay className={"level-overlay"}>
        <Tween
          to={{
            autoAlpha: 1,
            y: 0,
            delay: 0.15,
          }}
          duration={0.6}
          ease="expo.out"
        >
          <Dialog className={"level-dialog"}>
            <Stack.V spacing="lg1" align="center">
              <Stack.V>
                <Heading size="md2">Well done!</Heading>
                <Text size="sm3">You’ve completed level {level}.</Text>
              </Stack.V>
              <StyledButton
                appearance={"primary"}
                size="normal"
                onClick={advanceToNextLevel}
              >
                <span>continue</span>
              </StyledButton>
            </Stack.V>
          </Dialog>
        </Tween>
      </Overlay>
    </Tween>
  );
});

LevelOverlay.displayName = "LevelOverlay";
