import { SendHorizontal } from "lucide-react";
import React from "react";

export const InputChat = () => {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        name="message"
        id="message"
        className="block w-full rounded-2xl border-2 py-3 px-5 text-gray-900 placeholder:text-gray-400 md:text-sm"
        placeholder="Type message here . . ."
        autoComplete="off"
      />
      <button
        type="button"
        className="group px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl"
      >
        <SendHorizontal size={20} className="group-hover:scale-110" />
      </button>
    </div>
  );
};
