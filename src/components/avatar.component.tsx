export const Avatar = ({
  name,
  size = 'md',
}: {
  name: string;
  size?: 'sm' | 'md';
}) => {
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center ${size === 'sm' ? 'w-6 h-6 text-xs' : 'w-8 h-8 md:w-9 md:h-9 text-md'} rounded-full bg-blue-500 text-white font-semibold`}
    >
      {name?.split('')?.[0]?.toUpperCase()}
    </div>
  );
};
