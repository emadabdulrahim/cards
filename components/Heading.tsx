import { css, theme, withStyle } from "../styles/stitches.config";
import { typographyVariantsObject } from "./Typography.styles";

export const headingStyles = css({
  letterSpacing: theme.letterSpacings.tight,
  fontFamily: "$serif",

  variants: {
    ...typographyVariantsObject,
    size: {
      sm1: {
        fontSize: theme.fontSizes[1],
        fontVariant: "small-caps",
        letterSpacing: theme.letterSpacings.wide,
        color: theme.colors.contentMuted,
      },
      sm2: {
        fontSize: theme.fontSizes[2],
        color: theme.colors.contentNormal,
      },
      sm3: {
        fontSize: theme.fontSizes[3],
      },
      md1: {
        fontSize: theme.fontSizes[4],
      },
      md2: {
        fontSize: theme.fontSizes[5],
      },
      md3: {
        fontSize: theme.fontSizes[6],
      },
      lg1: {
        fontSize: theme.fontSizes[7],
      },
      lg2: {
        fontSize: theme.fontSizes[8],
        lineHeight: theme.lineHeights.tight,
        letterSpacing: theme.letterSpacings.normal,
      },
      lg3: {
        fontSize: theme.fontSizes[9],
        lineHeight: theme.lineHeights.tight,
        letterSpacing: theme.letterSpacings.tight,
      },
    },
    lineHeight: {
      tight: {
        lineHeight: theme.lineHeights.tight,
      },
      normal: {
        lineHeight: theme.lineHeights.normal,
      },
    },
  },

  defaultVariants: {
    size: "md1",
    color: "strong",
    weight: "medium",
    lineHeight: "normal",
  },
});

export const Heading = withStyle("h2", headingStyles, {
  displayName: "Heading",
});
