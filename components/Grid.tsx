import { css, withStyle } from "../styles/stitches.config";

export const Grid = withStyle(
  "div",
  css({
    $$cardSize: "clamp(40px, 20vw, 136px)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax($$cardSize, 1fr))",
    gap: "$md2",
  })
);
