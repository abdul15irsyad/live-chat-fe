import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const InitLoading = () => {
  return (
    <div className="w-screen h-dvh flex justify-center items-center gap-x-6 bg-gray-100">
      <DotLottieReact
        src="/animations/loading-2.lottie"
        autoplay
        loop
        style={{
          width: 64,
          height: 64,
        }}
      />
      <div className="text max-w-60">
        <h2 className="text-xl mb-2">Loading</h2>
        <p className="text-sm text-gray-400">
          this app using free tier, please wait while waking up the server
        </p>
      </div>
    </div>
  );
};
