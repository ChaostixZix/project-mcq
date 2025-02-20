import { type VariantProps, cva } from "class-variance-authority"

export { default as Card } from "./Card.vue"
export { default as CardHeader } from "./CardHeader.vue"
export { default as CardFooter } from "./CardFooter.vue"
export { default as CardTitle } from "./CardTitle.vue"
export { default as CardDescription } from "./CardDescription.vue"
export { default as CardContent } from "./CardContent.vue"

export const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-background",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type CardVariants = VariantProps<typeof cardVariants>