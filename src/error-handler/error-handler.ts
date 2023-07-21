import { AuthError } from '@supabase/gotrue-js';
import { ErrorHandlerConfig, ErrorHandlerConfigWithDefaults, ErrorHandlerType, HandlerName } from '../types/handlers';
import { AuthErrorConfig, ErrorMap } from '../types/error-config';
import { CreateUserErrorConfig, createUserErrorMap } from './error-config/create-user';
import { DeleteUserErrorConfig, deleteUserErrorMap } from './error-config/delete-user';
import { SignInWithPasswordErrorConfig, signInWithPasswordErrorMap } from './error-config/sign-in-with-password';
import {
  ExchangeCodeForSessionErrorConfig,
  exchangeCodeForSessionErrorMap,
} from './error-config/exchange-code-for-session';
import { GenerateLinkErrorConfig, generateLinkErrorMap } from './error-config/generate-link';
import { GetSessionErrorConfig, getSessionErrorMap } from './error-config/get-session';
import { GetUserErrorConfig, getUserErrorMap } from './error-config/get-user';
import { GetUserByIDErrorConfig, getUserByIDErrorMap } from './error-config/get-user-by-id';
import { InviteUserByEmailErrorConfig, inviteUserByEmailErrorMap } from './error-config/invite-user-by-email';
import { ListUsersErrorConfig, listUsersErrorMap } from './error-config/list-users';
import { ReauthenticateErrorConfig, reauthenticateErrorMap } from './error-config/reauthenticate';
import { RefreshSessionErrorConfig, refreshSessionErrorMap } from './error-config/refresh-session';
import { ResendErrorConfig, resendErrorMap } from './error-config/resend';
import {
  ResetPasswordForEmailErrorConfig,
  resetPasswordForEmailErrorMap,
} from './error-config/reset-password-for-email';
import { SetSessionErrorConfig, setSessionErrorMap } from './error-config/set-session';
import { SignInWithOAuthErrorConfig, signInWithOAuthErrorMap } from './error-config/sign-in-with-o-auth';
import { VerifyOTPErrorConfig, verifyOTPErrorMap } from './error-config/verify-otp';
import { SignInWithOtpErrorConfig, signInWithOtpErrorMap } from './error-config/sign-in-with-otp';
import { SignInWithSSOErrorConfig, signInWithSSOErrorMap } from './error-config/sign-in-with-sso';
import { SignOutErrorConfig, signOutErrorMap } from './error-config/sign-out';
import { SignUpErrorConfig, signUpErrorMap } from './error-config/sign-up';
import { UpdateUserErrorConfig, updateUserErrorMap } from './error-config/update-user';
import { UpdateUserByIDErrorConfig, updateUserByIDErrorMap } from './error-config/update-user-by-id';

export class ErrorHandler<
  P extends Partial<ErrorHandlerConfig> | undefined,
  T extends ErrorHandlerConfigWithDefaults<P> = ErrorHandlerConfigWithDefaults<P>,
> {
  config: T;

  constructor(config?: P) {
    this.config = this.withDefaults(config) as T;
  }

  private withDefaults<P extends Partial<ErrorHandlerConfig> | undefined>(
    config: P,
  ): ErrorHandlerConfigWithDefaults<P> {
    return {
      combineInternalErrors: config?.combineInternalErrors ?? false,
      excludeTypes: config?.excludeTypes ?? [],
      disableLogging: config?.disableLogging ?? false,
    } as ErrorHandlerConfigWithDefaults<P>;
  }

  // Handlers
  handleCreateUserError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<CreateUserErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, createUserErrorMap);
  }

  handleDeleteUserError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<DeleteUserErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, deleteUserErrorMap);
  }

  handleExchangeCodeForSessionError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<ExchangeCodeForSessionErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, exchangeCodeForSessionErrorMap);
  }

  handleGenerateLinkError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<GenerateLinkErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, generateLinkErrorMap);
  }

  handleGetSessionError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<GetSessionErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, getSessionErrorMap);
  }

  handleGetUserByIDError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<GetUserByIDErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, getUserByIDErrorMap);
  }

  handleGetUserError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<GetUserErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, getUserErrorMap);
  }

  handleInviteUserByEmailError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<InviteUserByEmailErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, inviteUserByEmailErrorMap);
  }

  handleListUsersError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<ListUsersErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, listUsersErrorMap);
  }

  handleReauthenticateError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<ReauthenticateErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, reauthenticateErrorMap);
  }

  handleRefreshSessionError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<RefreshSessionErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, refreshSessionErrorMap);
  }

  handleResendError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<ResendErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, resendErrorMap);
  }

  handleResetPasswordForEmailError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<ResetPasswordForEmailErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, resetPasswordForEmailErrorMap);
  }

  handleSetSessionError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<SetSessionErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, setSessionErrorMap);
  }

  handleSignInWithOAuthError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<SignInWithOAuthErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, signInWithOAuthErrorMap);
  }

  handleSignInWithOTPError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<SignInWithOtpErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, signInWithOtpErrorMap);
  }

  handleSignInWithPasswordError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<SignInWithPasswordErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, signInWithPasswordErrorMap);
  }

  handleSignInWithSSOError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<SignInWithSSOErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, signInWithSSOErrorMap);
  }

  handleSignOutError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<SignOutErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, signOutErrorMap);
  }

  handleSignUpError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<SignUpErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, signUpErrorMap);
  }

  handleUpdateUserByIDError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<UpdateUserByIDErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, updateUserByIDErrorMap);
  }

  handleUpdateUserError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<UpdateUserErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, updateUserErrorMap);
  }

  handleVerifyOTPError<HC extends ErrorHandlerConfig = T>(
    error: AuthError,
    handlers: ErrorHandlerType<VerifyOTPErrorConfig, HC>,
  ) {
    this.handleError(error, handlers, verifyOTPErrorMap);
  }

  private handleError<EC extends AuthErrorConfig>(
    error: AuthError,
    handlers: ErrorHandlerType<EC, T>,
    errorMap: ErrorMap<EC>,
  ) {
    const errorCode = this.getErrorCode(error, errorMap);

    if (!errorCode) {
      handlers.onUnknownError?.call({}, error);
      if (!this.config.disableLogging) {
        console.warn(
          'Unknown error message: ',
          error.message,
          '\n\nPlease consider creating a new issue here: https://github.com/joeldomke/supabase-errors-js/issues/new',
        );
      }
      return;
    }

    // TODO: this will skip 5XX errors that are not in the error config
    if (this.config.combineInternalErrors && this.isInternalErrorCode(errorCode, errorMap)) {
      const h = handlers as ErrorHandlerType<EC, T & { combineInternalErrors: true }>;
      if ('onInternalError' in h && h.onInternalError) {
        h.onInternalError(errorCode);
        return;
      }
      handlers.onUnhandledError?.call({}, errorCode);
      return;
    }

    const handlerName = this.errorCodeToHandlerName(errorCode);
    const handler = handlers[handlerName as keyof typeof handlers];
    if (handler) {
      (handler as () => void)();
      return;
    }
    if (handlers.onUnhandledError) {
      handlers.onUnhandledError(errorCode);
      return;
    }
  }

  private errorCodeToHandlerName<C extends string>(code: C): HandlerName<C> {
    return ('on' +
      code
        .split('-')
        .map((p) => p[0].toUpperCase() + p.slice(1))
        .join('')) as HandlerName<C>;
  }

  private getErrorCode<C extends AuthErrorConfig>(error: AuthError, errorMap: ErrorMap<C>): C['code'] | undefined {
    const errorMessage = error.message;
    for (const code of Object.keys(errorMap) as (keyof ErrorMap<C>)[]) {
      const config = errorMap[code];
      if (config.message.some((m) => errorMessage.match(m))) {
        return code;
      }
    }
  }

  private isInternalErrorCode<C extends AuthErrorConfig>(code: C['code'], errorMap: ErrorMap<C>): boolean {
    return Object.keys(errorMap[code].types).some((t) => t === '5XX');
  }
}
