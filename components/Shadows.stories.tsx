import * as React from "react";
import { CSS, theme } from "../styles/stitches.config";
import { Box } from "./Box";
import { Heading } from "./Heading";
import { Stack } from "./Stack";
import { Text } from "./Text";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Design system / Shadows",
};

const boxStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 200,
  width: 200,
  borderRadius: "$md",
  background: "$bgPrimary",
};

export const Shadows = () => {
  return (
    <Stack.V
      spacing="md5"
      css={{
        marginBottom: "$64",
        "> * + *": {
          paddingTop: "$32",
          borderTop: "1px solid $borderMuted",
        },
      }}
    >
      <Stack.V>
        <Heading size="md3">Shadows</Heading>
        <Stack.H spacing="md4">
          {Object.keys(theme.shadows)
            .filter((s) => !s.endsWith("Outlined"))
            .map((shadow: any) => (
              <Box
                key={shadow}
                css={{
                  ...boxStyles,
                  boxShadow: `$${shadow}`,
                }}
              >
                <Stack.V align="center">
                  <Text font="mono">${shadow}</Text>
                  {shadowUse[shadow] && <Text color="muted">{shadowUse[shadow]}</Text>}
                </Stack.V>
              </Box>
            ))}
        </Stack.H>
      </Stack.V>
      <Stack.V>
        <Heading size="md3">Shadows Outlined</Heading>
        <Text css={{ fontStyle: "italic" }}>Best used on elements with no border</Text>
        <Stack.H spacing="md4">
          {Object.keys(theme.shadows)
            .filter((s) => s.endsWith("Outlined"))
            .map((shadow: any) => (
              <Box
                key={shadow}
                css={{
                  ...boxStyles,
                  boxShadow: `$${shadow}`,
                }}
              >
                <Stack.V align="center">
                  <Text font="mono">${shadow}</Text>
                  {shadowOutlinedUse[shadow] && (
                    <Text color="muted">{shadowOutlinedUse[shadow]}</Text>
                  )}
                </Stack.V>
              </Box>
            ))}
        </Stack.H>
      </Stack.V>
      <Stack.V>
        <Heading size="md3">Borders</Heading>
        <Stack.H spacing="md4">
          {["$borderMuted", "$borderNormal", "$borderStrong"].map((border) => (
            <Box
              key={border}
              css={{
                ...boxStyles,
                border: `1px solid ${border}`,
              }}
            >
              <Text font="mono">{border}</Text>
            </Box>
          ))}
        </Stack.H>
      </Stack.V>
    </Stack.V>
  );
};

const shadowUse = {
  none: "",
  sm: "buttons, button tab, etc",
  normal: "raised content",
  md: "hover state",
  lg: "poover",
  xl: "modals, large overlays",
  inner: "",
} as any;

const shadowOutlinedUse = {
  normalOutlined: "raised content",
  mdOutlined: "hover state",
  lgOutlined: "poover",
  xlOutlined: "modals, large overlays",
} as any;
