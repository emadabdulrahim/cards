import * as React from "react";
import { css, withStyle } from "../styles/stitches.config";
import { Card } from "../lib/gameState";
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
    backgroundSize: "cover",
    boxShadow:
      "inset 0 2px 8px rgba(0, 0, 0, 0.4), 0 0px 1px 2px rgba(223, 192, 30, 0.7)",
    outline: "1px solid #EDC892",
    outlineOffset: "4px",
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
    const isMatchedRef = React.useRef(isMatched);
    const animateCard = React.useRef<Tween | Noop>(() => {});
    const ref = React.useCallback((node: HTMLDivElement) => {
      if (!node) return;
      animateCard.current = getAnimation(node);
    }, []);

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
            tiltEnable={!isFlipped}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={true}
            transitionEasing={"cubic-bezier(0.16, 1, 0.3, 1)"}
            transitionSpeed={300}
            glareMaxOpacity={!isFlipped ? 0.15 : 0}
            glarePosition="all"
            glareBorderRadius={"8%"}
            scale={1.05}
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
        </StyledCard>
      </CardContainer>
    );
  }
);

GameCard.displayName = "GameCard";
