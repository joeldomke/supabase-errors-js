import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type SignInWithPasswordErrorCode =
  | 'only-email-or-phone-number'
  | 'email-login-disabled'
  | 'phone-number-login-disabled'
  | 'database-error'
  | 'invalid-login-credentials'
  | 'email-not-confirmed'
  | 'phone-number-not-confirmed'
  | 'error-generating-jwt-token';

const signInWithPasswordErrorMap: ErrorMap<SignInWithPasswordErrorCode> = {
  'only-email-or-phone-number': ['Only an email address or phone number should be provided on login.'],
  'email-login-disabled': ['Email logins are disabled'],
  'phone-number-login-disabled': ['Phone logins are disabled'],
  'database-error': [
    'Database error querying schema',
    'Database error creating audit log entry',
    'error finding session',
  ],
  'invalid-login-credentials': ['Invalid login credentials'],
  'email-not-confirmed': ['Email not confirmed'],
  'phone-number-not-confirmed': ['Phone not confirmed'],
  'error-generating-jwt-token': ['error generating jwt token'],
};

export function handleSignInWithPasswordError(error: AuthError, handlers: ErrorHandler<SignInWithPasswordErrorCode>) {
  handleError(error, handlers, signInWithPasswordErrorMap);
}
