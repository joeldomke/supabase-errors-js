import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type ReauthenticateErrorCode = never;

const reauthenticateErrorMap: ErrorMap<ReauthenticateErrorCode> = {};

export function handleReauthenticateError(error: AuthError, handlers: ErrorHandler<ReauthenticateErrorCode>) {
  handleError(error, handlers, reauthenticateErrorMap);
}
