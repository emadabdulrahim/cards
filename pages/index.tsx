import * as React from "react";
import { Box } from "../components/Box";
import { GameCard } from "../components/GameCard";
import { Heading } from "../components/Heading";
import { Stack } from "../components/Stack";
import { Difficulty, useGameStore } from "../lib/gameState";
import { css, withStyle } from "../styles/stitches.config";

const Grid = withStyle(
  "div",
  css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridTemplateRows: "400px",
    gap: "10%",
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
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        padding: 32,
        position: "relative",
      }}
      align="center"
    >
      <Heading size="md2" css={{ margin: 0 }}>
        Demo
      </Heading>
      {store.state === "won" && (
        <Heading size="md4" css={{ color: "$warning10" }}>
          You Won!
        </Heading>
      )}
      <Box
        css={{
          position: "relative",
          margin: "0 auto",
          width: "65%",
        }}
      >
        <Box
          css={{
            position: "relative",
            margin: "0 auto",
            width: "100%",
            borderRadius: 20,
            overflow: "hidden",

            "> img": {
              display: "block",
              width: "100%",
            },
          }}
        >
          <img src="/images/board.jpg" alt="board" />
        </Box>
        <Stack.H
          spacing="md1"
          justify={"center"}
          css={{
            position: "absolute",
            inset: "10%",
            "> *": {
              $$width: "15%",
              flex: "0 1 $$width",
              height: `calc($$width * 1.45)`,
            },
          }}
        >
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
      </Box>
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
