<template>
    <ContainerSection id="team">
        <div class="grid col-span-1 lg:grid-cols-5 gap-8">
            <div
                class="lg:col-span-2 space-y-6 lg:text-right lg:p-8"
                v-animate.stagger
            >
                <h2 class="title">Building a Team</h2>
                <div class="space-y-2">
                    <p class="lg:text-end">
                        Surround yourself with people that you can trust and who
                        share the same work ethic as you do. That was our
                        approach which kept us going even with ongoing
                        challenges and errors which brought quite some
                        headaches. <br />In the end we made it work - welcome to
                        <DripversityIcon class="text-dripversity" />.
                    </p>
                </div>
            </div>

            <div
                class="lg:col-span-3 grid grid-cols-2 lg:grid-cols-3"
                v-animate.stagger
            >
                <article
                    v-for="(member, i) in team"
                    :key="member.name"
                    class="flex flex-col p-4 border-b border-l border-neutral-800"
                    :class="[
                        (i + 1) % 3 === 0 && 'lg:border-r',
                        (i + 1) % 2 === 0 && 'border-r lg:border-r-0',
                        i < 2 && 'border-t',
                        i < 3 && 'lg:border-t',
                        i >= 6 - 2 && 'border-b',
                        i >= 6 - 3 && 'lg:border-b',
                    ]"
                >
                    <img
                        class="w-full aspect-square w-full rounded"
                        :src="member.image"
                        :alt="member.name"
                    />
                    <div class="pt-4 text-center">
                        <h5 class="font-semibold">
                            {{ member.name }}
                        </h5>
                        <span
                            class="text-neutral-200/50 uppercase text-xs leading-none"
                            >{{ member.role }}</span
                        >
                    </div>
                </article>
            </div>
        </div>
    </ContainerSection>
</template>

<script lang="ts" setup>
import ContainerSection from "@/components/section/ContainerSection.vue";
import DripversityIcon from "@/components/icons/DripversityIcon.vue";

const team = [
    {
        name: "Blockschmidt",
        role: "3D Artist",
        image: require("@/assets/images/team/blockschmidt.png"),
    },
    {
        name: "Aaron",
        role: "3D Environment Artist",
        image: require("@/assets/images/team/aaron.png"),
    },
    {
        name: "Videokidd",
        role: "3D Animation Artist",
        image: require("@/assets/images/team/videokidd.png"),
    },
    {
        name: "Chris",
        role: "Typedesign",
        image: require("@/assets/images/team/chris.png"),
    },
    {
        name: "Flori",
        role: "UI/UX Designer",
        image: require("@/assets/images/team/flori.png"),
    },
    {
        name: "Fabi",
        role: "Engineer",
        image: require("@/assets/images/team/fabi.png"),
    },
];
</script>
