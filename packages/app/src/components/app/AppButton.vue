<script lang="ts">
import { computed, defineComponent, h, ref } from "vue";
import { RouterLink } from "vue-router";

type Indexable<T = any> = {
    [key: string]: T;
};

export default defineComponent({
    emits: ["click"],
    props: {
        type: {
            type: String,
            default: "button",
        },
        color: {
            type: String as () => "primary" | "secondary" | "outline",
            default: "primary",
        },
        rounded: {
            type: String as () => "full" | "base" | "none",
            default: "base",
        },
        size: {
            type: String as () => "xs" | "sm" | "md" | "lg",
            default: "md",
        },
        fullWidth: {
            type: Boolean,
            default: false,
        },
        onlyIcon: {
            type: Boolean,
            default: false,
        },
        to: {
            type: String,
            default: null,
        },
        href: {
            type: String,
            default: null,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit, slots }) {
        const hover = ref(false);
        const ButtonColor: Indexable<string> = {
            primary:
                "bg-blue text-neutral-50 border border-blue hover:bg-blue/80",
            secondary: "bg-neutral-50 text-blue border border-neutral-50",
            outline:
                "bg-transparent text-current border border-neutral-500 hover:opacity-80",
            disabled: "border border-transparent",
        };
        const ButtonSizeIcon: Indexable<string> = {
            xs: "w-8 h-8 text-xs",
            sm: "w-10 h-10 text-sm",
            md: "w-12 h-12 text-base",
            lg: "w-14 h-14 text-lg",
        };
        const ButtonSizeDefault: Indexable<string> = {
            xs: "h-8 text-xs",
            sm: "h-10 text-sm",
            md: "h-12 text-base",
            lg: "h-14 text-lg",
        };
        const ButtonSpacing: Indexable<string> = {
            xs: "py-1 px-2 space-x-1",
            sm: "py-2 px-3 space-x-2",
            md: "py-3 px-6 space-x-2",
            lg: "py-6 px-8 space-x-2",
        };
        const ButtonRounded: Indexable<string> = {
            none: "rounded-none",
            base: "rounded",
            full: "rounded-full",
        };

        const classesButton = computed(() => [
            `relative inline-flex items-center transition duration-200 font-semibold`,
            ButtonRounded[props.rounded],
            ButtonColor[props.disabled ? "disabled" : props.color],
            !props.onlyIcon && ButtonSpacing[props.size],
            props.onlyIcon
                ? ButtonSizeIcon[props.size]
                : ButtonSizeDefault[props.size],
            props.onlyIcon ? "justify-center" : "justify-between",
            props.fullWidth && "w-full",
            !(props.disabled || props.loading)
                ? "cursor-pointer active:scale-[97%]"
                : "cursor-default",
        ]);

        const classesLoader = computed(() => [
            `absolute inset-0 w-full h-full flex items-center justify-center transition duration-200`,
            props.loading ? "block" : "hidden",
            ButtonRounded[props.rounded],
            ButtonColor[props.color],
        ]);

        const isRouterLink = !!props.to;
        const isAnchorLink = !!props.href;
        const isRouterOrAnchorLink = isRouterLink || isAnchorLink;
        const tag: any = isAnchorLink
            ? "a"
            : isRouterLink
            ? RouterLink
            : "button";
        const loadingNode = () =>
            h("span", { class: classesLoader.value }, h("span"));
        return () =>
            h(
                tag,
                {
                    hover: hover.value,
                    type: !isRouterOrAnchorLink ? props.type : undefined,
                    "aria-disabled": props.disabled === true ? true : undefined,
                    disabled: props.disabled,
                    target: isAnchorLink ? "_blank" : undefined,
                    to: isRouterLink ? props.to : undefined,
                    href: isRouterOrAnchorLink
                        ? props.href || props.to
                        : undefined,
                    class: classesButton.value,
                    onMouseenter: () => {
                        hover.value = true;
                    },
                    onMouseleave: () => {
                        hover.value = false;
                    },
                    onClick: (e: Event) => {
                        if (!(props.disabled || props.loading)) {
                            emit("click", e);
                        }
                    },
                },
                {
                    default: () => [
                        slots.default && slots.default(),
                        props.loading && loadingNode(),
                    ],
                }
            );
    },
});
</script>
