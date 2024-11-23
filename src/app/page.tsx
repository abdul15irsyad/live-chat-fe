import { Chats } from "@/components/chats.component";
import { Header } from "@/components/header.component";
import { InputChat } from "@/components/input-chat.component";

export default () => {
  return (
    <div className="fixed flex flex-col gap-2 bottom-0 left-0 right-0 h-screen">
      <Header meta="You" typing="James" />
      <Chats />
      <InputChat />
    </div>
  );
};
