import { SendHorizontal } from "lucide-react";
import React from "react";

export const InputChat = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto px-3 lg:px-0 pb-3">
        <div className="flex gap-3">
          <textarea
            rows={1}
            name="message"
            id="message"
            className="block w-full rounded-xl border-2 py-3 px-5 text-gray-900 placeholder:text-gray-400 md:text-sm resize-none"
            placeholder="Type message here . . ."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          <button
            type="button"
            className="group px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
          >
            <SendHorizontal size={20} className="group-hover:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
};
