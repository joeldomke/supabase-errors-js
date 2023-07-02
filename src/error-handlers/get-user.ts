import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type GetUserErrorCode = never;

const getUserErrorMap: ErrorMap<GetUserErrorCode> = {};

export function handleGetUserError(error: AuthError, handlers: ErrorHandler<GetUserErrorCode>) {
  handleError(error, handlers, getUserErrorMap);
}
