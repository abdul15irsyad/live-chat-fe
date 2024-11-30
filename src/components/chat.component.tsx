import dayjs from 'dayjs';

export const Chat = (props: {
  name: string;
  message: string;
  timestamp: Date;
  isSend?: boolean;
}) => {
  const { name, isSend } = props;
  return (
    <div className={`flex ${isSend ? 'justify-end' : 'justify-start'}`}>
      <div className="flex gap-3" style={{ maxWidth: isSend ? '80%' : '90%' }}>
        {!isSend && <Avatar name={name} />}
        <ChatBubble {...props} />
      </div>
    </div>
  );
};

const Avatar = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-shrink-0 items-center justify-center w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-blue-500 text-white text-xl font-bold">
      {name?.split('')[0]}
    </div>
  );
};

const ChatBubble = ({
  name,
  message,
  isSend,
  timestamp,
}: {
  name: string;
  message: string;
  isSend?: boolean;
  timestamp: Date;
}) => {
  const dayjsDatetime = dayjs(timestamp);
  const date = dayjs().isSame(dayjsDatetime, 'year')
    ? dayjsDatetime.format('MMM D')
    : dayjsDatetime.format('MMM D, YYYY');
  const time = dayjsDatetime.format('HH:mm');
  const isToday = dayjs().isSame(dayjsDatetime, 'date');
  const isYesterday = dayjs().subtract(1, 'day').isSame(dayjsDatetime, 'date');

  return (
    <div
      className={`flex-auto ${
        isSend ? 'bg-emerald-50' : 'bg-white'
      } p-3.5 md:py-3 md:px-3 ${
        isSend
          ? 'rounded-tl-xl rounded-tr-none rounded-bl-xl rounded-br-xl'
          : 'rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-xl'
      }`}
    >
      {!isSend && (
        <h5 className="font-bold text-xs md:text-sm lg:text-md mb-1">{name}</h5>
      )}
      <div className="flex flex-wrap justify-end gap-x-5">
        <p className="text-xs md:text-sm text-gray-900 mb-1">{message}</p>
        <div className="flex gap-1 text-xxs md:text-xs justify-end text-gray-400 self-end">
          {isToday ? null : isYesterday ? (
            <span>Yesterday</span>
          ) : (
            <span>{date}</span>
          )}
          <span>|</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};
