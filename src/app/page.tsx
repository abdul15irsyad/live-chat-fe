import { Chats } from '@/components/chats.component';
import { Header } from '@/components/header.component';
import { InputChat } from '@/components/input-chat.component';

export default () => {
  return (
    <div className="fixed flex flex-col bottom-0 left-0 right-0 h-full">
      <Header meta="You" typing="James" />
      <Chats />
      <InputChat />
    </div>
  );
};
