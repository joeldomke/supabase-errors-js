import { ErrorMap } from '../../types/error-config';

export type GenerateLinkErrorConfig =
  | {
      code: 'database-error';
      types: '5XX';
    }
  | {
      code: 'error-creating-user';
      types: '5XX';
    }
  | {
      code: 'user-not-found';
      types: '4XX';
    }
  | {
      code: 'user-already-exists';
      types: '4XX';
    };

export type GenerateLinkErrorCode = GenerateLinkErrorConfig['code'];

export const generateLinkErrorMap: ErrorMap<GenerateLinkErrorConfig> = {
  'database-error': {
    message: [
      'Database error finding user',
      'Database error updating user for invite',
      'Database error updating user for recovery',
      'Database error updating user for confirmation',
      'Database error updating user for email change',
    ],
    types: { '5XX': true },
  },
  'error-creating-user': {
    message: ['error creating user'],
    types: { '5XX': true },
  },
  'user-not-found': {
    message: ['User not found'],
    types: { '4XX': true },
  },
  'user-already-exists': {
    message: ['A user with this email address has already been registered'],
    types: { '4XX': true },
  },
};
