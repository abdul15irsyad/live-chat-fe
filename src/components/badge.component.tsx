import { IChat } from '@/hooks/use-chat-store';

export const Badge = (badge: IChat & { type: 'badge' }) => {
  return (
    <div className="flex gap-1 w-fit mx-auto bg-gray-200 px-1.5 py-1 text-xs rounded-md">
      <span className="font-bold">{badge.name}</span>
      <span>{badge.event}</span>
    </div>
  );
};
