import * as React from "react";
import { Card, useGameStore } from "../lib/gameState";
import gsap from "gsap";
import {
  CardContainer,
  StyledCard,
  CardTilt,
  StyledBGImage,
  CardFront,
} from "./GameCard.styles";

interface GameCardProps extends React.HTMLAttributes<HTMLDivElement> {
  cardBackUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
  onCardClick: (card: Card) => void;
  card: Card;
}

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
