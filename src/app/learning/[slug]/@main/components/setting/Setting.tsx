import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { defaultLearningSettingConstant } from '@/core/constants/learning';
import learningSetting from '@/core/store/learningSetting';
import { Settings, X } from 'lucide-react';
import { ReactNode } from 'react';
import Setting_Layout from './Setting_Layout';
import Setting_Screen from './Setting_Screen';
import Setting_Text from './Setting_Text';
import Setting_Theme from './Setting_Theme';

type Props = {
  trigger: ReactNode;
};

export function Setting({ trigger }: Props) {
  const theme = learningSetting().theme;
  const setupConfig = learningSetting().setupConfig;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        data-lms-theme={theme}
        className="sm:max-w-3xl bg-(--lms-bg) !outline-none !ring-none shadow-none border-0 [&>button]:hidden"
      >
        <DialogHeader className="pb-5 mb-5 relative w-full">
          <DialogTitle className="flex items-center text-(--lms-text) gap-2 tracking-tighter">
            <Settings strokeWidth={1.5} size={17} /> Tùy chỉnh
          </DialogTitle>
          <DialogClose className="bg-100 ring-0 cursor-pointer rounded-sm hover:bg-(--lms-foreground) p-1 w-fit absolute top-0 right-0">
            <X strokeWidth={1.5} size={16} className="text-(--lms-text)" />
          </DialogClose>
        </DialogHeader>
        <div className="flex flex-col gap-10 text-(--lms-text)">
          <Setting_Text />
          <Setting_Layout />
          <Setting_Screen />
          <Setting_Theme />
        </div>
        <DialogFooter className="mt-5">
          <Button
            onClick={() => setupConfig(defaultLearningSettingConstant)}
            className="bg-(--lms-bg) text-(--lms-text) hover:bg-(--lms-foreground) border border-(--lms-border) active:scale-[.95]"
          >
            Đặt lại mặc định
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
