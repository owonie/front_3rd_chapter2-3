import { Card as BaseCard } from "./Card"
import { CardContent} from "./CardContent"
import { CardHeader} from "./CardHeader"
import { CardTitle} from "./CardTitle"
import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface CardType extends ForwardRefExoticComponent<
  HTMLAttributes<HTMLTableElement> & RefAttributes<HTMLTableElement>
> {
  Content: typeof CardContent;
  Header: typeof CardHeader;
  Title: typeof CardTitle;
}

const Card: CardType = BaseCard as CardType;

Card.Content = CardContent
Card.Header = CardHeader
Card.Title = CardTitle

Card.displayName = "Card";

export default Card;