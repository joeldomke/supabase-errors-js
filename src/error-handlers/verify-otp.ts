import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type VerifyOtpErrorCode = never;

const verifyOtpForEmailErrorMap: ErrorMap<VerifyOtpErrorCode> = {};

export function handleVerifyOtpError(error: AuthError, handlers: ErrorHandler<VerifyOtpErrorCode>) {
  handleError(error, handlers, verifyOtpForEmailErrorMap);
}
