import Image from "next/image";
import { useGameStore } from "../lib/gameState";
import { Box } from "./Box";
import { StyledButton } from "./Button";
import { Heading } from "./Heading";
import { Stack } from "./Stack";

export const WelcomeScreen = () => {
  const play = useGameStore((state) => state.play);
  return (
    <Stack.V
      css={{ height: "100vh", width: "100%" }}
      align="center"
      justify={"center"}
    >
      <Stack.V
        css={{ maxWidth: 350, marginTop: "-10%" }}
        align="center"
        spacing="lg2"
      >
        <Stack.V spacing="md1" align="center">
          <Box
            css={{
              width: 100,
              height: 100,
              position: "relative",
              borderRadius: "$xl",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/card-quest-logo.jpg"
              fill
              alt="Card Quest Logo"
            ></Image>
          </Box>
          <Stack.V spacing="sm2" align="center">
            <Heading
              size="xl"
              css={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #FFC266 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Card Quest
            </Heading>
            <Heading size="lg2" css={{ color: "#FFEED4" }}>
              A magical card-matching game.
            </Heading>
          </Stack.V>
        </Stack.V>
        <StyledButton
          size="large"
          appearance={"primary"}
          css={{ maxWidth: 280, width: "100%" }}
          onClick={() => {
            play("medium");
          }}
        >
          Play
        </StyledButton>
      </Stack.V>
    </Stack.V>
  );
};
