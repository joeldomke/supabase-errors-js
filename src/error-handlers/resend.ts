import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type ResendErrorCode = never;

const resendErrorMap: ErrorMap<ResendErrorCode> = {};

export function handleResendError(error: AuthError, handlers: ErrorHandler<ResendErrorCode>) {
  handleError(error, handlers, resendErrorMap);
}
