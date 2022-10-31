import { withStyle, css } from "../styles/stitches.config";

const box = css({
  display: "block",
});

export const Box = withStyle("span", box, { displayName: "Box" });
