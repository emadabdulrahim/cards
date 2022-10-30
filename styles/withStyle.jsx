import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export const withStyle = (el, cssComponent, config = {}) => {
  const { polymorphic = true, displayName } = config;
  const styledComponent = React.forwardRef(({ asChild, ...rest }, ref) => {
    const { props } = cssComponent(rest);
    const Comp = polymorphic === true ? (asChild ? Slot : el) : el;
    return <Comp ref={ref} {...props} />;
  });
  styledComponent.displayName = `withStyle.${
    typeof displayName === "string"
      ? displayName
      : typeof el === "string"
      ? el
      : el.displayName ?? "Component"
  }`;
  return styledComponent;
};
