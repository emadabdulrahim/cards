import { css, theme, withStyle } from "../styles/stitches.config";

export const headingStyles = css({
  letterSpacing: theme.letterSpacings.tight,
  fontFamily: "$serif",

  variants: {
    size: {
      sm1: {
        fontSize: theme.fontSizes[1],
        textTransform: "uppercase",
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
        letterSpacing: theme.letterSpacings.tight,
      },
      lg3: {
        fontSize: theme.fontSizes[9],
        lineHeight: theme.lineHeights.tight,
        letterSpacing: theme.letterSpacings.tight,
      },
      xl: {
        fontSize: theme.fontSizes[10],
        lineHeight: theme.lineHeights.tight,
      },
    },
    weight: {
      medium: {
        fontWeight: theme.fontWeights.medium,
      },
      semibold: {
        fontWeight: theme.fontWeights.semibold,
      },
    },
    color: {
      muted: {
        color: theme.colors.contentMuted,
      },
      normal: {
        color: theme.colors.contentNormal,
      },
      strong: {
        color: theme.colors.contentStrong,
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
