import * as React from "react";
import { css, withStyle } from "../styles/stitches.config";
import { Card, useGameStore } from "../lib/gameState";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";

interface GameCardProps extends React.HTMLAttributes<HTMLDivElement> {
  cardBackUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
  onCardClick: (card: Card) => void;
  card: Card;
}

const CardTilt = withStyle(
  Tilt,
  css({
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
  }),
  { displayName: "CardTilt" }
);

const CardContainer = withStyle(
  "div",
  css({
    perspective: 1200,
    flex: "0 1 clamp(40px, 20vw, 150px)",
    aspectRatio: "1/1.45",
  }),
  { displayName: "CardContainer" }
);

const StyledCard = withStyle(
  "div",
  css({
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    willChange: "transform",
    cursor: "pointer",
  }),
  { displayName: "StyledCard" }
);

const StyledBGImage = withStyle(
  "div",
  css({
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    filter: "drop-shadow(0 3px 5px rgba(0, 0, 0, 0.4))",
    borderRadius: "8%",

    variants: {
      size: {
        contain: {
          backgroundSize: "contain",
        },
        cover: {
          backgroundSize: "cover",
        },
      },
      flipped: {
        true: {
          transform: "rotateY(180deg)",
        },
      },
    },
  })
);

const CardFront = withStyle(
  StyledBGImage,
  css({
    backgroundSize: "149%",
    border: "2px double rgba(0, 0, 0, 0.2)",
    boxShadow:
      "rgb(0 0 0 / 40%) 0px 2px 8px inset, rgb(50 39 24 / 60%) 0px 0px 1px 3px",
  }),
  { displayName: "CardFront" }
);

type Tween = (tween: gsap.TweenVars) => gsap.core.Tween;

type Noop = () => void;

const getAnimation = (el: HTMLElement) => (tween: gsap.TweenVars) => {
  return gsap.to(el, tween);
};

export const GameCard = React.memo(
  ({ card, cardBackUrl, isMatched, isFlipped, onCardClick }: GameCardProps) => {
    const gameState = useGameStore((state) => state.state);
    const isMatchedRef = React.useRef(isMatched);
    const animateCard = React.useRef<Tween | Noop>(() => {});
    const ref = React.useCallback((node: HTMLDivElement) => {
      if (!node) return;
      animateCard.current = getAnimation(node);
    }, []);
    const isNotPlaying = gameState !== "playing";

    React.useEffect(() => {
      if (!isFlipped) {
        animateCard.current({
          duration: 0.5,
          rotationY: 0,
          ease: "power3.inOut",
        });
      }
    }, [isFlipped, animateCard]);

    React.useEffect(() => {
      if (!isMatchedRef.current && isMatched) {
        animateCard.current({
          keyframes: {
            scale: [1, 1.1, 1],
            rotationZ: [-5, 10, -8, 5, 0],
          },
          duration: 0.5,
        });
      }
      isMatchedRef.current = isMatched;
    }, [isMatched, animateCard]);

    return (
      <CardContainer>
        <StyledCard
          ref={ref}
          onClick={() => {
            if (isNotPlaying) return;
            animateCard.current({
              duration: 0.4,
              rotationY: -180,
              ease: "elastic.out(0.1, 0.6)",
              onComplete: () => {
                onCardClick(card);
              },
            });
          }}
        >
          <CardTilt
            tiltEnable={!isFlipped && !isNotPlaying}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={false}
            transitionEasing={"cubic-bezier(0.16, 1, 0.3, 1)"}
            transitionSpeed={300}
            scale={isNotPlaying ? 1 : 1.05}
          >
            <StyledBGImage
              size="contain"
              css={{
                overflow: "hidden",
                backgroundImage: `url('${cardBackUrl}')`,
              }}
            ></StyledBGImage>
          </CardTilt>
          <CardFront
            flipped
            css={{
              backgroundImage: `url('images/card-set/${card.image}')`,
            }}
          ></CardFront>
          {isMatched && (
            <StyledBGImage
              size="cover"
              flipped
              css={{
                backgroundImage: `url('/images/sparkles.webp')`,
                mixBlendMode: "color-dodge",
                opacity: 0.75,
              }}
            />
          )}
        </StyledCard>
      </CardContainer>
    );
  }
);

GameCard.displayName = "GameCard";
