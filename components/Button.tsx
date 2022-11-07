import { css } from "../styles/stitches.config";
import { withStyle } from "../styles/withStyle";

export const StyledButton = withStyle(
  "button",
  css({
    all: "unset",
    boxSizing: "border-box",
    borderRadius: "$md",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    variants: {
      appearance: {
        primary: {
          background:
            "linear-gradient(180deg, #FFCB7C 0%, #FFEFD7 37.64%, #FEB951 100%)",
          boxShadow:
            "0px 0px 0px 0px #20170FB2 inset, 0px 0px 0px 10px #423E394D, 0px 0px 0px 4px #81735F80",
          color: "#150D0A",

          "&:hover": {
            background:
              "linear-gradient(180deg, #FFBE5B 0%, #FFD9A0 37.64%, #D99735 100%)",
          },
          "&:active": {
            background: "#F4A835",
          },
        },
      },
      size: {
        large: {
          height: 48,
          padding: "0 $24",
          fontSize: "$8",
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
