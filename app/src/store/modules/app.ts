import { defineStore } from "pinia";
import { store } from "@/store";

interface AppState {
    // show mobile menu
    showMobileMenu: boolean;
    // show mint modal
    showMintModal: boolean;
}

export const useAppStore = defineStore({
    id: "app",
    state: (): AppState => ({
        showMobileMenu: false,
        showMintModal: false,
    }),
    getters: {
        getShowMobileMenu(): boolean {
            return this.showMobileMenu;
        },
        getShowMintModal(): boolean {
            return this.showMintModal;
        },
    },
    actions: {
        setShowMobileMenu(show: boolean): void {
            this.showMobileMenu = show;
        },
        setShowMintModal(show: boolean): void {
            this.showMintModal = show;
        },
        toggleMobileMenu() {
            this.setShowMobileMenu(!this.showMobileMenu);
        },
    },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
    return useAppStore(store);
}
