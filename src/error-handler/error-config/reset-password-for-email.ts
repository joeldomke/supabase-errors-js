import { ErrorMap } from '../../types/error-config';

export type ResetPasswordForEmailErrorConfig =
  | {
      code: 'invalid-email-format';
      types: '4XX';
    }
  | {
      code: 'too-many-requests';
      types: '4XX';
    }
  | {
      code: 'unable-to-process-request';
      types: '5XX';
    }
  | {
      code: 'database-error';
      types: '5XX';
    };

export type ResetPasswordForEmailErrorCode = ResetPasswordForEmailErrorConfig['code'];

export const resetPasswordForEmailErrorMap: ErrorMap<ResetPasswordForEmailErrorConfig> = {
  'invalid-email-format': {
    message: [
      'An email address is required',
      'Unable to validate email address: invalid format',
      'Password recovery requires an email',
    ],
    types: { '4XX': true },
  },
  'too-many-requests': {
    message: ['For security purposes, you can only request this once every 60 seconds'],
    types: { '4XX': true },
  },
  'unable-to-process-request': {
    message: ['Unable to process request'],
    types: { '5XX': true },
  },
  'database-error': {
    message: ['Database error creating audit log entry'],
    types: { '5XX': true },
  },
};
