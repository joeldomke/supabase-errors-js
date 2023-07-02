import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type SignOutErrorCode = never;

const signOutErrorMap: ErrorMap<SignOutErrorCode> = {};

export function handleSignOutError(error: AuthError, handlers: ErrorHandler<SignOutErrorCode>) {
  handleError(error, handlers, signOutErrorMap);
}
