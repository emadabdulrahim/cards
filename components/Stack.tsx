import { withStyle, css } from "../styles/stitches.config";
import {
  spacingVariants,
  justifyVariants,
  stackDefaults,
} from "./Stack.styles";

const vStack = css(spacingVariants, justifyVariants, stackDefaults, {
  flexDirection: "column",

  variants: {
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
    },
  },
});

const hStack = css(spacingVariants, justifyVariants, stackDefaults, {
  flexWrap: "wrap",

  variants: {
    noShrink: {
      true: {
        "> svg": {
          flexShrink: 0,
        },
      },
    },
    noWrap: {
      true: {
        flexWrap: "nowrap",
      },
    },
    align: {
      baseline: {
        alignItems: "baseline",
      },
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
    },
  },

  defaultVariants: {
    align: "center",
    noShrink: "true",
  },
});

const HStack = withStyle("div", hStack, { displayName: "HStack" });

const VStack = withStyle("div", vStack, { displayName: "Stack" });

export const Stack = Object.assign({}, { V: VStack, H: HStack });
