import { App } from "vue";
import animateDirective from "@/directives/animate";
import parallaxDirective from "@/directives/parallax";

export function setupDirectives(app: App<Element>) {
    app.directive("animate", animateDirective);
    app.directive("parallax", parallaxDirective);
}
