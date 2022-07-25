import DiscordIcon from "@/components/icons/DiscordIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";

export const routes = {
    Home: "/#home",
    About: "/#about",
    Explore: "/#explore",
    Creator: "/#creator",
};

export const socials = {
    Instagram: {
        href: "https://www.instagram.com/dripversityenrollment",
        icon: InstagramIcon,
    },
    Twtter: {
        href: "https://twitter.com/dripversity",
        icon: TwitterIcon,
    },
    Discord: {
        href: "https://discord.com/invite/dripversity",
        icon: DiscordIcon,
    },
};

export const legals = {
    "Terms of Service": "/terms-of-service",
    "Privacy Policy": "/privacy-policy",
};
