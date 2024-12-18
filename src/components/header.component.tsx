import { useChatStore } from '@/hooks/use-chat-store';
import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import { Avatar } from './avatar.component';

export const Header = ({ typing }: { typing?: string }) => {
  const { name, clientNames } = useChatStore();

  return (
    <div className="bg-white shadow-md z-10">
      <div className="flex items-center p-3 lg:py-2 lg:px-0 max-w-screen-lg mx-auto">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <Image
              src="/images/chat.png"
              width={1080}
              height={1080}
              alt="chat logo"
              className="w-6 h-6"
            />
            <h1 className="md:text-xl text-lg font-bold">Room Chat</h1>
          </div>
          <h6 className="text-xxs md:text-xs">
            {typing ? (
              <span className="text-green-600">{`${typing} typing...`}</span>
            ) : (
              <span className="text-gray-400">{clientNames?.join(', ')}</span>
            )}
          </h6>
        </div>
        <div className="flex">
          <div className="flex items-center gap-1.5 p-2 px-2.5 text-sm hover:bg-gray-100 rounded-md">
            <Avatar name={name!} size="sm" />
            <div className="font-bold">{name}</div>
          </div>
          {/* <Link href="https://github.com/abdul15irsyad" target="_blank">
            <Image
              src="/images/github.svg"
              alt="github"
              width={32}
              height={32}
              className="md:w-6 md:h-6 w-6 h-6"
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
};
