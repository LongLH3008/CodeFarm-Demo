import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import learningSetting from '@/core/store/learningSetting';
import { Settings } from 'lucide-react';
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

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        data-lms-theme={theme}
        className="sm:max-w-3xl bg-(--lms-bg) !outline-none !ring-none shadow-none border-0"
      >
        <DialogHeader className="pb-5 mb-5">
          <DialogTitle className="flex items-center text-(--lms-text) gap-2 tracking-tighter">
            <Settings strokeWidth={1.5} size={17} /> Tùy chỉnh
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-10 text-(--lms-text)">
          <Setting_Text />
          <Setting_Layout />
          <Setting_Screen />
          <Setting_Theme />
        </div>
        <DialogFooter className="mt-5">
          <Button>Đặt lại mặc định</Button>
          <Button>Lưu tùy chỉnh</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
