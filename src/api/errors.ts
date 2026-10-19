import { isAxiosError } from "axios";
import type { ProblemDetails } from "../types/problemDetails";

export function getErrorMessage(error: unknown): string {
  if (!isAxiosError(error)) {
    return "Something went wrong.Please try again";
  }
  if (!error.response) {
    return "Cannot reach the server. Please try again shortly";
  }
  const data = error.response.data as ProblemDetails | undefined;

  if (data?.detail) {
    return data.detail;
  }
  const firstValidation = data?.errors && Object.values(data.errors)[0]?.[0];
  if (firstValidation) {
    return firstValidation;
  }
  if (data?.title) return data.title;

  return "Something went wrong. Please try again";
}
