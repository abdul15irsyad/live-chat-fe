import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = ({ meta, typing }: { meta: string; typing?: string }) => {
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
          <h6 className="invisible text-xxs md:text-xs">
            {typing ? (
              <span className="text-green-600">{`${typing} typing...`}</span>
            ) : (
              meta
            )}
          </h6>
        </div>
        <div className="flex">
          <Link href="https://github.com/abdul15irsyad" target="_blank">
            <Image
              src="/images/github.svg"
              alt="github"
              width={32}
              height={32}
              className="md:w-6 md:h-6 w-6 h-6"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
