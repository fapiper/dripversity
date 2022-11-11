import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import DiscordIcon from "@/components/icons/DiscordIcon.vue";

const home = {
    Home: "/#home",
    Rarity: "/#rarity",
    Story: "/#story",
    Team: "/#team",
    FAQ: "/#faq",
};

const socials = {
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

const support = {
    "How to create a wallet": "/support/getting-started/how-to-create-a-wallet",
    "How to Mint": "/support/getting-started/how-to-src",
};

const legals = {
    "Terms of Service": "/support/legals/terms-of-service",
    "Privacy Policy": "/support/legals/privacy-policy",
};

export const routes = {
    home,
    socials,
    support,
    legals,
};
