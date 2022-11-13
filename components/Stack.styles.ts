import { css, theme } from "../styles/stitches.config";

export const stackDefaults = css({
  display: "flex",
});

export const spacingVariants = css({
  variants: {
    spacing: {
      none: {
        gap: 0,
      },
      sm1: {
        gap: theme.space.sm1,
      },
      sm2: {
        gap: theme.space.sm2,
      },
      sm3: {
        gap: theme.space.sm3,
      },
      sm4: {
        gap: theme.space.sm4,
      },
      sm5: {
        gap: theme.space.sm5,
      },
      md1: {
        gap: theme.space.md1,
      },
      md2: {
        gap: theme.space.md2,
      },
      md3: {
        gap: theme.space.md3,
      },
      md4: {
        gap: theme.space.md4,
      },
      md5: {
        gap: theme.space.md5,
      },
      lg1: {
        gap: theme.space.lg1,
      },
      lg2: {
        gap: theme.space.lg2,
      },
      lg3: {
        gap: theme.space.lg3,
      },
      lg4: {
        gap: theme.space.lg4,
      },
      lg5: {
        gap: theme.space.lg5,
      },
    },
  },

  defaultVariants: {
    spacing: "sm4",
  },
});

export const justifyVariants = css({
  variants: {
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
    },
  },
});
