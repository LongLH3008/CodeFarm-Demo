import { create } from "zustand";
import { textSizesConstant } from "../constants/learning";

const learningSetting = create<TLearningSetting>((set) => ({
    expand: true,
    layout: 'rtl',
    sidebar: true,
    textSize: textSizesConstant[2],
    theme: 'light',
    expandChange: (expand) => set({ expand: !expand }),
    layoutChange: (layout) => set({ layout }),
    toggleSidebar: (toggle) => set({ sidebar: !toggle }),
    changeTextSize: (size) => {
        set((prev) => {
            const currentIndex = textSizesConstant.indexOf(prev.textSize);
            if (size === 'bigger' && currentIndex < textSizesConstant.length - 1) return { textSize: textSizesConstant[currentIndex + 1] };
            if (size === 'smaller' && currentIndex > 0) return { textSize: textSizesConstant[currentIndex - 1] };
            return {}
        })
    },
    changeTheme: (theme) => set({ theme }),
    loadingConfig: () => {

    }
}))

export default learningSetting;