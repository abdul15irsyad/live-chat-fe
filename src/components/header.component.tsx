import { useChatStore } from '@/hooks/use-chat-store';
import Image from 'next/image';
// import Link from 'next/link';
import React, { useState } from 'react';
import { Avatar } from './avatar.component';
import { Modal } from './modal.component';

export const Header = () => {
  const { name, clientNames, typings } = useChatStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            {typings?.length > 0 ? (
              <span className="inline text-green-600">{`${typings?.[0]} typing...`}</span>
            ) : (
              <>
                <span
                  className="inline text-gray-400 overflow-hidden line-clamp-1 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  {clientNames?.join(', ')}
                </span>
                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                >
                  <h2 className="text-lg font-bold">Room Member</h2>
                  <div>
                    {clientNames.map((name, index) => (
                      <AvatarWithName
                        key={index}
                        name={name}
                        className="px-0 hover:bg-transparent"
                      />
                    ))}
                  </div>
                </Modal>
              </>
            )}
          </h6>
        </div>
        <div className="flex">
          <AvatarWithName name={name!} />
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

const AvatarWithName = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => (
  <div
    className={`${className} flex items-center gap-1.5 p-2 px-2.5 text-sm hover:bg-gray-100 rounded-md`}
  >
    <Avatar name={name!} size="sm" />
    <div className="font-bold">{name}</div>
  </div>
);
