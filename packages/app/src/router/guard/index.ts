import { Router } from "vue-router";
import { createMobileMenuGuard } from "@/router/guard/mobileMenuGuard";

export function setupRouterGuard(router: Router) {
    createMobileMenuGuard(router);
}
