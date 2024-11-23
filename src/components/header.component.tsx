import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = ({ meta, typing }: { meta: string; typing?: string }) => {
  return (
    <div className="bg-white">
      <div className="flex items-center p-3 lg:px-0 max-w-screen-lg mx-auto">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <Image
              src="/images/chat.png"
              width={1080}
              height={1080}
              alt="chat logo"
              className="w-6 h-6"
            />
            <h1 className="md:text-2xl text-xl font-bold">Live Group Chat</h1>
          </div>
          <h6 className="text-xs md:text-sm">
            {typing ? (
              <span className="text-green-600">{`${typing} typing...`}</span>
            ) : (
              meta
            )}
          </h6>
        </div>
        <Link href="https://github.com/abdul15irsyad" target="_blank">
          <Image
            src="/images/github.svg"
            alt="github"
            width={32}
            height={32}
            className="md:w-8 md:h-8 w-7 h-7"
          />
        </Link>
      </div>
    </div>
  );
};
