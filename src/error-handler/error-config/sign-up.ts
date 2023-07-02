import { ErrorMap } from '../../types/error-config';

export type SignUpErrorConfig =
  | {
      code: 'signups-not-allowed';
      types: '4XX';
    }
  | {
      code: 'missing-password';
      types: '4XX' | 'TypeScriptSafe';
    }
  | {
      code: 'password-too-short';
      types: '4XX';
    }
  | {
      code: 'only-email-or-phone-number';
      types: '4XX' | 'TypeScriptSafe';
    }
  | {
      code: 'invalid-channel';
      types: '4XX' | 'TypeScriptSafe';
    }
  | {
      code: 'pkce-not-supported-for-phone-number';
      types: '4XX';
    }
  | {
      code: 'email-signup-disabled';
      types: '4XX';
    }
  | {
      code: 'database-error';
      types: '5XX';
    }
  | {
      code: 'invalid-email-format';
      types: '4XX';
    }
  | {
      code: 'phone-number-signup-disabled';
      types: '4XX';
    }
  | {
      code: 'missing-email-or-phone-number';
      types: '4XX' | 'TypeScriptSafe';
    }
  | {
      code: 'missing-email';
      types: '4XX';
    }
  | {
      code: 'missing-phone-number';
      types: '4XX';
    }
  | {
      code: 'missing-required-fields';
      types: '4XX';
    }
  | {
      code: 'user-already-exits';
      types: '4XX';
    };

export type SignUpErrorCode = SignUpErrorConfig['code'];

export const signUpErrorMap: ErrorMap<SignUpErrorConfig> = {
  'signups-not-allowed': { message: ['Signups not allowed for this instance'], types: { '4XX': true } },
  'missing-password': {
    message: ['Signup requires a valid password'],
    types: { '4XX': true, TypeScriptSafe: true },
  },
  'password-too-short': {
    message: [/Password should be at least \d+ characters/],
    types: { '4XX': true },
  },
  'only-email-or-phone-number': {
    message: ['Only an email address or phone number should be provided on signup.'],
    types: { '4XX': true, TypeScriptSafe: true },
  },
  'invalid-channel': {
    message: ["Invalid channel, supported values are 'sms' or 'whatsapp'"],
    types: { '4XX': true, TypeScriptSafe: true },
  },
  'pkce-not-supported-for-phone-number': {
    message: ['PKCE not supported for phone signups'],
    types: { '4XX': true },
  },
  'email-signup-disabled': {
    message: ['Email signups are disabled'],
    types: { '4XX': true },
  },
  'database-error': {
    message: ['Database error finding user'],
    types: { '5XX': true },
  },

  'invalid-email-format': {
    message: ['An email address is required', 'Unable to validate email address: invalid format'],
    types: { '4XX': true },
  },
  'phone-number-signup-disabled': {
    message: ['Phone signups are disabled'],
    types: { '4XX': true },
  },
  'missing-email-or-phone-number': {
    message: ['To signup, please provide your email or phone number'],
    types: { '4XX': true, TypeScriptSafe: true },
  },
  'missing-email': {
    message: ['To signup, please provide your email'],
    types: { '4XX': true },
  },
  'missing-phone-number': {
    message: ['To signup, please provide your phone number'],
    types: { '4XX': true },
  },
  'missing-required-fields': {
    message: ['To signup, please provide required fields'],
    types: { '4XX': true },
  },
  'user-already-exits': {
    message: ['user already exists'],
    types: { '4XX': true },
  },
};
