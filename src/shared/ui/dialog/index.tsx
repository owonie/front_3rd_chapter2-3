import { Dialog as BaseDialog } from "./Dialog"
import { DialogClose } from "./DialogClose"
import { DialogContent } from "./DialogContent.tsx"
import { DialogHeader } from "./DialogHeader"
import { DialogOverlay } from "./DialogOverlay"
import { DialogTitle } from "./DialogTitle"
import { DialogPortal } from "./DialogPortal"
import { DialogTrigger } from "./DialogTrigger"
import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"


interface DialogType
  extends ForwardRefExoticComponent<HTMLAttributes<HTMLTableElement> & RefAttributes<HTMLTableElement>> {
  Close: typeof DialogClose
  Content: typeof DialogContent
  Header: typeof DialogHeader
  Overlay: typeof DialogOverlay
  Portal: typeof DialogPortal
  Title: typeof DialogTitle
  Trigger: typeof DialogTrigger
}

const Dialog: DialogType = BaseDialog as DialogType

Dialog.Close = DialogClose
Dialog.Content = DialogContent
Dialog.Header = DialogHeader
Dialog.Overlay = DialogOverlay
Dialog.Portal = DialogPortal
Dialog.Title = DialogTitle
Dialog.Trigger = DialogTrigger

Dialog.displayName = "Dialog";

export default Dialog
