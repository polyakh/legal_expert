// region Global Imports
import type { ComponentPropsWithoutRef, ReactNode } from "react";
// endregion

// region Local Imports
import type { WithAsProps, Size } from "~shared/typings";
import { getClassNames, sizeMedium } from "~components";
import {
  defaultButtonType,
  ShapeTypes,
  shapeDefault,
  VariantTypes,
  variantPrimary,
  styles,
} from "~components/ui/button";
// endregion

const COMPONENT_KEY = "Button";

export interface ButtonOwnProps
  extends WithAsProps,
    Partial<Size>,
    ComponentPropsWithoutRef<typeof defaultButtonType> {
  readonly shape?: typeof ShapeTypes[number];
  readonly icon?: ReactNode;

  readonly variant?: typeof VariantTypes[number];
}

const Button = ({
  as: Component = defaultButtonType,
  shape = shapeDefault,
  type = defaultButtonType,
  size = sizeMedium,
  variant = variantPrimary,
  disabled = false,
  onClick,
  children,
  icon,
}: ButtonOwnProps) => {
  const computedClassName = getClassNames(
    styles.root,
    styles[variant],
    styles[shape],
    styles[size],
    styles.ripple
  );
  return (
    <Component
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={computedClassName}
    >
      {icon ?? children}
    </Component>
  );
};

Button.displayName = COMPONENT_KEY;
export default Button;
