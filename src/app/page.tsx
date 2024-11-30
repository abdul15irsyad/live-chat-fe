'use client';

import { Chats } from '@/components/chats.component';
import { Header } from '@/components/header.component';
import { InputChat } from '@/components/input-chat.component';
import { Register } from '@/components/register.component';
import { useChatStore } from '@/hooks/use-chat-store';
import { useHydrationZustand } from '@/hooks/use-hydration';

export default () => {
  const { name } = useChatStore();
  const isHydrated = useHydrationZustand(useChatStore);

  if (!isHydrated) return 'loading';

  if (!name) return <Register />;

  return (
    <div className="fixed flex flex-col bottom-0 left-0 right-0 h-full">
      <Header meta="You" typing="James" />
      <Chats />
      <InputChat />
    </div>
  );
};
