import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = ({ meta, typing }: { meta: string; typing?: string }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-10 p-3">
      <div className="flex justify-between items-center gap-4 px-3 py-1 max-w-screen-lg mx-auto">
        <div className="flex-1">
          <h1 className="md:text-3xl text-2xl font-bold">Live Chat</h1>
          <span className="text-xs md:text-sm">
            {typing ? (
              <span className="text-green-600">{`${typing} typing...`}</span>
            ) : (
              meta
            )}
          </span>
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
