import React from 'react';
import { chats } from './chats.data';
import { Chat } from './chat.component';

export const Chats = () => {
  return (
    <div className="flex flex-col flex-1 overflow-hidden px-3">
      <div className="overflow-y-auto md:pr-0 pr-2 py-2">
        <div className="flex flex-col gap-y-3 max-w-screen-lg mx-auto pr-2 lg:pr-0">
          {chats.map((chat, index) => (
            <Chat
              key={index}
              name={chat.name}
              message={chat.message}
              datetime={chat.datetime}
              isSend={chat.isSend}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
