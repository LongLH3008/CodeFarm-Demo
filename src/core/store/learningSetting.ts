import { create } from "zustand";

export const textSizes = [12, 14, 16, 18, 20];

export type Setting = {
    // theme: 'light' | 'dark' | 'custom';
    expand: boolean;
    expandChange: (change: boolean) => void;

    layout: 'rtl' | 'ltr';
    layoutChange: (layout: Setting['layout']) => void;

    sidebar: boolean,
    toggleSidebar: (toggle: boolean) => void;

    textSize: number,
    changeTextSize: (size: 'bigger' | 'smaller') => void;
}

const learningSetting = create<Setting>((set) => ({
    expand: true,
    expandChange: (expand) => set({ expand: !expand }),

    layout: 'rtl',
    layoutChange: (layout) => set({ layout }),

    sidebar: true,
    toggleSidebar: (toggle) => set({ sidebar: !toggle }),

    textSize: textSizes[2],
    changeTextSize: (size) => {
        set((prev) => {
            const currentIndex = textSizes.indexOf(prev.textSize);
            if (size === 'bigger' && currentIndex < textSizes.length - 1) return { textSize: textSizes[currentIndex + 1] };
            if (size === 'smaller' && currentIndex > 0) return { textSize: textSizes[currentIndex - 1] };
            return {}; // không đổi nếu đã ở min/max
        })
    }
}))

export default learningSetting;