import { css, withStyle } from "../styles/stitches.config";
import Tilt from "react-parallax-tilt";

export const CardTilt = withStyle(
  Tilt,
  css({
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
  }),
  { displayName: "CardTilt" }
);

export const CardContainer = withStyle(
  "div",
  css({
    perspective: 1200,
    flex: "0 1 100%",
    aspectRatio: "1/1.45",
  }),
  { displayName: "CardContainer" }
);

export const StyledCard = withStyle(
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

export const StyledBGImage = withStyle(
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

export const CardFront = withStyle(
  StyledBGImage,
  css({
    backgroundSize: "149%",
    border: "2px double rgba(0, 0, 0, 0.2)",
    boxShadow:
      "rgb(0 0 0 / 40%) 0px 2px 8px inset, rgb(50 39 24 / 60%) 0px 0px 1px 3px",
  }),
  { displayName: "CardFront" }
);
