import * as React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { css, withStyle } from "../styles/stitches.config";
import { Card } from "../lib/gameState";

interface GameCardProps extends React.HTMLAttributes<HTMLDivElement> {
  cardBackUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
  onCardClick: (card: Card) => void;
  card: Card;
}

const defaultTransition = {
  type: "spring",
  stiffness: 250,
  damping: 24,
};

const StyledCard = withStyle(
  "div",
  css({
    width: "100%",
    height: "100%",
    borderRadius: "$lg",
    position: "relative",
    perspective: "1200px",
  }),
  { displayName: "StyledCard" }
);

const StyledBGImage = withStyle(
  "div",
  css({
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    overflow: "hidden",
    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))",
    borderRadius: "$lg",

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

export const GameCard = React.memo(
  ({ card, cardBackUrl, isMatched, isFlipped, onCardClick }: GameCardProps) => {
    const controls = useAnimationControls();
    const isMatchedRef = React.useRef(isMatched);

    React.useEffect(() => {
      if (isFlipped) {
        controls.start({ rotateY: -180 });
      } else {
        controls.start({ rotateY: 0 });
      }
    }, [isFlipped, controls]);

    React.useEffect(() => {
      if (!isMatchedRef.current && isMatched) {
        controls.start({
          scale: [1, 1.1, 1],
          rotateZ: [-5, 12, -8, 5, 0],
          transition: {
            duration: 0.5,
          },
        });
      }
    }, [isMatched, controls]);

    return (
      <StyledCard>
        <motion.div
          animate={controls}
          style={{
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            position: "absolute",
            inset: 0,
          }}
          transition={defaultTransition}
          onClick={() => {
            controls.start({ rotateY: -180 });
          }}
          onAnimationComplete={(e: { rotateY: number }) => {
            if (e.rotateY === -180) {
              onCardClick(card);
            }
          }}
        >
          <StyledBGImage
            size="contain"
            css={{
              backgroundImage: `url('${cardBackUrl}')`,
            }}
          ></StyledBGImage>
          <StyledBGImage
            flipped
            size="contain"
            css={{
              backgroundImage: `url('images/card-set/${card.image}')`,
            }}
          ></StyledBGImage>
        </motion.div>
      </StyledCard>
    );
  }
);

GameCard.displayName = "GameCard";
