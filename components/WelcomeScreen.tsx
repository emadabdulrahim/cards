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
        css={{
          maxWidth: 450,
          transform: "translateY(-10%)",
          padding: "$gutter",
        }}
        align="center"
        spacing="lg2"
      >
        <Stack.V spacing="md2" align="center">
          <Box
            css={{
              width: 88,
              height: 88,
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
          <Stack.V spacing="sm3" align="center">
            <Heading
              size="lg1"
              css={{
                background: "$gradientPrimary",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              asChild
            >
              <h1>Card Quest</h1>
            </Heading>
            <Heading size="md1" color="normal">
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
          <span>play</span>
        </StyledButton>
      </Stack.V>
    </Stack.V>
  );
};
