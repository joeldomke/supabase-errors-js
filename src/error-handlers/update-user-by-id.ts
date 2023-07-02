import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type UpdateUserByIDErrorCode = never;

const updateUserByIDErrorMap: ErrorMap<UpdateUserByIDErrorCode> = {};

export function handleUpdateUserByIDError(error: AuthError, handlers: ErrorHandler<UpdateUserByIDErrorCode>) {
  handleError(error, handlers, updateUserByIDErrorMap);
}
