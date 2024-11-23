import dayjs from "dayjs";
import React from "react";
import { chats } from "./chats.data";

export const Chats = () => {
  return (
    <div className="flex flex-col flex-1 gap-3 overflow-hidden px-3">
      <div className="overflow-y-auto md:pr-0 pr-2">
        <div className="flex flex-col gap-3 max-w-screen-lg mx-auto pr-2 lg:pr-0">
          {chats.map((chat, index) => (
            <Chat
              key={index}
              name={chat.name}
              message={chat.message}
              datetime={chat.datetime}
              isSelf={chat.isSelf}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Chat = ({
  name,
  message,
  datetime,
  isSelf = false,
}: {
  name: string;
  message: string;
  datetime: string;
  isSelf?: boolean;
}) => {
  const dayjsDatetime = dayjs(datetime);
  const date = dayjs().isSame(dayjsDatetime, "year")
    ? dayjsDatetime.format("MMM DD")
    : dayjsDatetime.format("MMM DD, YYYY");
  const time = dayjsDatetime.format("HH:mm");
  const isToday = dayjs().isSame(dayjsDatetime, "date");
  const isYesterday = dayjs().subtract(1, "day").isSame(dayjsDatetime, "date");
  return (
    <div className={`flex ${isSelf ? "justify-end" : "justify-start"}`}>
      <div className="flex gap-3" style={{ maxWidth: isSelf ? "80%" : "90%" }}>
        {!isSelf && (
          <div className="flex flex-shrink-0 items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500 text-white text-xl font-bold">
            {name?.split("")[0]}
          </div>
        )}
        <div
          className={`flex-auto ${
            isSelf ? "bg-emerald-50" : "bg-white"
          } p-3.5 md:py-3 md:px-3 ${
            isSelf
              ? "rounded-tl-lg rounded-tr-none rounded-bl-lg rounded-br-lg"
              : "rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-lg"
          }`}
        >
          {!isSelf && <h5 className="font-bold">{name}</h5>}
          <div className="flex flex-wrap justify-end gap-x-5">
            <p className="text-sm text-gray-900 mb-1">{message}</p>
            <div
              className="flex gap-1 justify-end text-gray-400 self-end"
              style={{ fontSize: "11px" }}
            >
              {isToday ? null : isYesterday ? (
                <>
                  <span>Yesterday</span>
                  <span>-</span>
                </>
              ) : (
                <>
                  <span>{date}</span>
                  <span>-</span>
                </>
              )}
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Badge = () => <div>{}</div>;
