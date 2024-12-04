import { IChat } from '@/hooks/use-chat-store';

export const Badge = (badge: IChat & { type: 'badge' }) => {
  return (
    <div className="w-fit mx-auto bg-gray-200 px-1.5 py-1 text-xs rounded-md select-none">
      <span className="font-bold">{badge.name}</span> <span>{badge.event}</span>
    </div>
  );
};
