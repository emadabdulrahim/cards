import * as React from "react";
import { spaceAliases } from "../styles/space";
import { CSS, theme } from "../styles/stitches.config";
import { Box } from "./Box";
import { Heading } from "./Heading";
import { Stack } from "./Stack";
import { Text } from "./Text";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Design system / Stack",
};

const Scale = () => {
  return (
    <Stack.V>
      <Stack.H justify={"between"}>
        <Heading size="md3">Spacing scale</Heading>
        <Text font="mono">spacing</Text>
      </Stack.H>
      <Stack.V>
        {(Object.keys(spaceAliases) as Array<keyof typeof spaceAliases>).map(
          (space) => (
            <Stack.H align="stretch" key={space}>
              <Box css={{ flex: 1 }}>
                <Box
                  css={{
                    width: theme.space[space].value,
                    background: "$neutral5",
                    height: "100%",
                  }}
                />
              </Box>
              <Box>
                <Text font="mono" color="muted">
                  {theme.space[space].value} /{" "}
                </Text>
                <Text font="mono">{space}</Text>
              </Box>
            </Stack.H>
          )
        )}
      </Stack.V>
    </Stack.V>
  );
};

export const StackH = () => {
  return (
    <Stack.V
      spacing="md5"
      css={{
        marginBottom: "$64",
        "> * + *": {
          borderTop: "1px solid $borderMuted",
          paddingTop: "$24",
        },
      }}
    >
      <Scale />
      <Stack.V>
        <Stack.H justify={"between"}>
          <Heading size="md3">Alignment</Heading>
          <Text font="mono">align</Text>
        </Stack.H>
        {(["start", "center", "end", "baseline", "stretch"] as const).map(
          (value) => (
            <Stack.H
              align={value}
              spacing="md5"
              css={{ background: "$bgTertiary" }}
            >
              <Text size="md3" css={{ background: "$neutral6" }}>
                Large Label
              </Text>
              <Text
                size="sm1"
                css={{ marginRight: "auto", background: "$neutral6" }}
              >
                Small Label
              </Text>
              <Text font="mono">{value}</Text>
            </Stack.H>
          )
        )}
      </Stack.V>
      <Stack.V>
        <Stack.H justify={"between"}>
          <Heading size="md3">Justification</Heading>
          <Text font="mono">justify</Text>
        </Stack.H>
        {(["start", "center", "end", "between", "around"] as const).map(
          (value) => (
            <Stack.H>
              <Stack.H
                justify={value}
                css={{ background: "$bgTertiary", flexGrow: "1" }}
              >
                <Box css={{ height: 20, width: 20, background: "$primary9" }} />
                <Box css={{ height: 20, width: 20, background: "$warning9" }} />
              </Stack.H>
              <Text font="mono" css={{ flexBasis: 100, textAlign: "right" }}>
                {value}
              </Text>
            </Stack.H>
          )
        )}
      </Stack.V>
    </Stack.V>
  );
};

export const StackV = () => {
  return (
    <Stack.V
      spacing="md5"
      css={{
        marginBottom: "$64",
        "> * + *": {
          borderTop: "1px solid $borderMuted",
          paddingTop: "$24",
        },
      }}
    >
      <Scale />
      <Stack.V>
        <Stack.H justify={"between"}>
          <Heading size="md3">Alignment</Heading>
          <Text font="mono">align</Text>
        </Stack.H>
        {(["start", "center", "end"] as const).map((value) => (
          <Stack.H>
            <Stack.V
              align={value}
              css={{ background: "$bgTertiary", flexGrow: 1 }}
            >
              <Box css={{ height: 20, width: 20, background: "$primary9" }} />
              <Box css={{ height: 20, width: 20, background: "$primary9" }} />
            </Stack.V>
            <Text font="mono" css={{ flexBasis: 100, textAlign: "right" }}>
              {value}
            </Text>
          </Stack.H>
        ))}
      </Stack.V>
      <Stack.V>
        <Stack.H justify={"between"}>
          <Heading size="md3">Justification</Heading>
          <Text font="mono">justify</Text>
        </Stack.H>
        {(["start", "center", "end", "between", "around"] as const).map(
          (value) => (
            <Stack.H>
              <Stack.V
                justify={value}
                css={{ background: "$bgTertiary", flexGrow: 1, minHeight: 100 }}
              >
                <Box css={{ height: 20, width: 20, background: "$primary9" }} />
                <Box css={{ height: 20, width: 20, background: "$warning9" }} />
              </Stack.V>
              <Text font="mono" css={{ flexBasis: 100, textAlign: "right" }}>
                {value}
              </Text>
            </Stack.H>
          )
        )}
      </Stack.V>
    </Stack.V>
  );
};

export const Examples = () => {
  return (
    <Stack.V
      spacing="md5"
      css={{
        marginBottom: "$64",
        "> * + *": {
          borderTop: "1px solid $borderMuted",
          paddingTop: "$24",
        },
      }}
    >
      <Stack.V>
        <Box css={{ padding: "$10", border: "1px solid $borderMuted" }}>
          <Stack.V spacing="sm4">
            {fruits.map((fruit) => (
              <Stack.H
                css={{ background: "$bgTertiary", padding: "$8" }}
                justify="between"
                key={fruit.name}
              >
                <Text weight="medium" color="strong">
                  5
                </Text>
                <Text css={{ marginRight: "auto" }}>{fruit.name}</Text>
                <Text>{fruit.emoji}</Text>
              </Stack.H>
            ))}
          </Stack.V>
        </Box>
        <Text size="md1">
          Using <Text font="mono">marginRight: "auto"</Text> on the element we
          want to split after (in this case, the name of the fruit) to create
          space-between layout but more granual.
        </Text>
      </Stack.V>
      <Box>
        <Stack.V css={{ maxWidth: 400 }}>
          <Heading size="md3">Interview</Heading>
          <Box css={{ border: "1px solid $borderMuted" }}>
            <Box
              css={{
                background: "$bgSecondary",
                padding: "$16",
                borderBottom: "1px solid $borderMuted",
              }}
            >
              <Stack.H align="start">
                <Stack.V spacing="sm5" css={{ flex: 1 }}>
                  <Stack.H>
                    <InputPlaceholder css={{ marginRight: "auto" }} />
                  </Stack.H>
                  <Stack.H>
                    <InputPlaceholder
                      css={{ flex: 1, background: "$neutral3" }}
                    />
                    <InputPlaceholder
                      css={{ flex: 1, background: "$neutral3" }}
                    />
                    <InputPlaceholder
                      css={{ flex: 1, background: "$neutral3" }}
                    />
                  </Stack.H>
                </Stack.V>
              </Stack.H>
            </Box>
            <Box css={{ padding: "$16" }}>
              <Stack.V spacing="md1">
                <Stack.H>
                  <Text size="sm1" css={{ marginRight: "auto" }}>
                    1 Interview Slot
                  </Text>
                  <Text size="sm1">Alt.</Text>
                </Stack.H>
                <Stack.H align="start">
                  <Stack.V spacing="sm2" css={{ marginRight: "auto" }}>
                    <InputPlaceholder css={{ width: 200 }} />
                    <Text size="sm1" css={{ color: "$primary9" }}>
                      Add Interviewer Slot
                    </Text>
                  </Stack.V>
                  <Stack.H>
                    <Text size="sm2" weight="medium">
                      0
                    </Text>
                  </Stack.H>
                </Stack.H>
                <Stack.H align="start">
                  <Stack.V spacing="sm2">
                    <Text size="sm1">No room needed</Text>
                    <Text size="sm1" css={{ color: "$primary9" }}>
                      Add Room
                    </Text>
                  </Stack.V>
                </Stack.H>
              </Stack.V>
            </Box>
            <Box />
          </Box>
        </Stack.V>
      </Box>
    </Stack.V>
  );
};

const InputPlaceholder = ({ css }: { css?: CSS }) => {
  return (
    <Box
      css={{
        height: 24,
        width: 120,
        background: "$neutral4",
        borderRadius: "$md",
        ...css,
      }}
    />
  );
};

const fruits = [
  {
    name: "Apple",
    emoji: "🍎",
  },
  {
    name: "Orange",
    emoji: "🍊",
  },
  {
    name: "Strawberry",
    emoji: "🍓",
  },
  {
    name: "Watermelon",
    emoji: "🍉",
  },
  {
    name: "Pear",
    emoji: "🍐",
  },
];
