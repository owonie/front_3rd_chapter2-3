import { forwardRef } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

export const DialogClose = forwardRef<HTMLButtonElement,DialogPrimitive.DialogCloseProps>(
  ({ className,children, ...props }:DialogPrimitive.DialogCloseProps, ref) => (
    <DialogPrimitive.Close
      ref={ref}
      className={`absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground ${className}`}
      {...props}
    >
      {children}
    </DialogPrimitive.Close>
  )
);