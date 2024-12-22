import { AxiosError } from 'axios';
import { EnqueueSnackbar } from 'notistack';

export const errorHandler = ({
  error,
  setError,
  enqueueSnackbar,
}: {
  error: Error;
  setError?: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  enqueueSnackbar: EnqueueSnackbar;
}) => {
  if (error instanceof AxiosError) {
    if (error.response?.status === 400) {
      if (error.response?.data?.code === 'VALIDATION_ERROR') {
        const validationErrors = error.response?.data?.errors;
        for (const validationError of validationErrors) {
          setError?.((error) => ({
            ...error,
            [validationError.field]: validationError.message,
          }));
        }
        return;
      }
    }
    enqueueSnackbar({
      message: `${error.response?.data?.message ?? error.message}`,
      variant: 'error',
    });
  }
};
