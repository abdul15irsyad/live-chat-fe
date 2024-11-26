'use client';

import { SendHorizontal } from 'lucide-react';
import React, {
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  useState,
} from 'react';

export const InputChat = () => {
  const [text, setText] = useState('');

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default Enter behavior
      submit();
    }
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submit();
  };

  const submit = () => {
    if (text.trim()) {
      console.log('Submitted:', { text });
      setText('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 border-t-2 border-gray-100"
    >
      <div className="max-w-screen-lg mx-auto px-3 lg:px-0 py-2">
        <div className="flex gap-3">
          <textarea
            rows={1}
            name="message"
            id="message"
            className="block w-full rounded-xl border-2 py-3 px-5 text-gray-900 placeholder:text-gray-400 text-xs md:text-sm resize-none"
            placeholder="Type message here . . ."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            onChange={handleChange}
            value={text}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            disabled={text.trim() === ''}
            className="group peer px-4 py-2 bg-blue-500 not-disabled:hover:bg-blue-600 disabled:bg-slate-400 text-white rounded-xl"
          >
            <SendHorizontal
              size={20}
              className={`${text.trim() === '' ? '' : 'group-hover:scale-110'}`}
            />
          </button>
        </div>
      </div>
    </form>
  );
};
