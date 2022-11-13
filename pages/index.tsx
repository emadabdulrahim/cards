import { motion } from "framer-motion";
import * as React from "react";
import { Box } from "../components/Box";
import { StyledButton } from "../components/Button";
import { GameCard } from "../components/GameCard";
import { Heading } from "../components/Heading";
import { LevelOverlay } from "../components/LevelOverlay";
import { Stack } from "../components/Stack";
import { Timer } from "../components/Timer";
import { WelcomeScreen } from "../components/WelcomeScreen";
import { useGameStore } from "../lib/gameState";
import { css, withStyle } from "../styles/stitches.config";

const Container = withStyle(
  "section",
  css({
    maxWidth: "1100px",
    width: "100%",
    margin: "0 auto",

    variants: {
      size: {
        normal: {
          maxWidth: "900px",
        },
      },
    },
  })
);

const MotionStackV = motion(Stack.V);

export default function Index() {
  const store = useGameStore((state) => state);

  React.useEffect(() => {
    const unSubLog = useGameStore.subscribe((state, prevState) => {
      console.log("prevState:  ", prevState);
      console.log("state:  ", state);
    });

    return () => {
      unSubLog();
    };
  });

  return (
    <>
      {store.state === "idle" ? (
        <WelcomeScreen />
      ) : (
        <Stack.V align="center" css={{ padding: "$32" }} spacing="md3">
          <Container css={{ textAlign: "center" }}>
            <Heading size="md2">Level: {store.level}</Heading>
          </Container>
          <Container size="normal">
            <Timer />
          </Container>
          {store.state === "won" && (
            <Stack.V>
              <Heading size="lg1" css={{ color: "$warning10" }}>
                You Won!
              </Heading>
              <button
                onClick={() => {
                  store.play();
                }}
              >
                Play Again
              </button>
            </Stack.V>
          )}
          {store.state === "over" && (
            <Box
              css={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",

                width: "100%",
                height: "100%",
                maxWidth: 400,
                maxHeight: 400,
                zIndex: 1,
              }}
            >
              <MotionStackV
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 24,
                }}
                spacing="lg1"
                css={{
                  isolation: "isolate",
                  height: "100%",
                  width: "100%",
                  gradientBottomRight: "$primary10, $primary9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "$lg",
                  border: "2px solid $colors$primary7",
                }}
              >
                <Stack.V
                  align="center"
                  spacing="none"
                  css={{ textAlign: "center" }}
                >
                  <Heading size="sm1" css={{ marginLeft: "auto" }}>
                    time up
                  </Heading>
                  <Heading size="md2">Game Over</Heading>
                </Stack.V>
                <StyledButton
                  appearance={"primary"}
                  size="normal"
                  onClick={() => {
                    store.play();
                  }}
                >
                  <span>play again</span>
                </StyledButton>
              </MotionStackV>
            </Box>
          )}
          <Container>
            <Stack.H spacing="md3" justify={"center"}>
              {store.cardsInPlay.map((card) => {
                return (
                  <GameCard
                    key={card.id}
                    card={card}
                    cardBackUrl={`/images/card-design/design-1.jpg`}
                    isFlipped={store.isFlipped(card)}
                    onCardClick={store.onCardTurn}
                    isMatched={store.isMatched(card)}
                  />
                );
              })}
            </Stack.H>
          </Container>
          {store.state === "level-complete" && <LevelOverlay />}
          {/* {store.state === "idle" && (
        <Box
          css={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack.V
            css={{
              padding: "$lg4",
              borderRadius: "$lg",
              background: "$bgPrimary",
              boxShadow: "$lgOutlined",
            }}
          >
            <Heading>Magic Card Matching</Heading>
            <Stack.H>
              {(["easy", "medium", "hard"] as Difficulty[]).map((diff) => {
                return (
                  <label key={diff}>
                    {diff}
                    <input
                      type="radio"
                      name="difficulty"
                      value={diff}
                      checked={difficulty === diff}
                      onChange={(e) => {
                        setDifficulty(e.target.value as Difficulty);
                      }}
                    />
                  </label>
                );
              })}
            </Stack.H>
            <button
              onClick={() => {
                store.play(difficulty);
              }}
            >
              Play
            </button>
          </Stack.V>
        </Box>
      )} */}
        </Stack.V>
      )}
    </>
  );
}
