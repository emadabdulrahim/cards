import * as React from "react";
import { css, withStyle } from "../styles/stitches.config";
import { Card } from "../lib/gameState";
import gsap from "gsap";

interface GameCardProps extends React.HTMLAttributes<HTMLDivElement> {
  cardBackUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
  onCardClick: (card: Card) => void;
  card: Card;
}

const CardContainer = withStyle(
  "div",
  css({
    perspective: 1200,
    flex: "0 1 clamp(70px, 30%, 150px)",
    aspectRatio: "1/1.45",
  }),
  { displayName: "StyledCard" }
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
    defaultVariants: {
      size: "contain",
    },
  })
);

type Tween = (tween: gsap.TweenVars) => gsap.core.Tween;

type Noop = () => void;

const getAnimation = (el: HTMLElement) => (tween: gsap.TweenVars) => {
  return gsap.to(el, tween);
};

export const GameCard = React.memo(
  ({ card, cardBackUrl, isMatched, isFlipped, onCardClick }: GameCardProps) => {
    const isMatchedRef = React.useRef(isMatched);
    const animateCard = React.useRef<Tween | Noop>(() => {});
    const ref = React.useCallback((node: HTMLDivElement) => {
      if (!node) return;
      animateCard.current = getAnimation(node);
    }, []);

    // animate flip card with gsap
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
            animateCard.current({
              duration: 0.3,
              rotationY: -180,
              ease: "elastic.out(0.1, 0.6)",
              onComplete: (e) => {
                onCardClick(card);
              },
            });
          }}
        >
          <StyledBGImage
            css={{
              backgroundImage: `url('${cardBackUrl}')`,
            }}
          ></StyledBGImage>
          <StyledBGImage
            flipped
            css={{
              backgroundImage: `url('images/card-set/${card.image}')`,
            }}
          ></StyledBGImage>
        </StyledCard>
      </CardContainer>
    );
  }
);

GameCard.displayName = "GameCard";
