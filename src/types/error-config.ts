import { SignInWithPasswordErrorCode } from '../error-handlers/sign-in-with-password';
import { SignUpErrorCode } from '../error-handlers/sign-up';

export type AuthErrorCode = SignInWithPasswordErrorCode | SignUpErrorCode;

export type ErrorMap<C extends AuthErrorCode> = {
  [Code in C]: Array<string | RegExp>;
};
