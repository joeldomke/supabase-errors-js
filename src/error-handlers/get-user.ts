import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type GetUserErrorCode = 'missing-bearer-token' | 'user-not-found' | 'database-error';

const getUserErrorMap: ErrorMap<GetUserErrorCode> = {
  'database-error': ['error finding user', 'error finding session'],
  'missing-bearer-token': ['This endpoint requires a Bearer token'],
  'user-not-found': ['User not found'],
};

export function handleGetUserError(error: AuthError, handlers: ErrorHandler<GetUserErrorCode>) {
  handleError(error, handlers, getUserErrorMap);
}
