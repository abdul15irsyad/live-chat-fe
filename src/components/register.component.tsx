'use client';

import { useChatStore } from '@/hooks/use-chat-store';
import { axiosAPI } from '@/utils/axios-api.util';
import { errorHandler } from '@/utils/error.util';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';

export const Register = () => {
  const { setName } = useChatStore();
  const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState<Record<string, string>>({
    name: '',
  });
  const [error, setError] = useState<Record<string, string>>({});

  const {
    mutateAsync,
    error: errorRegister,
    isPending: loadingRegister,
  } = useMutation({
    mutationKey: ['register'],
    mutationFn: async ({ name }: { name: string }) => {
      const response = await axiosAPI.post<{ message: string; data: string[] }>(
        '/register',
        {
          name,
        },
      );
      return response.data;
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError({});
    if (form.name !== '') {
      if (form.name.length < 3) {
        setError(() => ({
          name: 'must be greater than or equal to 3 characters',
        }));
        return;
      }
      await mutateAsync({ name: form.name });
      setName(form.name);
    }
  };

  useEffect(() => {
    setError({});
  }, [form, setError]);

  useEffect(() => {
    const error = errorRegister;
    if (!error) return;
    errorHandler({ error, setError, enqueueSnackbar });
  }, [errorRegister, enqueueSnackbar]);

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-100 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex h-dvh items-center justify-center p-4 sm:items-center sm:p-0">
          <div className="relative w-full transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg p-5">
            <form onSubmit={handleSubmit}>
              <h3
                className="text-base font-semibold text-gray-900 mb-2"
                id="modal-title"
              >
                First, set your name
              </h3>
              <input
                type="text"
                disabled={loadingRegister}
                className={`border border-gray-300 text-gray-900 ${error?.name ? 'border-red-500 outline-red-500' : ''} text-sm rounded-lg block w-full p-2.5`}
                placeholder="your name, example: John Doe"
                value={form.name}
                onChange={(e) =>
                  setForm((state) => ({ ...state, name: e.target.value }))
                }
              />
              {error?.name && (
                <small className="text-xs pl-3 text-red-500">
                  {error?.name}
                </small>
              )}
              <div className="flex justify-end mt-10">
                <button
                  type="submit"
                  disabled={form.name === '' || loadingRegister}
                  className="relative inline-flex rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {loadingRegister && (
                    <Image
                      src="/animations/loading-3.svg"
                      alt="loading"
                      width={20}
                      height={20}
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        margin: '0 auto',
                      }}
                    />
                  )}
                  <span
                    style={{
                      visibility: loadingRegister ? 'hidden' : 'visible',
                    }}
                  >
                    Start Chatting
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
