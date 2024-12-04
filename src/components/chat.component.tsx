import dayjs from 'dayjs';
import { Avatar } from './avatar.component';

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
        isSend ? 'bg-green-200' : 'bg-white'
      } p-3.5 md:py-3 md:px-3 ${
        isSend
          ? 'rounded-tl-xl rounded-tr-none rounded-bl-xl rounded-br-xl'
          : 'rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-xl'
      }`}
    >
      {!isSend && (
        <h5 className="font-bold text-xs mb-1 select-none">{name}</h5>
      )}
      <div className="flex flex-wrap justify-end gap-x-5">
        <p
          className="text-xs md:text-sm text-gray-900 mb-1"
          dangerouslySetInnerHTML={{ __html: message }}
        ></p>
        <div className="flex gap-1 text-xxs justify-end text-gray-400 self-end select-none">
          {isToday ? null : isYesterday ? (
            <>
              <span>Yesterday</span>
              <span>|</span>
            </>
          ) : (
            <>
              <span>{date}</span>
              <span>|</span>
            </>
          )}
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};
