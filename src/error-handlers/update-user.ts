import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type UpdateUserErrorCode = never;

const updateUserErrorMap: ErrorMap<UpdateUserErrorCode> = {};

export function handleUpdateUserError(error: AuthError, handlers: ErrorHandler<UpdateUserErrorCode>) {
  handleError(error, handlers, updateUserErrorMap);
}
