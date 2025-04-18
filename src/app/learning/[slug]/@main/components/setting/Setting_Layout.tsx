import learningSetting from '@/core/store/learningSetting';
import {
  LayoutDashboard,
  PanelLeft,
  PanelLeftDashed,
  PanelRight,
  PanelsTopLeft,
} from 'lucide-react';
import SettingButton from './SettingButton';

const Setting_Layout = () => {
  const layout = learningSetting().layout;
  const changeLayout = learningSetting().layoutChange;
  const sidebar = learningSetting().sidebar;
  const changeSidebar = learningSetting().toggleSidebar;

  return (
    <section className="grid grid-cols-5 items-start">
      <div className="col-span-2 flex items-center gap-3 font-[500]">
        <span className="size-9 grid place-items-center rounded-md bg-(--lms-foreground)">
          <LayoutDashboard strokeWidth={1.5} size={20} className="text-(--lms-text)" />
        </span>
        Bố cục
      </div>
      <div className="col-span-3 grid grid-cols-2 gap-2">
        <div className="grid grid-cols-2 gap-2 border border-(--lms-border) rounded-md p-2 relative pt-8">
          <span className="text-[12px] absolute top-2 left-2 font-[500]">Mục lục</span>
          <SettingButton
            isActive={!sidebar}
            disabled={!sidebar}
            onClick={() => changeSidebar(sidebar)}
          >
            <PanelLeftDashed strokeWidth={1.5} size={18} />
            Ẩn
          </SettingButton>
          <SettingButton
            isActive={sidebar}
            disabled={sidebar}
            onClick={() => changeSidebar(sidebar)}
          >
            <PanelsTopLeft strokeWidth={1.5} size={18} />
            Hiện
          </SettingButton>
        </div>
        <div
          className={`grid grid-cols-2 gap-2 border border-(--lms-border) rounded-md p-2 duration-200 relative pt-8 ${sidebar ? '' : 'opacity-30'}`}
        >
          <span className="text-[12px] absolute top-2 left-2 font-[500]">Hướng bố cục</span>
          <SettingButton
            isActive={layout === 'ltr'}
            disabled={!sidebar}
            onClick={() => changeLayout('ltr')}
          >
            <PanelLeft strokeWidth={1.5} size={18} />
            LTR
          </SettingButton>
          <SettingButton
            isActive={layout === 'rtl'}
            disabled={!sidebar}
            onClick={() => changeLayout('rtl')}
          >
            <PanelRight strokeWidth={1.5} size={18} />
            RTL
          </SettingButton>
        </div>
      </div>
    </section>
  );
};

export default Setting_Layout;
