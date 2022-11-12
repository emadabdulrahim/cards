import { css, theme, withStyle } from "../styles/stitches.config";
import { typographyVariantsObject } from "./Typography.styles";

export const textStyles = css({
  variants: {
    ...typographyVariantsObject,
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
        lineHeight: theme.lineHeights.normal,
      },
      md3: {
        fontSize: theme.fontSizes[6],
        lineHeight: theme.lineHeights.normal,
      },
    },
    lineHeight: {
      normal: {
        lineHeight: theme.lineHeights.normal,
      },
      relaxed: {
        lineHeight: theme.lineHeights.relaxed,
      },
    },
    font: {
      serif: {
        fontFamily: theme.fonts.serif,
        letterSpacing: theme.letterSpacings.tight,
      },
      mono: {
        fontFamily: theme.fonts.mono,
        letterSpacing: theme.letterSpacings.normal,
      },
    },
    block: {
      true: {
        display: "block",
      },
    },
  },

  defaultVariants: {
    font: "serif",
    size: "sm3",
    color: "normal",
    weight: "normal",
    lineHeight: "relaxed",
  },
});

export const Text = withStyle("span", textStyles, { displayName: "Text" });
