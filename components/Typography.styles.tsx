import { css, theme } from "../styles/stitches.config";

export const textStyles = css({
  variants: {
    size: {
      sm1: {
        fontSize: theme.fontSizes[1],
      },
      sm2: {
        fontSize: theme.fontSizes[2],
      },
      sm3: {
        fontSize: theme.fontSizes[3],
      },
      md1: {
        fontSize: theme.fontSizes[4],
      },
      md2: {
        fontSize: theme.fontSizes[5],
        lineHeight: "$normal",
      },
      md3: {
        fontSize: theme.fontSizes[6],
        lineHeight: "$normal",
      },
    },
    color: {
      muted: {
        color: "$contentMuted",
      },
      normal: {
        color: "$contentNormal",
      },
      strong: {
        color: "$contentStrong",
      },
    },
    weight: {
      normal: {
        fontWeight: "$normal",
      },
      medium: {
        fontWeight: "$medium",
      },
    },
    lineHeight: {
      normal: {
        lineHeight: "$normal",
      },
      relaxed: {
        lineHeight: "$relaxed",
      },
    },
    font: {
      sans: {
        fontFamily: "$sans",
        letterSpacing: "$tight",
      },
      mono: {
        fontFamily: "$mono",
        letterSpacing: "$normal",
      },
    },
    block: {
      true: {
        display: "block",
      },
    },
  },

  defaultVariants: {
    font: "sans",
    size: "sm3",
    color: "normal",
    weight: "normal",
    lineHeight: "relaxed",
  },
});
