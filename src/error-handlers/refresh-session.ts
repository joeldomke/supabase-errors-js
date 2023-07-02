import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type RefreshSessionErrorCode = never;

const refreshSessionErrorMap: ErrorMap<RefreshSessionErrorCode> = {};

export function handleRefreshSessionError(error: AuthError, handlers: ErrorHandler<RefreshSessionErrorCode>) {
  handleError(error, handlers, refreshSessionErrorMap);
}
