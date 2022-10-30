import { App } from "vue";
import { createCurrency, CURRENCY_CONTEXT } from "@/composables/useCurrency";
import { createDRIP, DRIP_CONTEXT } from "@/composables/useDRIP";

export function setupGlobalComposables(app: App<Element>) {
    app.provide(CURRENCY_CONTEXT, createCurrency());
    app.provide(DRIP_CONTEXT, createDRIP());
}
