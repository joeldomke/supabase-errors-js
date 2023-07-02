import { SignInWithPasswordErrorCode } from '../error-handlers/sign-in-with-password';
import { SignUpErrorCode } from '../error-handlers/sign-up';
import { SignInWithOtpErrorCode } from '../error-handlers/sign-in-with-otp';
import { SignInWithOAuthErrorCode } from '../error-handlers/sign-in-with-o-auth';
import { SignInWithSSOErrorCode } from '../error-handlers/sign-in-with-sso';
import { SignOutErrorCode } from '../error-handlers/sign-out';
import { ResetPasswordForEmailErrorCode } from '../error-handlers/reset-password-for-email';
import { VerifyOtpErrorCode } from '../error-handlers/verify-otp';
import { GetSessionErrorCode } from '../error-handlers/get-session';
import { ResendErrorCode } from '../error-handlers/resend';
import { RefreshSessionErrorCode } from '../error-handlers/refresh-session';
import { GetUserErrorCode } from '../error-handlers/get-user';
import { UpdateUserErrorCode } from '../error-handlers/update-user';
import { ReauthenticateErrorCode } from '../error-handlers/reauthenticate';
import { SetSessionErrorCode } from '../error-handlers/set-session';
import { ExchangeCodeForSessionErrorCode } from '../error-handlers/exchange-code-for-session';
import { GetUserByIDErrorCode } from '../error-handlers/get-user-by-id';
import { ListUsersErrorCode } from '../error-handlers/list-users';
import { CreateUserErrorCode } from '../error-handlers/create-user';
import { DeleteUserErrorCode } from '../error-handlers/delete-user';
import { InviteUserByEmailErrorCode } from '../error-handlers/invite-user-by-email';
import { GenerateLinkErrorCode } from '../error-handlers/generate-link';
import { UpdateUserByIDErrorCode } from '../error-handlers/update-user-by-id';

export type AuthErrorCode =
  | SignInWithPasswordErrorCode
  | SignUpErrorCode
  | SignInWithOtpErrorCode
  | SignInWithOAuthErrorCode
  | SignInWithSSOErrorCode
  | SignOutErrorCode
  | ResetPasswordForEmailErrorCode
  | VerifyOtpErrorCode
  | GetSessionErrorCode
  | RefreshSessionErrorCode
  | GetUserErrorCode
  | UpdateUserErrorCode
  | ReauthenticateErrorCode
  | ResendErrorCode
  | SetSessionErrorCode
  | ExchangeCodeForSessionErrorCode
  | GetUserByIDErrorCode
  | ListUsersErrorCode
  | CreateUserErrorCode
  | DeleteUserErrorCode
  | InviteUserByEmailErrorCode
  | GenerateLinkErrorCode
  | UpdateUserByIDErrorCode;

export type ErrorMap<C extends AuthErrorCode> = {
  [Code in C]: Array<string | RegExp>;
};
