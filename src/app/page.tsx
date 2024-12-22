'use client';

import { Chats } from '@/components/chats.component';
import { Header } from '@/components/header.component';
import { InputChat } from '@/components/input-chat.component';
import { InitLoading } from '@/components/init-loading.component';
import { Register } from '@/components/register.component';
import { useChatStore } from '@/hooks/use-chat-store';
import { axiosAPI } from '@/utils/axios-api.util';
import { useQuery } from '@tanstack/react-query';
// import { useHydrationZustand } from '@/hooks/use-hydration';
import { useCallback, useEffect } from 'react';

export default () => {
  const { name, addChat, setWebSocket, setClientNames } = useChatStore();
  // const isHydrated = useHydrationZustand(useChatStore);

  const getAllClient = useCallback(async () => {
    const response = await axiosAPI.get<{
      message: string;
      data: { clientNames: string[] };
    }>('/clients');
    return response.data;
  }, []);

  useEffect(() => {
    if (!name) return;
    const socket = new WebSocket(
      `${process.env.NEXT_PUBLIC_WEBSOCKET_BASE_URL}/ws?name=${name}`,
    );
    setWebSocket(socket);

    socket.onopen = async () => {
      addChat({
        type: 'badge',
        event: 'joined',
        name: 'you',
        timestamp: new Date(),
      });
      const { data } = await getAllClient();
      setClientNames(data.clientNames);
    };

    socket.onmessage = async (event) => {
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
        const { data } = await getAllClient();
        setClientNames(data.clientNames);
      }
    };

    return () => socket.close();
  }, [name, getAllClient, setWebSocket, addChat, setClientNames]);

  const { isLoading: isLoadingRoot } = useQuery({
    queryKey: ['root'],
    queryFn: async () => {
      const response = await axiosAPI.get('/');
      return response.data;
    },
  });

  // const { data: allClientNamesResponse, refetch } = useQuery({
  //   queryKey: ['allClientNames'],
  //   queryFn: async () => {
  //     const response = await axiosAPI.get('/clients');
  //     return response.data;
  //   },
  //   enabled: false,
  //   staleTime: 0,
  // });

  // useEffect(() => {
  //   refetch();
  // }, [refetch, webSocket]);

  // useEffect(() => {
  //   setClientNames(allClientNamesResponse?.data?.clientNames);
  // }, [allClientNamesResponse, setClientNames]);

  // if (!isHydrated) return 'loading';

  if (isLoadingRoot) return <InitLoading />;

  if (!name) return <Register />;

  return (
    <div className="fixed flex flex-col bottom-0 left-0 right-0 h-dvh">
      <Header />
      <Chats />
      <InputChat />
    </div>
  );
};
