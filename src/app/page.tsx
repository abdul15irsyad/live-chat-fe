'use client';

import { Chats } from '@/components/chats.component';
import { Header } from '@/components/header.component';
import { InputChat } from '@/components/input-chat.component';
import { Register } from '@/components/register.component';
import { useChatStore } from '@/hooks/use-chat-store';
import { useHydrationZustand } from '@/hooks/use-hydration';
import { useEffect } from 'react';

export default () => {
  const { name, addChat, setWebSocket } = useChatStore();
  const isHydrated = useHydrationZustand(useChatStore);

  useEffect(() => {
    if (!name) return;
    const socket = new WebSocket(`ws://localhost:5010/ws?name=${name}`);
    setWebSocket(socket);

    socket.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      if (payload.type === 'message') {
        addChat({
          type: 'chat',
          message: payload.data.message,
          name: payload.client.name,
          timestamp: new Date(),
          isSend: false,
        });
      } else if (['joined', 'left'].includes(payload.type)) {
        addChat({
          type: 'badge',
          name: payload.data.name,
          event: payload.type,
          timestamp: new Date(),
        });
      }
    };

    return () => socket.close();
  }, [name, setWebSocket, addChat]);

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
