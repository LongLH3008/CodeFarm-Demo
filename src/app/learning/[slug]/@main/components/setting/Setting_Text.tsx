import { textSizesConstant } from '@/core/constants/learning';
import learningSetting from '@/core/store/learningSetting';
import { ALargeSmall, Minus, Plus } from 'lucide-react';
import SettingButton from './SettingButton';

const Setting_Text = () => {
  const textSize = learningSetting().textSize;
  const changeTextSize = learningSetting().changeTextSize;

  return (
    <section className="grid grid-cols-5">
      <div className="col-span-2 flex items-center gap-3 font-[500]">
        <span className="size-9 grid place-items-center rounded-md bg-(--lms-foreground)">
          <ALargeSmall strokeWidth={1.5} size={20} className="text-(--lms-text)" />
        </span>
        Cỡ chữ
      </div>
      <div className="col-span-3 flex items-center gap-2 border border-(--lms-border) rounded-md p-1 w-fit">
        <SettingButton
          disabled={textSize === textSizesConstant[0]}
          onClick={() => changeTextSize('smaller')}
          className="size-9 !bg-(--lms-foreground) hover:bg-(--lms-foreground)"
        >
          <Minus size={15} strokeWidth={1.5} />
        </SettingButton>
        {textSizesConstant.map((e: number, index: number) => (
          <SettingButton key={index} className="h-9 aspect-square" isActive={e === textSize}>
            {e}
          </SettingButton>
        ))}
        <SettingButton
          disabled={textSize === textSizesConstant[textSizesConstant.length - 1]}
          onClick={() => changeTextSize('bigger')}
          className="size-9 !bg-(--lms-foreground) hover:bg-(--lms-foreground)"
        >
          <Plus size={15} strokeWidth={1.5} />
        </SettingButton>
      </div>
    </section>
  );
};

export default Setting_Text;
