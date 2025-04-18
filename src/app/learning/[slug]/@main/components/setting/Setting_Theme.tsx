import { learningThemesConstant } from '@/core/constants/learning';
import learningSetting from '@/core/store/learningSetting';
import { Palette } from 'lucide-react';
import SettingButton from './SettingButton';

const Setting_Theme = () => {
  const theme = learningSetting().theme;
  const changeTheme = learningSetting().changeTheme;

  return (
    <section className="grid max-md:gap-3 md:grid-cols-5 items-start">
      <div className="col-span-2 flex items-center gap-3 font-[500]">
        <span className="size-9 grid place-items-center rounded-md bg-(--lms-foreground)">
          <Palette strokeWidth={1.5} size={20} className="text-(--lms-text)" />
        </span>
        Màu sắc
      </div>
      <div className="col-span-3">
        <div className="grid gap-2 border border-(--lms-border) rounded-md p-2 relative pt-8">
          <span className="text-[12px] absolute top-2 left-2 font-[500]">Chủ đề</span>
          {Object.keys(learningThemesConstant).map((e, index: number) => (
            <SettingButton
              disabled={theme == e}
              isActive={theme == e}
              onClick={() => changeTheme(e as TLearningThemes)}
              className="flex items-center justify-between"
              key={index}
            >
              {learningThemesConstant[e].label}
              <div className="flex items-center gap-1">
                {learningThemesConstant[e].colors.map((color, index: number) => (
                  <span
                    key={index}
                    style={{ backgroundColor: color }}
                    className="size-5 rounded-full border border-(--lms-border)"
                  />
                ))}
              </div>
            </SettingButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Setting_Theme;
