import { css, withStyle } from "../styles/stitches.config";

export const Track = withStyle(
  "div",
  css({
    padding: "$4",
    borderRadius: "$pill",
    height: 20,
    display: "flex",
    alignItems: "center",
    position: "relative",
    background: "$primary9",
    boxShadow:
      "inset 0 1px 4px $colors$primary11, 0 0 1px 1px $colors$primary10",
  }),
  { displayName: "Track" }
);

export const StyledRope = withStyle(
  "div",
  css({
    position: "relative",
    borderRadius: "$pill",
    gradientRight: "$primary5, $primary3",
    willChange: "width",
    width: "100%",
    height: "100%",

    "&::before": {
      // glow
      content: "''",

      position: "absolute",
      right: 3,
      left: 3,
      top: 2,
      bottom: "30%",
      gradientBottom: "$minContrast, rgba(255, 255, 255, 0.05)",
      borderRadius: "$pill",
    },
  }),
  { displayName: "StyledRope" }
);
