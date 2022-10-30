import type * as React from "react";
import type { CSS, VariantProps } from "./stitches.config";

export interface CSSProps {
  /** Override styles on the base component/element. Pass a css object. */
  css?: CSS;
}

export interface PolymorphicProps {
  /** If true, renders this component with its child component/element as it's base. */
  asChild?: boolean;
}

/** Basic foundational props for styled components. Useful when wrapping a styled component without exposing inner variants. */
export type BasicStyledComponentProps = CSSProps & PolymorphicProps;

/** Return an interface combining an element or component's props with a css component's props. */
export type StyledComponentProps<
  Type extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  Style extends () => {}
> = React.ComponentPropsWithRef<Type> & VariantProps<Style> & CSSProps;

/** Return an interface combining an element or component's props with a css component's props and a polymorphic `asChild` prop. */
export type StyledComponentPropsWithPolymorphism<
  Type extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  Style extends () => {}
> = StyledComponentProps<Type, Style> & PolymorphicProps;

/**
 * Attach a css function to a base element or component.
 * The returned component's API will be enhanced with the css function's API (variants).
 * The returned component will also have a `css` prop which can be used for one-off style overrides.
 * The returned component is also polymoprhic via an `asChild` prop.
 * @param el The base element type or component you'd like to attach styles to. If using a component, it will need to accept a `className` prop for styling to apply.
 * @param cssComponent A css component, created separately via `css`, which you would like to attach to the base element or component.
 * @param config An optional configuration object.
 * @param config.displayName The string to use as the returned component's display name.
 * @param config.polymoprhic Use to turn off polymorphism via `asChild` (enabled by default).
 * @example
 * // Using an element as a base + usage.
 * const text = css({ variants: { fantasy: { fontFamily: "fantasy" } } })
 * const Text = withStyle("span", text);
 * const example = () => (
 *  <Text fantasy css={{ color: "pink" }} asChild>
 *    <a href="#">hello world</a>
 *  </Text>
 * )
 * @example
 * // Using a component as a base.
 * const Thing = (props) => <div {...props} />;
 * const fancy = css({ color: "pink" });
 * const FancyThing = withStyle(Thing, fancy);
 * // Note: `asChild` will replace the base component if used, so be careful when extending components.
 * @example
 * // Using an anonymous css component.
 * const Box = withStyle("div", css({ boxSizing: "border-box" }));
 * @example
 * // Composing styles.
 * const button = css({ background: "black", color: "white" });
 * const Button = withStyle("button", button);
 * const deluxeButton = css(button, { fontFamily: "fantasy" });
 * const DeluxeButton = withStyle("button", deluxeButton);
 * // Now if `asChild` is used we keep the button styles we extended.
 * @example
 * // Turning off polymorphism. Sometimes you may want the base component to handle polymorphism.
 * const Dialog = withStyle(DialogPrimitive, css({}), { polymorphism: false })
 */
export function withStyle<
  Type extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  Style extends () => {},
  Config extends { polymorphic?: boolean; displayName?: string }
>(
  el: Type,
  cssComponent: Style,
  config?: Config
): React.ForwardRefExoticComponent<
  Config extends {
    polymorphic: false;
  }
    ? StyledComponentProps<Type, Style>
    : StyledComponentPropsWithPolymorphism<Type, Style>
>;
