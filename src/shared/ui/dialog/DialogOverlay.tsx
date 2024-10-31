import * as DialogPrimitive from "@radix-ui/react-dialog"
import { DialogPortal } from "./DialogPortal.tsx"

export const DialogOverlay = ({ ...props }: DialogPrimitive.DialogOverlayProps) => (
  <DialogPrimitive.Overlay
    className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    {...props}
  />
)

DialogPortal.displayName = DialogPrimitive.Overlay.displayName
