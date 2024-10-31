import { Select as BaseSelect } from "./Select"
import { SelectContent } from "@radix-ui/react-select"
import { SelectGroup } from "./SelectGroup"
import { SelectItem } from "./SelectItem"
import { SelectTrigger } from "./SelectTrigger"
import { SelectValue } from "./SelectValue"
import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface SelectType
  extends ForwardRefExoticComponent<HTMLAttributes<HTMLTableElement> & RefAttributes<HTMLTableElement>> {
  Content: typeof SelectContent
  Group: typeof SelectGroup
  Item: typeof SelectItem
  Trigger: typeof SelectTrigger
  Value: typeof SelectValue
}

const Select: SelectType = BaseSelect as SelectType

Select.Content = SelectContent
Select.Group = SelectGroup
Select.Item = SelectItem
Select.Trigger = SelectTrigger
Select.Value = SelectValue

Select.displayName = "Select"

export default Select
