import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type SignInWithOtpErrorCode = never;

const signInWithOtpErrorMap: ErrorMap<SignInWithOtpErrorCode> = {};

export function handleSignInWithOtpError(error: AuthError, handlers: ErrorHandler<SignInWithOtpErrorCode>) {
  handleError(error, handlers, signInWithOtpErrorMap);
}
