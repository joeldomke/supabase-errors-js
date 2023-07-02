import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type GetSessionErrorCode = never;

const getSessionErrorMap: ErrorMap<GetSessionErrorCode> = {};

export function handleGetSessionError(error: AuthError, handlers: ErrorHandler<GetSessionErrorCode>) {
  handleError(error, handlers, getSessionErrorMap);
}
