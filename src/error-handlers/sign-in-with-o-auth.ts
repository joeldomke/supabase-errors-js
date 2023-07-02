import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type SignInWithOAuthErrorCode = never;

const signInWithOAuthErrorMap: ErrorMap<SignInWithOAuthErrorCode> = {};

export function handleSignInWithOAuthError(error: AuthError, handlers: ErrorHandler<SignInWithOAuthErrorCode>) {
  handleError(error, handlers, signInWithOAuthErrorMap);
}
