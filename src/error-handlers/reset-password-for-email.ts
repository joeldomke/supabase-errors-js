import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type ResetPasswordForEmailErrorCode =
  | 'invalid-email-format'
  | 'too-many-requests'
  | 'unable-to-process-request'
  | 'database-error';

const resetPasswordForEmailErrorMap: ErrorMap<ResetPasswordForEmailErrorCode> = {
  'invalid-email-format': [
    'An email address is required',
    'Unable to validate email address: invalid format',
    'Password recovery requires an email',
  ],
  'too-many-requests': ['For security purposes, you can only request this once every 60 seconds'],
  'unable-to-process-request': ['Unable to process request'],
  'database-error': ['Database error creating audit log entry'],
};

export function handleResetPasswordForEmailError(
  error: AuthError,
  handlers: ErrorHandler<ResetPasswordForEmailErrorCode>,
) {
  handleError(error, handlers, resetPasswordForEmailErrorMap);
}
