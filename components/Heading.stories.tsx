import * as React from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Stack } from "./Stack";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Design system / Heading",
};

const rowBlockProps = {
  justify: "between",
  css: { padding: "$4", background: "$bgTertiary" },
} as const;

const pangram = "The quick brown fox jumps over the lazy dog";

export const HeadingComponent = () => {
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
        <Stack.H justify={"between"}>
          <Heading size="md3">Scale</Heading>
          <Text font="mono" css={{ flexShrink: 0 }}>
            size
          </Text>
        </Stack.H>
        {(
          ["sm1", "sm2", "sm3", "md1", "md2", "md3", "lg1", "lg2"] as const
        ).map((size) => (
          <Stack.H key={size} {...rowBlockProps} noWrap>
            <Heading size={size}>{pangram}</Heading>
            <Text font="mono" css={{ flexShrink: 0 }}>
              {size}
            </Text>
          </Stack.H>
        ))}
      </Stack.V>
      <Stack.V>
        <Stack.H justify={"between"}>
          <Heading size="md3">Colors</Heading>
          <Text font="mono" css={{ flexShrink: 0 }}>
            color
          </Text>
        </Stack.H>
        {(["muted", "normal", "strong"] as const).map((color) => (
          <Stack.H key={color} {...rowBlockProps} noWrap>
            <Heading color={color}>{pangram}</Heading>
            <Text font="mono" css={{ flexShrink: 0 }}>
              {color}
            </Text>
          </Stack.H>
        ))}
      </Stack.V>
      <Stack.V>
        <Stack.H justify={"between"}>
          <Heading size="md3">Font Weight</Heading>
          <Text font="mono" css={{ flexShrink: 0 }}>
            weight
          </Text>
        </Stack.H>
        {(["medium", "semibold"] as const).map((weight) => (
          <Stack.H key={weight} {...rowBlockProps} noWrap>
            <Heading weight={weight}>{pangram}</Heading>
            <Text font="mono" css={{ flexShrink: 0 }}>
              {weight}
            </Text>
          </Stack.H>
        ))}
      </Stack.V>
      <Stack.V>
        <Heading size="md3">asChild</Heading>
        <Text>
          Using <Text font="mono">asChild</Text> prop to render h1.{" "}
          <Text css={{ font: "italic" }}>
            Heading component defaults to h2.
          </Text>
        </Text>
        <Heading asChild>
          <h1>This heading is an h1 element</h1>
        </Heading>
      </Stack.V>
    </Stack.V>
  );
};
