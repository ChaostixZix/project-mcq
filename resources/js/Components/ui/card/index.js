import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { defineComponent, h } from "vue";

const cardVariants = cva(
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
);

const Card = defineComponent({
  name: "Card",
  props: {
    class: { type: String },
    variant: { type: String },
  },
  setup(props, { slots }) {
    return () =>
      h(
        "div",
        {
          class: cn(cardVariants({ variant: props.variant }), props.class),
        },
        slots.default?.()
      );
  },
});

const CardHeader = defineComponent({
  name: "CardHeader",
  props: {
    class: { type: String },
  },
  setup(props, { slots }) {
    return () =>
      h(
        "div",
        {
          class: cn("flex flex-col space-y-1.5 p-6", props.class),
        },
        slots.default?.()
      );
  },
});

const CardTitle = defineComponent({
  name: "CardTitle",
  props: {
    class: { type: String },
  },
  setup(props, { slots }) {
    return () =>
      h(
        "h3",
        {
          class: cn(
            "text-2xl font-semibold leading-none tracking-tight",
            props.class
          ),
        },
        slots.default?.()
      );
  },
});

const CardDescription = defineComponent({
  name: "CardDescription",
  props: {
    class: { type: String },
  },
  setup(props, { slots }) {
    return () =>
      h(
        "p",
        {
          class: cn("text-sm text-muted-foreground", props.class),
        },
        slots.default?.()
      );
  },
});

const CardContent = defineComponent({
  name: "CardContent",
  props: {
    class: { type: String },
  },
  setup(props, { slots }) {
    return () =>
      h(
        "div",
        {
          class: cn("p-6 pt-0", props.class),
        },
        slots.default?.()
      );
  },
});

const CardFooter = defineComponent({
  name: "CardFooter",
  props: {
    class: { type: String },
  },
  setup(props, { slots }) {
    return () =>
      h(
        "div",
        {
          class: cn("flex items-center p-6 pt-0", props.class),
        },
        slots.default?.()
      );
  },
});

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};