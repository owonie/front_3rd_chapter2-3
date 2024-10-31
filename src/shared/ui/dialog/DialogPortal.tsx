import * as DialogPrimitive from "@radix-ui/react-dialog"

export const DialogPortal = ({ children, ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>
)

DialogPortal.displayName = DialogPrimitive.Portal.displayName
