import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type GetUserByIDErrorCode = never;

const getUserByIDErrorMap: ErrorMap<GetUserByIDErrorCode> = {};

export function handleGetUserByIDError(error: AuthError, handlers: ErrorHandler<GetUserByIDErrorCode>) {
  handleError(error, handlers, getUserByIDErrorMap);
}
