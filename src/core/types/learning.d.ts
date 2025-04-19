type TLessonLayout = 'rtl' | 'ltr';
type TChangeTextSize = 'bigger' | 'smaller';
type TLearningThemes = 'dark' | 'light'

type TLearningThemeConstant = {
    label: string;
    colors: string[];
};

type TBlockCodeThemeConstant = {
    [key: string]: React.CSSProperties;
}

interface TLearningSetting {
    // theme: 'light' | 'dark' | 'custom';
    expand: boolean;
    expandChange: (change: boolean) => void;

    layout: TLessonLayout
    layoutChange: (layout: TLessonLayout) => void;

    sidebar: boolean,
    toggleSidebar: (toggle: boolean) => void;

    textSize: number,
    changeTextSize: (size: TChangeTextSize) => void;

    theme: TLearningThemes;
    changeTheme: (theme: TLearningThemes) => void;

    setupConfig: (config: Partial<TLearningSetting>) => void;
}

