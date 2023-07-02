import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type SignInWithSSOErrorCode = never;

const signInWithSSOErrorMap: ErrorMap<SignInWithSSOErrorCode> = {};

export function handleSignInWithSSOError(error: AuthError, handlers: ErrorHandler<SignInWithSSOErrorCode>) {
  handleError(error, handlers, signInWithSSOErrorMap);
}
