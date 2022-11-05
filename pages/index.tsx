import * as React from "react";
import { Box } from "../components/Box";
import { GameCard } from "../components/GameCard";
import { Heading } from "../components/Heading";
import { Stack } from "../components/Stack";
import { Difficulty, useGameStore } from "../lib/gameState";
import { css, withStyle } from "../styles/stitches.config";

const Container = withStyle(
  "section",
  css({
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    padding: "$32",
  })
);

export default function Index() {
  const store = useGameStore((state) => state);
  const [difficulty, setDifficulty] = React.useState<Difficulty>("easy");

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
    <Stack.V
      align="center"
      css={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container css={{ textAlign: "center" }}>
        <Heading size="md2">Demo</Heading>
      </Container>
      {store.state === "won" && (
        <Heading size="md4" css={{ color: "$warning10" }}>
          You Won!
        </Heading>
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
      {store.state === "idle" && (
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
      )}
    </Stack.V>
  );
}
