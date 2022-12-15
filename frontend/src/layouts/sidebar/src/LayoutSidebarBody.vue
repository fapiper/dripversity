<template>
    <div class="lg:col-span-3 flex-1 relative z-10">
        <div class="container-default px-0 lg:px-12 lg:pt-32 lg:pb-32">
            <div
                class="p-8 lg:p-12 bg-neutral-50 w-full max-w-4xl rounded border border-neutral-800"
                id="layout-sidebar"
            >
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
#layout-sidebar {
    @apply text-neutral-900;
}

#layout-sidebar p {
    @apply text-neutral-900;
}
</style>
