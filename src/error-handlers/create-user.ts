import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type CreateUserErrorCode = never;

const createUserErrorMap: ErrorMap<CreateUserErrorCode> = {};

export function handleCreateUserError(error: AuthError, handlers: ErrorHandler<CreateUserErrorCode>) {
  handleError(error, handlers, createUserErrorMap);
}
