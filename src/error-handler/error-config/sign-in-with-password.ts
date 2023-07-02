import { ErrorMap } from '../../types/error-config';

export type SignInWithPasswordErrorConfig =
  | {
      code: 'only-email-or-phone-number';
      types: '4XX' | 'TypeScriptSafe';
    }
  | {
      code: 'email-login-disabled';
      types: '4XX';
    }
  | {
      code: 'phone-number-login-disabled';
      types: '4XX';
    }
  | {
      code: 'database-error';
      types: '5XX';
    }
  | {
      code: 'invalid-login-credentials';
      types: '4XX';
    }
  | {
      code: 'email-not-confirmed';
      types: '4XX';
    }
  | {
      code: 'phone-number-not-confirmed';
      types: '4XX';
    }
  | {
      code: 'error-generating-jwt-token';
      types: '5XX';
    };

export type SignInWithPasswordErrorCode = SignInWithPasswordErrorConfig['code'];

export const signInWithPasswordErrorMap: ErrorMap<SignInWithPasswordErrorConfig> = {
  'only-email-or-phone-number': {
    message: ['Only an email address or phone number should be provided on login.'],
    types: { '4XX': true, TypeScriptSafe: true },
  },
  'email-login-disabled': { message: ['Email logins are disabled'], types: { '4XX': true } },
  'phone-number-login-disabled': { message: ['Phone logins are disabled'], types: { '4XX': true } },
  'database-error': {
    message: ['Database error querying schema', 'Database error creating audit log entry', 'error finding session'],
    types: { '5XX': true },
  },
  'invalid-login-credentials': { message: ['Invalid login credentials'], types: { '4XX': true } },
  'email-not-confirmed': { message: ['Email not confirmed'], types: { '4XX': true } },
  'phone-number-not-confirmed': { message: ['Phone not confirmed'], types: { '4XX': true } },
  'error-generating-jwt-token': { message: ['error generating jwt token'], types: { '5XX': true } },
};
