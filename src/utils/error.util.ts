import { AxiosError } from 'axios';

export const errorHandler = ({
  error,
  setError,
}: {
  error: Error;
  setError: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) => {
  if (error instanceof AxiosError) {
    if (error.response?.status === 400) {
      if (error.response?.data?.code === 'VALIDATION_ERROR') {
        const validationErrors = error.response?.data?.errors;
        for (const validationError of validationErrors) {
          setError((error) => ({
            ...error,
            [validationError.field]: validationError.message,
          }));
        }
      }
    }
  }
};
