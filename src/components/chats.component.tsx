import React from "react";

export const Chats = () => {
  return (
    <div className="flex flex-col gap-3 flex-1 z-0 pt-10 justify-end max-h-screen overflow-y-scroll">
      {[...Array(10)].map((_, index) => (
        <Chat
          key={index}
          name="James"
          message="In Tailwind CSS, you can achieve custom border-radius values using the rounded utilities. To replicate the specific border-radius value of 0px 1rem 1rem 1rem (which means the top-left corner is 0px, and the other corners have a 1rem radius), you can combine different classes for individual corners."
        />
      ))}
    </div>
  );
};

const Chat = ({ name, message }: { name: string; message: string }) => {
  return (
    <div className="flex w-5/6 gap-3">
      <div className="flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-xl font-bold">
        {name?.split("")[0]}
      </div>
      <div className="flex-auto bg-white p-3.5 md:p-4 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
        <h5 className="font-bold">{name}</h5>
        <p className="text-sm text-gray-900">{message}</p>
      </div>
    </div>
  );
};
