'use client';

import { useChatStore } from '@/hooks/use-chat-store';
import React from 'react';

export const Register = () => {
  const { setName } = useChatStore();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    if (name) setName(name.toString());
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0">
          <div className="relative w-full transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg p-5">
            <form onSubmit={handleSubmit}>
              <h3
                className="text-base font-semibold text-gray-900 mb-2"
                id="modal-title"
              >
                Set your name first
              </h3>
              <input
                type="text"
                name="name"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="your name, example: John Doe"
              />
              <div className="flex justify-end mt-10">
                <button
                  type="submit"
                  className="inline-flex rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  Start Chatting
                </button>
                {/* <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
