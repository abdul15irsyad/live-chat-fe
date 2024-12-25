import { create } from 'zustand';
// import { persist, PersistOptions, createJSONStorage } from 'zustand/middleware';
// import { dummyChats } from './dummy-chats.data';

type BaseChat = {
  timestamp: Date;
};

export type IChat = BaseChat &
  (
    | {
        type: 'chat';
        message: string;
        name: string;
        isSend: boolean;
      }
    | {
        type: 'badge';
        event: string;
        name: string;
      }
  );

interface IChatState {
  isReady: boolean;
  name?: string;
  clientNames: string[];
  chats: IChat[];
  typings: string[];
  webSocket?: WebSocket;
  setIsReady: (ready: boolean) => void;
  setName: (name: string) => void;
  setClientNames: (clientNames: string[]) => void;
  setChats: (chats: IChat[]) => void;
  addChat: (chat: IChat) => void;
  addTyping: (typing: string) => void;
  removeTyping: (typing: string) => void;
  setWebSocket: (webSocket: WebSocket) => void;
}

export const useChatStore = create<IChatState>(
  // (
  //   persist as (
  //     config: StateCreator<IChatState>,
  //     options: PersistOptions<Pick<IChatState, 'name'>>,
  //   ) => StateCreator<IChatState>
  // )(
  (set) => {
    return {
      isReady: false,
      name: undefined,
      chats: [],
      clientNames: [],
      typings: [],
      setIsReady: (isReady) => set({ isReady }),
      setName: (name) => set({ name }),
      setClientNames: (clientNames) =>
        set({ clientNames: clientNames.sort((a, b) => (a < b ? -1 : 1)) }),
      setChats: (chats) => set({ chats }),
      addChat: (chat) =>
        set((state) => {
          if (chat.type === 'chat') {
            chat.message = chat.message?.replace(/\n/g, '<br>');
          }
          return {
            chats: [...state.chats, chat],
          };
        }),
      addTyping: (typing) =>
        set((state) => {
          return !state.typings.includes(typing)
            ? { typings: [...state.typings, typing] }
            : { typings: state.typings };
        }),
      removeTyping: (typing) =>
        set((state) => ({
          typings: state.typings.filter(
            (stateTyping) => stateTyping !== typing,
          ),
        })),
      setWebSocket: (webSocket) => set({ webSocket }),
    };
  },
  //   {
  //     name: 'chat',
  //     storage: createJSONStorage(() => sessionStorage),
  //     partialize: (state) => ({ name: state.name }),
  //   },
  // ),
);
