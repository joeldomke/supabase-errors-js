import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type DeleteUserErrorCode = never;

const deleteUserErrorMap: ErrorMap<DeleteUserErrorCode> = {};

export function handleDeleteUserError(error: AuthError, handlers: ErrorHandler<DeleteUserErrorCode>) {
  handleError(error, handlers, deleteUserErrorMap);
}
