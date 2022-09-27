import DiscordIcon from "@/components/icons/DiscordIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";

export const routes = {
    Home: "/#home",
    Rarity: "/#rarity",
    Story: "/#story",
    Team: "/#team",
    FAQ: "/#faq",
};

export const socials = {
    Instagram: {
        baseUrl: "https://www.instagram.com",
        account: "dripversitynft",
        icon: InstagramIcon,
    },
    Twtter: {
        baseUrl: "https://twitter.com",
        account: "dripversity",
        icon: TwitterIcon,
    },
    Discord: {
        baseUrl: "https://discord.com/invite",
        account: "dripversity",
        icon: DiscordIcon,
    },
};

export const legals = {
    "Terms of Service": "/terms-of-service",
    "Privacy Policy": "/privacy-policy",
};
