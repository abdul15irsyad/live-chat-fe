import { Chats } from "@/components/chats.component";
import { Header } from "@/components/header.component";
import { InputChat } from "@/components/input-chat.component";

export default () => {
  return (
    <>
      <Header meta="You" typing="James" />
      <div className="container fixed bottom-0 left-0 right-0 max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center h-screen gap-3 p-3">
          <Chats />
          <InputChat />
        </div>
      </div>
    </>
  );
};
