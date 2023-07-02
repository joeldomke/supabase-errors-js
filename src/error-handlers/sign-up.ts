import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type SignUpErrorCode =
  | 'signups-not-allowed'
  | 'missing-password'
  | 'password-too-short'
  | 'only-email-or-phone-number'
  | 'invalid-channel'
  | 'pkce-not-supported-for-phone-number'
  | 'email-signup-disabled'
  | 'database-error'
  | 'invalid-email-format'
  | 'phone-number-signup-disabled'
  | 'missing-email-or-phone-number'
  | 'missing-email'
  | 'missing-phone-number'
  | 'missing-required-fields'
  | 'user-already-exits';

const signUpErrorMap: ErrorMap<SignUpErrorCode> = {
  'signups-not-allowed': ['Signups not allowed for this instance'],
  'missing-password': ['Signup requires a valid password'],
  'password-too-short': [/Password should be at least \d+ characters/],
  'only-email-or-phone-number': ['Only an email address or phone number should be provided on signup.'],
  'invalid-channel': ["Invalid channel, supported values are 'sms' or 'whatsapp'"],
  'pkce-not-supported-for-phone-number': ['PKCE not supported for phone signups'],
  'email-signup-disabled': ['Email signups are disabled'],
  'database-error': ['Database error finding user'],
  'invalid-email-format': ['An email address is required', 'Unable to validate email address: invalid format'],
  'phone-number-signup-disabled': ['Phone signups are disabled'],
  'missing-email-or-phone-number': ['To signup, please provide your email or phone number'],
  'missing-email': ['To signup, please provide your email'],
  'missing-phone-number': ['To signup, please provide your phone number'],
  'missing-required-fields': ['To signup, please provide required fields'],
  'user-already-exits': ['user already exists'],
};

export function handleSignUpError(error: AuthError, handlers: ErrorHandler<SignUpErrorCode>) {
  handleError(error, handlers, signUpErrorMap);
}
