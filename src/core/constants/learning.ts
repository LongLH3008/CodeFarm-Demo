import { darkula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const textSizesConstant: number[] = [12, 14, 16, 18, 20];

export const defaultLearningSettingConstant: Partial<TLearningSetting> = {
    expand: true,
    textSize: textSizesConstant[2],
    layout: 'rtl',
    sidebar: true,
    theme: 'light'
}

export const blockCodeThemesConstant: Record<string, TBlockCodeThemeConstant> = {
    light: darkula,
    dark: atomDark
}

export const learningThemesConstant: Record<string, TLearningThemeConstant> = {
    light: {
        label: 'Sáng',
        colors: ['rgba(0,0,0,0.3)', '#fff', '#f4f4f5']
    },
    dark: {
        label: 'Tối',
        colors: ['rgba(0,0,0,0.6)', '#4f4f4f', '#3d3d3d']
    }
};
