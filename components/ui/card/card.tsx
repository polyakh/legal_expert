//region Global Imports
import { ReactNode } from "react";
import type { ImageProps } from "next/image";
//endregion

//region Local Imports
import type { WithAsProps, Title, Description } from "~shared/typings";
import { CardMedia, CardMeta, styles } from "~components/ui/card";
//endregion

export interface CardCommonProps
  extends Title,
    Description,
    Pick<ImageProps, "src"> {}

interface CardOwnProps extends WithAsProps, CardCommonProps {
  readonly actions?: Array<ReactNode>;
}

const COMPONENT_KEY = "Card";

function Card({
  as: Component = "div",
  title,
  description,
  src,
  actions,
}: CardOwnProps) {
  return (
    <Component className={styles.card}>
      <CardMedia src={src} alt={title} />
      <CardMeta title={title} description={description} />
      {actions}
    </Component>
  );
}

export { COMPONENT_KEY };
export default Card;
