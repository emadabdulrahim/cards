/* eslint-disable no-restricted-imports */

import { createStitches } from "@stitches/core";
import type * as Stitches from "@stitches/core";
export type { VariantProps, PropertyValue, ScaleValue } from "@stitches/core";

import { colors } from "./colors";
import { space, spaceAliases, SpaceToken } from "./space";
export { withStyle } from "./withStyle";
export type {
  CSSProps,
  PolymorphicProps,
  BasicStyledComponentProps,
  StyledComponentProps,
  StyledComponentPropsWithPolymorphism,
} from "./withStyle";

export const {
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  prefix: "cards",
  utils: {
    px: (value: SpaceToken) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: SpaceToken) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: SpaceToken | "auto") => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: SpaceToken | "auto") => ({
      marginTop: value,
      marginBottom: value,
    }),
    gradientRight: (value: string) => ({
      backgroundImage: `linear-gradient(to right, ${value})`,
    }),
    gradientBottom: (value: string) => ({
      backgroundImage: `linear-gradient(to bottom, ${value})`,
    }),
    gradientBottomRight: (value: string) => ({
      backgroundImage: `linear-gradient(to bottom right, ${value})`,
    }),
    backgroundSoftFadeEdges: (value: string) => ({
      WebkitMaskImage: `linear-gradient(to right, transparent 0%, black ${value}, black calc(100% - ${value}), transparent 100%)`,
    }),
  },
  theme: {
    // ================================================================================
    // Typography

    fonts: {
      serif: `EB Garamond, Newsreader, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
      mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },

    fontSizes: {
      1: "16px",
      2: "20px",
      3: "24px",
      4: "30px",
      5: "36px",
      6: "48px",
      7: "64px",
      8: "80px",
      9: "96px",
    },

    lineHeights: {
      single: "1",
      tight: "1.2",
      normal: "1.3",
      relaxed: "1.5",
      double: "2",
    },

    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
    },

    letterSpacings: {
      tighter: "-0.02em",
      tight: "-0.01em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },

    // ================================================================================
    // Borders

    radii: {
      none: "0px",
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "12px",
      xl: "16px",
      round: "50%",
      pill: "9999px",
    },

    borderWidths: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },

    borderStyles: {
      none: "none",
      solid: "solid",
      dashed: "dashed",
      dotted: "dotted",
      hidden: "hidden",
    },

    // ================================================================================
    // Color

    colors: {
      // ==============================================================================
      // Semantic tokens

      primary1: "#FFF9F0",
      primary2: "#FFEED4",
      primary3: "#FADAA8",
      primary4: "#F4C47B",
      primary5: "#F99D10",
      primary6: "#C17410",
      primary7: "#784511",
      primary8: "#50280B",
      primary9: "#371B06",
      primary10: "#120902",
      primary11: "#050201",

      gradientPrimary:
        "linear-gradient(180deg, #FADAA8 21.28%, #F99D10 92.02%)",

      // ==============================================================================
      // Alias tokens

      minContrast: colors.mono.white,
      maxContrast: colors.mono.black,

      // Backgrounds
      bgPrimary: "$primary10",
      bgSecondary: "$primary9",
      bgTertiary: "$primary8",

      // Text
      contentMuted: "$primary6",
      contentNormal: "$primary3",
      contentStrong: "$primary1",

      // Border
      borderMuted: "$neutral9",
      borderNormal: "$neutral8",
      borderStrong: "$neutral6",
    },

    // ================================================================================
    // Effects

    shadows: {
      none: "none",
      sm: "0px 0px 8px rgba(193, 116, 16, 0.6), 0px 0px 4px rgba(250, 218, 168, 0.3)",
      md: "0px 0px 15px rgba(193, 116, 16, 0.7), 0px 0px 3px 1px rgba(250, 218, 168, 0.39)",
      lg: "0px 0px 24px rgba(193, 116, 16, 0.8), 0px 0px 4px 1px rgba(250, 218, 168, 0.59)",
    },

    // ================================================================================
    // Transitions & Animations

    transitions: {
      dur: "150ms",
      dur75: "75ms",
      dur100: "100ms",
      dur150: "150ms",
      dur200: "200ms",
      dur300: "300ms",
      dur500: "500ms",
      dur700: "700ms",
      dur1000: "1000ms",

      fn: "cubic-bezier(0.4, 0, 0.2, 1)",
      fnLinear: "linear",
      fnIn: "cubic-bezier(0.4, 0, 1, 1)",
      fnOut: "cubic-bezier(0, 0, 0.2, 1)",
      fnInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },

    // ================================================================================
    // Spacing & Sizing

    space: {
      0: space[0],
      1: space[1],
      2: space[2],
      4: space[4],
      6: space[6],
      8: space[8],
      10: space[10],
      12: space[12],
      14: space[14],
      16: space[16],
      20: space[20],
      24: space[24],
      28: space[28],
      32: space[32],
      36: space[36],
      40: space[40],
      44: space[44],
      48: space[48],
      56: space[56],
      64: space[64],
      80: space[80],
      96: space[96],
      112: space[112],
      128: space[128],
      144: space[144],
      160: space[160],
      176: space[176],
      192: space[192],
      208: space[208],
      224: space[224],
      240: space[240],
      256: space[256],
      288: space[288],
      320: space[320],
      384: space[384],

      // Alias Tokens
      gutter: spaceAliases.gutter,

      sm1: spaceAliases.sm1,
      sm2: spaceAliases.sm2,
      sm3: spaceAliases.sm3,
      sm4: spaceAliases.sm4,
      sm5: spaceAliases.sm5,

      md1: spaceAliases.md1,
      md2: spaceAliases.md2,
      md3: spaceAliases.md3,
      md4: spaceAliases.md4,
      md5: spaceAliases.md5,

      lg1: spaceAliases.lg1,
      lg2: spaceAliases.lg2,
      lg3: spaceAliases.lg3,
      lg4: spaceAliases.lg4,
      lg5: spaceAliases.lg5,
    },
    // ================================================================================
    // Layout

    zIndices: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
    },
  },
});

const _css = css();
/**
 * A utility for creating a one-off css class name. Useful for inline styling but use *sparingly*.
 * @param c A CSS object.
 * @returns A CSS class object.
 * @example <div className={inlineCss({ color: "pink" })} />
 */
export const inlineCss = (c: CSS): string => _css({ css: c });

/**
 * Use for typing a CSS object which includes our theme and utils.
 * @example const styles: CSS = { color: "$primary" }
 */
export type CSS = Stitches.CSS<typeof config>;

type ThemeColors = typeof theme.colors;

/**
 * Utility to modify a theme value to have an alpha channel. A bit hacky.
 * @param colorToken The theme color to change the alpha channel of.
 * @param alphaValue The alpha channel value (should be between 0 and 1).
 * @returns A new value (not variable) with the alpha channel applied
 * @example
 * alpha("primary9", .5) // "hsl(245 50% 75% / 0.5)"
 */
export const alpha = (
  colorToken: ThemeColors[keyof ThemeColors],
  alphaValue: number
) => colorToken.value.replace(")", ` / ${alphaValue})`);

/** Utility for making a rule !important. */
export const important = (rule: any) => `${rule} !important`;
