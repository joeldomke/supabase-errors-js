import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type GenerateLinkErrorCode = 'database-error' | 'error-creating-user' | 'user-not-found' | 'user-already-exists';

const generateLinkErrorMap: ErrorMap<GenerateLinkErrorCode> = {
  'database-error': [
    'Database error finding user',
    'Database error updating user for invite',
    'Database error updating user for recovery',
    'Database error updating user for confirmation',
    'Database error updating user for email change',
  ],
  'error-creating-user': ['error creating user'],
  'user-not-found': ['User not found'],
  'user-already-exists': ['A user with this email address has already been registered'],
};

export function handleGenerateLinkError(error: AuthError, handlers: ErrorHandler<GenerateLinkErrorCode>) {
  handleError(error, handlers, generateLinkErrorMap);
}
