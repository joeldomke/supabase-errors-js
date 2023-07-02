import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type ListUsersErrorCode = never;

const listUsersErrorMap: ErrorMap<ListUsersErrorCode> = {};

export function handleListUsersError(error: AuthError, handlers: ErrorHandler<ListUsersErrorCode>) {
  handleError(error, handlers, listUsersErrorMap);
}
