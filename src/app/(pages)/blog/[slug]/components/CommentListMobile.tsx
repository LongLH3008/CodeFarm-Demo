import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ReactNode } from 'react';
import CommentList from './CommentList';

type Props = {
  trigger: ReactNode;
};

const CommentListMobile = ({ trigger }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogHeader>
        <DialogTitle />
      </DialogHeader>
      <DialogContent className="max-w-[95%] h-[95dvh] !p-0 overflow-hidden">
        <div className="w-full h-full overflow-hidden relative p-3">
          <CommentList />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentListMobile;
