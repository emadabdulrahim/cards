import { css } from "../styles/stitches.config";
import { withStyle } from "../styles/withStyle";

export const StyledButton = withStyle(
  "button",
  css({
    all: "unset",
    boxSizing: "border-box",
    fontFamily: "$serif",
    borderRadius: "$md",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "default",

    variants: {
      appearance: {
        primary: {
          gradientRight: "$primary6, $primary4, $primary6",
          color: "$maxContrast",
          position: "relative",
          borderRadius: "$md",
          fontWeight: "$medium",
          fontVariant: "small-caps",
          letterSpacing: "$wide",
          boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",

          "&:hover": {
            gradientRight: "$primary5, $primary4, $primary5",
          },
          "&:active": {
            background: "$primary5",
          },

          "&::before": {
            content: "''",
            position: "absolute",
            inset: -4,
            gradientBottom: "$primary2, $primary7",
            zIndex: -1,
            borderRadius: "calc($md + 4px)",
          },
        },
      },
      size: {
        large: {
          height: 48,
          px: "$24",
          fontSize: "$6",
          lineHeight: "48px",
          "> span": {
            height: "122%",
          },
        },
        normal: {
          height: 36,
          px: "$32",
          fontSize: "$5",
          lineHeight: "36px",
          "> span": {
            height: "122%",
          },
        },
      },
      fullWidth: {
        true: {
          width: "100%",
        },
      },
    },
  })
);
