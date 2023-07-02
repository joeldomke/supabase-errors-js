import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type SetSessionErrorCode = never;

const setSessionErrorMap: ErrorMap<SetSessionErrorCode> = {};

export function handleSetSessionError(error: AuthError, handlers: ErrorHandler<SetSessionErrorCode>) {
  handleError(error, handlers, setSessionErrorMap);
}
