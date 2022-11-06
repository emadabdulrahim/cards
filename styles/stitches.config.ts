/* eslint-disable no-restricted-imports */

import { createStitches } from "@stitches/core";
import type * as Stitches from "@stitches/core";
export type { VariantProps, PropertyValue, ScaleValue } from "@stitches/core";

import { colors } from "./colors";
import { space, spaceAliases } from "./space";
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
  theme: {
    // ================================================================================
    // Typography

    fonts: {
      sans: `"Whitney SSm", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      serif: `Signifier, Newsreader, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
      mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },

    fontSizes: {
      1: "11px",
      2: "12px",
      3: "13px",
      4: "15px",
      5: "17px",
      6: "19px",
      7: "21px",
      8: "27px",
      9: "35px",
      10: "59px",

      // Alias
      xs: "$1",
      sm: "$2",
      md: "$3",
      lg: "$4",
      xl: "$5",
    },

    lineHeights: {
      single: "1",
      tight: "1.2",
      normal: "1.4",
      relaxed: "1.5",
      double: "2",
    },

    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
    },

    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
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
      xl: "18px",
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

      // Neutral (Mauve)
      neutral1: colors.gray.gray1,
      neutral2: colors.gray.gray2,
      neutral3: colors.gray.gray3,
      neutral4: colors.gray.gray4,
      neutral5: colors.gray.gray5,
      neutral6: colors.gray.gray6,
      neutral7: colors.gray.gray7,
      neutral8: colors.gray.gray8,
      neutral9: colors.gray.gray9,
      neutral10: colors.gray.gray10,
      neutral11: colors.gray.gray11,
      neutral12: colors.gray.gray12,
      neutral13: colors.gray.gray13,

      // Primary (Blurple)
      primary1: colors.indigo.indigo1,
      primary2: colors.indigo.indigo2,
      primary3: colors.indigo.indigo3,
      primary4: colors.indigo.indigo4,
      primary5: colors.indigo.indigo5,
      primary6: colors.indigo.indigo6,
      primary7: colors.indigo.indigo7,
      primary8: colors.indigo.indigo8,
      primary9: colors.indigo.indigo9,
      primary10: colors.indigo.indigo10,
      primary11: colors.indigo.indigo11,
      primary12: colors.indigo.indigo12,
      primary13: colors.indigo.indigo13,

      // Secondary (Pink)
      secondary1: colors.pink.pink1,
      secondary2: colors.pink.pink2,
      secondary3: colors.pink.pink3,
      secondary4: colors.pink.pink4,
      secondary5: colors.pink.pink5,
      secondary6: colors.pink.pink6,
      secondary7: colors.pink.pink7,
      secondary8: colors.pink.pink8,
      secondary9: colors.pink.pink9,
      secondary10: colors.pink.pink10,
      secondary11: colors.pink.pink11,
      secondary12: colors.pink.pink12,
      secondary13: colors.pink.pink13,

      // Negative (Red)
      negative1: colors.red.red1,
      negative2: colors.red.red2,
      negative3: colors.red.red3,
      negative4: colors.red.red4,
      negative5: colors.red.red5,
      negative6: colors.red.red6,
      negative7: colors.red.red7,
      negative8: colors.red.red8,
      negative9: colors.red.red9,
      negative10: colors.red.red10,
      negative11: colors.red.red11,
      negative12: colors.red.red12,
      negative13: colors.red.red13,

      // Warning (Orange)
      warning1: colors.orange.orange1,
      warning2: colors.orange.orange2,
      warning3: colors.orange.orange3,
      warning4: colors.orange.orange4,
      warning5: colors.orange.orange5,
      warning6: colors.orange.orange6,
      warning7: colors.orange.orange7,
      warning8: colors.orange.orange8,
      warning9: colors.orange.orange9,
      warning10: colors.orange.orange10,
      warning11: colors.orange.orange11,
      warning12: colors.orange.orange12,
      warning13: colors.orange.orange13,

      // Positive (Green)
      positive1: colors.green.green1,
      positive2: colors.green.green2,
      positive3: colors.green.green3,
      positive4: colors.green.green4,
      positive5: colors.green.green5,
      positive6: colors.green.green6,
      positive7: colors.green.green7,
      positive8: colors.green.green8,
      positive9: colors.green.green9,
      positive10: colors.green.green10,
      positive11: colors.green.green11,
      positive12: colors.green.green12,
      positive13: colors.green.green13,

      // ==============================================================================
      // Alias tokens

      minContrast: colors.mono.white,
      maxContrast: colors.mono.black,

      // Backgrounds
      bgPrimary: "$minContrast",
      bgSecondary: "$neutral1",
      bgTertiary: "$neutral2",

      // Text
      contentMuted: "$neutral11",
      contentNormal: "$neutral12",
      contentStrong: "$neutral13",

      // Border
      borderMuted: "$neutral5",
      borderNormal: "$neutral6",
      borderStrong: "$neutral7",
    },

    // ================================================================================
    // Effects

    shadows: {
      none: "none",
      sm: "0 1px 3px -1px hsl(250 15% 11% / 12%)",
      normal: "0px 3px 4px -3px hsl(250 15% 11% / 25%)",
      md: "0px 1px 2px -1px hsl(250 15% 11% / 12%), 0px 4px 7px -4px hsl(250 15% 11% / 30%)",
      lg: "0px 3px 4px -3px hsl(250 15% 11% / 12%), 0px 9px 14px -6px hsl(250 15% 11% / 25%)",
      xl: "0px 4px 6px -4px hsl(250 15% 11% / 15%), 0px 18px 28px -10px hsl(250 15% 11% / 35%)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",

      // Has a subtle border-like effect. Best used on elements with no border
      normalOutlined:
        "0 0 1px hsl(250 15% 11% / 20%), 0px 3px 4px -3px hsl(250 15% 11% / 25%)",
      mdOutlined:
        "0 0 1px hsl(250 15% 11% / 20%), 0px 1px 2px -1px hsl(250 15% 11% / 12%), 0px 4px 7px -4px hsl(250 15% 11% / 30%)",
      lgOutlined:
        "0 0 1px hsl(250 15% 11% / 20%), 0px 3px 4px -3px hsl(250 15% 11% / 12%), 0px 9px 14px -6px hsl(250 15% 11% / 25%)",
      xlOutlined:
        "0 0 1px hsl(250 15% 11% / 20%), 0px 4px 6px -4px hsl(250 15% 11% / 15%), 0px 18px 28px -10px hsl(250 15% 11% / 35%)",
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
