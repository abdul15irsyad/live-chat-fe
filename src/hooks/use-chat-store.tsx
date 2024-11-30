import { create, StateCreator } from 'zustand';
import { persist, PersistOptions, createJSONStorage } from 'zustand/middleware';
import { dummyChats } from './dummy-chats.data';

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
  name?: string;
  setName: (name: string) => void;
  chats: IChat[];
  setChats: (chats: IChat[]) => void;
}

export const useChatStore = create<IChatState>(
  (
    persist as (
      config: StateCreator<IChatState>,
      options: PersistOptions<Pick<IChatState, 'name'>>,
    ) => StateCreator<IChatState>
  )(
    (set) => {
      return {
        name: undefined,
        setName: (name) => set({ name }),
        // chats: [],
        chats: [
          {
            type: 'badge',
            event: 'joined',
            name: 'you',
            timestamp: new Date(),
          },
          ...dummyChats,
        ],
        setChats: (chats) => set({ chats }),
      };
    },
    {
      name: 'chat',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ name: state.name }),
    },
  ),
);
