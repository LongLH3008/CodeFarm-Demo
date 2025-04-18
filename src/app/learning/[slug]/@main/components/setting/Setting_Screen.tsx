import learningSetting from '@/core/store/learningSetting';
import { Maximize, Minimize, Monitor } from 'lucide-react';
import SettingButton from './SettingButton';

const Setting_Screen = () => {
  const expand = learningSetting().expand;
  const changeExpand = learningSetting().expandChange;

  return (
    <section className="max-lg:hidden grid grid-cols-5 items-start">
      <div className="col-span-2 flex items-center gap-3 font-[500]">
        <span className="size-9 grid place-items-center rounded-md bg-(--lms-foreground)">
          <Monitor strokeWidth={1.5} size={20} className="text-(--lms-text)" />
        </span>
        Màn hình
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-2 gap-2 border border-(--lms-border) rounded-md p-2 relative pt-8">
          <span className="text-[12px] absolute top-2 left-2 font-[500]">Hiển thị</span>
          <SettingButton isActive={expand} disabled={expand} onClick={() => changeExpand(expand)}>
            <Maximize strokeWidth={1.5} size={18} />
            Phóng to
          </SettingButton>
          <SettingButton isActive={!expand} disabled={!expand} onClick={() => changeExpand(expand)}>
            <Minimize strokeWidth={1.5} size={18} />
            Thu nhỏ
          </SettingButton>
        </div>
      </div>
    </section>
  );
};

export default Setting_Screen;
