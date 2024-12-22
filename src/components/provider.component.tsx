'use client';

import React, { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { closeSnackbar, SnackbarProvider } from 'notistack';
import { X } from 'lucide-react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 0,
      retry: false,
    },
  },
});

export const AllProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      action={(snackbarId) => (
        <X
          size={20}
          onClick={() => closeSnackbar(snackbarId)}
          cursor={'pointer'}
        />
      )}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SnackbarProvider>
  );
};
