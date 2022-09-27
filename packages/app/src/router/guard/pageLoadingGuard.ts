import { useAppStoreWithOut } from "@/store/modules/app";
import { Router } from "vue-router";
import { promiseTimeout } from "@vueuse/core";

// Used to handle page loading status
export function createPageLoadingGuard(router: Router) {
    const appStore = useAppStoreWithOut();

    router.beforeEach(async (to, from, next) => {
        console.log({ to, from });
        if (
            to.matched.length > 0 &&
            from.matched.length > 0 &&
            to.matched[0] === from.matched[0]
            // && typeof to.matched[0]?.components.default !== 'function'
        ) {
            next();
        } else {
            await appStore.setPageLoadingAction(true);

            next();
        }
    });

    router.beforeResolve(async (to, from, next) => {
        // prevent switching route before loader show animation ends
        console.log("resolve route");
        appStore.setPageLoading(false);
        next();
    });
}
