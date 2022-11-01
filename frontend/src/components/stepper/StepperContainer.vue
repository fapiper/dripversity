<script lang="ts">
import { defineComponent, h, unref } from "vue";
import StepperItem from "@/components/stepper/StepperItem.vue";
import { useStepper } from "@vueuse/core";

export default defineComponent({
    emits: ["click"],
    props: {
        steps: {
            type: Array,
            default: () => [],
        },
    },
    setup(props, { expose }) {
        const stepper = useStepper((props.steps as any[]).map((s) => s.id));

        expose({
            ...stepper,
        });

        return () =>
            h(
                "div",
                { class: "flex flex-col" },
                props.steps.map((step: any, i: number) => {
                    return h(
                        StepperItem,
                        {
                            index: i + 1,
                            id: unref(step.id),
                            title: unref(step.title),
                            subtitle: unref(step.subtitle),
                            error: unref(step.error),
                            isCurrent: stepper.isCurrent(stepper.at(i)),
                            isSuccess: stepper.isAfter(stepper.at(i)),
                        },
                        step.vnode
                    );
                })
            );
    },
});
</script>
